import React from 'react';
import { TextInputProps } from 'react-native';

import colors from '../../../styles/colors';
import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <Container>
      <Icon name={icon} size={20} color={colors.color4} />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.color4}
        {...rest}
      />
    </Container>
  );
};

export default Input;
