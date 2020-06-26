import styled from 'styled-components/native';
import { Platform } from 'react-native';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: ${colors.color1};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: ${colors.color3};
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const SignOutButton = styled.TouchableOpacity`
  margin-left: auto;
  background: ${colors.error};
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
`;

export const Content = styled.View`
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 60 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${colors.color5};
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
