import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../../styles/colors';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${colors.color2};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.color3};
  font-size: 18px;
`;
