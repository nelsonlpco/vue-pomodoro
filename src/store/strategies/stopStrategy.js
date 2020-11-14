export default {
  isValid: (store) => store.state.isStarted
  && !store.state.isWorking
  && store.state.isInterval
  && !store.state.currentTime
  && !store.state.isLoop,
  process: (store) => {
    store.stop();
  },
};
