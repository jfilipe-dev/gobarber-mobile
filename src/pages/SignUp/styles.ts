import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 160 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.color1};
  font-family: 'RobotoSlab-Regular';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${colors.color3};
  border-top-width: 1px;
  border-top-color: ${colors.color3};
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: ${colors.color1};
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
