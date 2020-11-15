/* eslint-disable no-param-reassign */
import { getMessage } from '@/globalization/languages';
import notifyManager from '@/store/notificationManager';

export default {
  isValid: (store) => store.state.isStarted && store.state.isWorking && !store.state.isInterval,
  process: (store) => {
    store.state.isWorking = false;
    store.state.isInterval = true;
    store.state.currentTime = store.state.intervalTime;
    store.state.animationTime = store.state.intervalTime;
    store.state.legend = getMessage('interval');
    store.setDisplayAnimation();
    notifyManager.notify(`${getMessage('timeTo')} ${getMessage('interval')}`);
  },
};
