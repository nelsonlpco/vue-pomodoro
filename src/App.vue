<template>
  <main v-cloak>
    <div id="app">
      <router-view/>
    </div>
  </main>
</template>

<script>
import Store from '@/store';
import Theme from '@/theme/theme';

Store.loadConfig();

export default {
  name: 'App',
  provide() {
    return {
      store: this.store,
      theme: Theme,
    };
  },
  data() {
    return {
      store: Store,
    };
  },
};
</script>

<style lang="scss">
  @import './theme/index.scss';
</style>
