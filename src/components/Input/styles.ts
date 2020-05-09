import styled from 'styled-components/native';
import MyIcon from 'react-native-vector-icons/Feather';

import colors from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${colors.color3};
  border-radius: 4px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${colors.color1};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(MyIcon)`
  margin-right: 16px;
`;
