<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
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
  font-family:'Roboto', Avenir, Helvetica, Arial, sans-serif;
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

@keyframes charge {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes recharge{
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1000;
  }
}
</style>
