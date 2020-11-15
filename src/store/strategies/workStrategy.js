/* eslint-disable no-param-reassign */
import { getMessage } from '@/globalization/languages';
import notifyManager from '@/store/notificationManager';

export default {
  isValid: (store) => store.state.isStarted
  && !store.state.isWorking
  && !store.state.isInterval,
  process: (store) => {
    store.state.isWorking = true;
    store.state.currentTime = store.state.workTime;
    store.state.animationTime = store.state.workTime;
    store.state.legend = getMessage('work');
    store.setDisplayAnimation();
    notifyManager.notify(`${getMessage('timeTo')} ${getMessage('work')}`);
  },
};
