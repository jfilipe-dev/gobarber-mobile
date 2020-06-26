import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation, useRoute } from '@react-navigation/native';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';
import colors from '../../../styles/colors';

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  const formattedDate = useMemo(() => {
    return format(routeParams.date, "PPPP 'às' HH:mm'h'", { locale: ptBR });
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color={colors.success} />

      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Entendido!</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
