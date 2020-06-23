import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.color5};
  font-family: 'RobotoSlab-Regular';
  margin: 64px 0 24px;
  text-align: center;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.color1};
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  text-align: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.color1};
  border-top-width: 1px;
  border-top-color: ${colors.color6};
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${colors.color3};
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ContentImg = styled.View`
  background: ${colors.color1};
  width: 100%;
  padding: 25px 0px;
  justify-content: center;
  align-items: center;
`;

export const ContentForm = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;
