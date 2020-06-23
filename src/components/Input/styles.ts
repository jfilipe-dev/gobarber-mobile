import styled, { css } from 'styled-components/native';
import MyIcon from 'react-native-vector-icons/Feather';

import colors from '../../../styles/colors';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${colors.color3};
  border-radius: 4px;
  margin-bottom: 8px;
  border: 2px solid ${colors.color3};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${colors.color2};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.color5};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(MyIcon)`
  margin-right: 16px;
`;
