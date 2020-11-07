<template>
  <div class="home">
    <WatchDisplay />
    <Container margin="26px 0 0 0">
      <ButtonStartStop @click="onClick" :isStarted="store.state.isStarted"/>
    </Container>
  </div>
</template>

<script>
import WatchDisplay from '@/components/cells/WatchDisplay/WatchDisplay.vue';
import Container from '@/components/molecules/Container.vue';
import ButtonStartStop from '@/components/cells/buttons/ButtonStartStop.vue';

import Store from '@/store';

export default {
  name: 'Home',
  components: {
    Container,
    WatchDisplay,
    ButtonStartStop,
  },
  data() {
    return {
      store: Store,
    };
  },
  methods: {
    onClick() {
      this.store.startStop();
    },
  },
};

</script>
