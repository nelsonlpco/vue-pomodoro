/* eslint-disable no-param-reassign */
import workStrategy from './workStrategy';

export default {
  isValid: (store) => store.state.isStarted
  && store.state.isLoop
  && !store.state.isWorking
  && store.state.isInterval,
  process: (store) => {
    store.state.isInterval = false;
    workStrategy.process(store);
  },
};
