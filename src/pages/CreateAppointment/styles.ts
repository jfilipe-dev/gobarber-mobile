import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Provider } from './index';

import colors from '../../../styles/colors';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextprops {
  selected: boolean;
}

export const Container = styled.View``;

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

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton)<ProviderContainerProps>`
  background: ${(props) => (props.selected ? colors.color2 : colors.color3)};
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  margin-right: 16px;
  border-radius: 10px;
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${(props) => (props.selected ? colors.color3 : colors.color5)};
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.color5};
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 46px;
  background: ${colors.color2};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${colors.color3};
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.color5};
  font-family: 'RobotoSlab-Regular';
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourProps>`
  padding: 12px;
  background: ${(props) => (props.selected ? colors.color2 : colors.color3)};
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextprops>`
  color: ${(props) => (props.selected ? colors.color3 : colors.color5)};
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 62px;
  background: ${colors.color1};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: ${colors.color3};
`;
