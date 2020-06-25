import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;

  background: ${colors.color1};
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.color3};
  font-size: 36px;
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: ${colors.color2};
  margin-top: 16px;
  text-align: center;
`;

export const OkButton = styled(RectButton)`
  background: ${colors.success};
  padding: 12px 24px;
  border-radius: 10px;
  margin-top: 24px;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.color3};
`;
