import notificationManager from './notificationManager';
import { getMessage } from '../globalization/languages';
import strategyManager from './strategies';

const animations = {
  charge: 'charge',
  recharge: 'recharge',
};

let intervalRef = null;

export default {
  state: {
    requestNotificationPermission: !notificationManager.permissionRequested(),
    animationTime: 0,
    workTime: 30,
    intervalTime: 15,
    currentTime: 0,
    isWorking: false,
    isInterval: false,
    isLoop: true,
    isStarted: false,
    animation: { animation: '' },
    legend: getMessage('work'),
    playConfig: {
      middleOfContainer: 0,
      configAnimation: {
        transform: undefined,
        opacity: 1,
        transition: undefined,
      },
      playAnimation: {
        transform: undefined,
        transition: undefined,
      },
    },
    timeTitleAnimation: '',
    timeDisplayAnimation: '',
  },
  notificationRequested() {
    this.state.requestNotificationPermission = false;
    notificationManager.requestPermission();
  },
  processPomodoro() {
    this.state.currentTime -= 1;
    if (!this.state.currentTime) {
      strategyManager.getStrategy(this);
    }
  },
  setIsLoop(value) {
    this.state.isLoop = value;
  },
  setWorkTime(time) {
    this.state.workTime = time;
  },
  setIntervalTime(time) {
    this.state.intervalTime = time;
  },
  setPlayConfigMiddleOfContainer(middleOfContainer) {
    this.state.playConfig.middleOfContainer = middleOfContainer;
  },
  setDisplayAnimation() {
    this.state.animation = {
      animation: `${this.state.isWorking ? animations.charge : animations.recharge} ${this.state.animationTime}s linear forwards`,
    };
  },
  playConfigAnimation() {
    this.state.playConfig.configAnimation = {
      transform: `translateX(${(this.state.isStarted ? 1 : 0) * this.state.playConfig.middleOfContainer}px)`,
      opacity: this.state.isStarted ? 0 : 1,
      transition: 'transform 0.500s, opacity 0.500s',
    };
    this.state.playConfig.playAnimation = {
      transform: `translateX(${(this.state.isStarted ? -1 : 0) * this.state.playConfig.middleOfContainer}px)`,
      transition: 'transform 0.500s',
    };
  },
  start() {
    this.state.isStarted = true;
    this.state.isWorking = true;
    this.state.isInterval = false;
    this.state.currentTime = this.state.workTime;
    this.state.animationTime = this.state.workTime;
    this.state.legend = getMessage('work');
    this.state.timeTitleAnimation = 'upTitle';
    this.state.timeDisplayAnimation = 'upDisplay';

    this.setDisplayAnimation();
    this.playConfigAnimation();

    intervalRef = setInterval(() => this.processPomodoro(), 1000);
  },
  stop() {
    this.state.animationTime = 0;
    this.state.currentTime = 0;
    this.state.isWorking = false;
    this.state.isInterval = false;
    this.state.isStarted = false;
    clearInterval(intervalRef);
    this.state.animation = {
      animation: '',
    };
    this.playConfigAnimation();
    this.state.timeTitleAnimation = 'downTitle';
    this.state.timeDisplayAnimation = 'downDisplay';
  },
  startStop() {
    if (this.state.isStarted) {
      this.stop();
    } else {
      this.start();
    }
  },
  clearTimeAnimation() {
    this.state.timeTitleAnimation = '';
    this.state.timeDisplayAnimation = '';
  },
  saveConfig() {
    localStorage.setItem('workTime', this.state.workTime);
    localStorage.setItem('intervalTime', this.state.intervalTime);
    localStorage.setItem('isLoop', this.state.isLoop);
  },
  loadConfig() {
    const workTime = localStorage.getItem('workTime');
    const intervalTime = localStorage.getItem('intervalTime');
    const isLoop = localStorage.getItem('isLoop');
    this.state.workTime = workTime ? Number(workTime) : this.state.workTime;
    this.state.intervalTime = intervalTime ? Number(intervalTime) : this.state.intervalTime;
    this.state.isLoop = isLoop && isLoop === 'true';
  },
};
