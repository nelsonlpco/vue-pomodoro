<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './theme/theme.scss';

body {
  margin: 0;
  padding: 0;
  background: $primaryBackground;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  min-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}

</style>
