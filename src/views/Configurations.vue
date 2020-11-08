<template>
  <Container>
    <Container margin="0 0 78px 0" width="100%">
      <Title>Configurações</Title>
    </Container>
    <Container margin="0 0 58px 0">
      <Subtitle>Tempo de trabalho</Subtitle>
      <Time>00:00</Time>
    </Container>
    <Container margin="0 0 58px 0">
      <Subtitle>Tempo de descanso</Subtitle>
      <Time>00:00</Time>
    </Container>
    <Container direction="row">
      <Container margin="0 79px 0 0">
        <ButtonCancel @click="cancelHandler" />
      </Container>
      <ButtonConfirm />
    </Container>
  </Container>
</template>

<script>
import Container from '@/components/atoms/Container.vue';
import Title from '@/components/atoms/Title.vue';
import Subtitle from '@/components/atoms/Subtitle.vue';
import Time from '@/components/atoms/Time.vue';
import ButtonCancel from '@/components/molecules/buttons/ButtonCancel.vue';
import ButtonConfirm from '@/components/molecules/buttons/ButtonConfirm.vue';

export default {
  name: 'Configurations',
  components: {
    Container,
    Title,
    Subtitle,
    Time,
    ButtonCancel,
    ButtonConfirm,
  },
  methods: {
    cancelHandler() {
      this.$router.push('/');
    },
  },
};
</script>
