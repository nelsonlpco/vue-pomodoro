<template>
<transition name="modal" appear>
  <div class="modal">
    <div class="modal-overlay" />
    <div class="modal-container">
      <Container>
        <Title>{{$t('notifications')}}</Title>
        <Container margin="100px 0 0 0">
          <Subtitle>
            {{$t('allowNotifications')}}
          </Subtitle>
        </Container>
        <Container margin="100px 0 0 0">
          <ButtonConfirm @click="ok" />
        </Container>
      </Container>
    </div>
  </div>
</transition>
</template>
<script>
import Container from '@/components/atoms/Container.vue';
import Title from '@/components/atoms/Title.vue';
import Subtitle from '@/components/atoms/Subtitle.vue';
import ButtonConfirm from '@/components/molecules/buttons/ButtonConfirm.vue';

export default {
  name: 'ModalMessage',
  components: {
    Container,
    Title,
    Subtitle,
    ButtonConfirm,
  },
  inject: ['store'],
  methods: {
    ok() {
      this.store.notificationRequested();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../theme/theme.scss';

  .modal{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primaryBackground;
    z-index: 1000;
  }

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    background: $primaryBackground;
    z-index: -1;
  }

  .modal-container {
    border: solid 1px $primary;
    border-radius: 5px;
    padding: 27px;
    color: $textColor;
    opacity: 1;
  }

  .modal-leave-active {
    animation: close 0.5s ease-in forwards;
  }

  @keyframes close {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>>
