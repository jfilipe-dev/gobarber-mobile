import React, { useRef, useCallback } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import colors from '../../../styles/colors';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  SignOutButton,
  Content,
  Title,
  UserAvatarButton,
  UserAvatar,
} from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

interface ImageResponse extends ImagePickerResponse {
  originalRotation: number;
}

const SignUp: React.FC = () => {
  const { user, updateUser, signOut } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const handleUpdateProfile = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),

          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          old_password: Yup.string(),

          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string()
              .min(6, 'A nova senha precisa ter no mínimo de 6 dígitos')
              .required('Nova senha obrigatória'),
            otherwise: Yup.string(),
          }),

          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required(
                'Confirmação da nova senha obrigatório',
              ),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert(
          'Perfil atualizado!',
          'As informações do seu perfil foram atualizadas com sucesso.',
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          Alert.alert(
            `Erro no preenchimento.`,
            `${Object.values(errors).map((error) => `\n${error}`)}.`,
          );
        } else {
          Alert.alert(
            'Erro na atualização do perfil',
            'Ocorreu um erro ao fazer a atualização do perfil, tente novamente.',
          );
        }
      }
    },
    [navigation, updateUser],
  );

  const handleUpdateAvatar = useCallback(() => {
    try {
      ImagePicker.showImagePicker(
        {
          title: 'Selecione uma foto',
          cancelButtonTitle: 'Cancelar',
          takePhotoButtonTitle: 'Usar câmera',
          chooseFromLibraryButtonTitle: 'Escolher da galeria',
        },
        (response) => {
          if (response.didCancel) {
            return;
          }

          if (response.error) {
            Alert.alert(response.error);
            return;
          }

          const imageResponse = response as ImageResponse;

          const data = new FormData();

          const rotation =
            imageResponse.uri.indexOf('gobarbermobile') !== -1
              ? imageResponse.originalRotation
              : 0;

          ImageResizer.createResizedImage(
            response.uri,
            1200,
            1200,
            'JPEG',
            50,
            rotation,
          ).then((image) => {
            const file = {
              uri: image.uri,
              name: image.name,
              type: 'image/jpeg',
            };

            data.append('avatar', file as any);

            api.patch('users/avatar', data).then((apiReponse) => {
              updateUser(apiReponse.data);
            });
          });

          Alert.alert(
            'Foto de perfil atualizada.',
            'A sua foto de perfil foi atualizada com sucesso.',
          );
        },
      );
    } catch (err) {
      Alert.alert(
        'Falha ao atualizar foto de perfil',
        'Ocorreu um erro ao atualizar a sua foto de perfil, tente novamente.',
      );
    }
  }, [updateUser]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Container>
          <Header>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color={colors.color2} />
            </BackButton>

            <HeaderTitle>Voltar</HeaderTitle>

            <SignOutButton onPress={handleSignOut}>
              <Icon name="power" size={24} color={colors.color3} />
            </SignOutButton>
          </Header>

          <ScrollView>
            <Content>
              <UserAvatarButton onPress={handleUpdateAvatar}>
                <UserAvatar
                  source={{
                    uri:
                      user.avatar_url ||
                      'https://api.adorable.io/avatars/285/abott@adorable.png',
                  }}
                />
              </UserAvatarButton>

              <View>
                <Title>Meu perfil</Title>
              </View>

              <Form
                initialData={{ name: user.name, email: user.email }}
                ref={formRef}
                onSubmit={handleUpdateProfile}
              >
                <Input
                  autoCapitalize="words"
                  name="name"
                  icon="user"
                  placeholder="Nome"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    emailInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={emailInputRef}
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  name="email"
                  icon="mail"
                  placeholder="E-mail"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    oldPasswordInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={oldPasswordInputRef}
                  secureTextEntry
                  name="old_password"
                  icon="lock"
                  placeholder="Senha atual"
                  textContentType="newPassword"
                  returnKeyType="next"
                  containerStyle={{ marginTop: 16 }}
                  onSubmitEditing={() => {
                    passwordInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={passwordInputRef}
                  secureTextEntry
                  name="password"
                  icon="lock"
                  placeholder="Nova senha"
                  textContentType="newPassword"
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    confirmPasswordInputRef.current?.focus();
                  }}
                />

                <Input
                  ref={confirmPasswordInputRef}
                  secureTextEntry
                  name="password_confirmation"
                  icon="lock"
                  placeholder="Comfirmar nova senha"
                  textContentType="newPassword"
                  returnKeyType="send"
                  onSubmitEditing={() => {
                    formRef.current?.submitForm();
                  }}
                />

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}
                >
                  Confirmar mudanças
                </Button>
              </Form>
            </Content>
          </ScrollView>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
