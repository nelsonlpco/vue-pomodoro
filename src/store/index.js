import { getMessage } from '../globalization/languages';
import strategyManager from './strategies';

const animations = {
  charge: 'charge',
  recharge: 'recharge',
};

let intervalRef = null;

export default {
  state: {
    workTime: 10,
    intervalTime: 5,
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
  },
  processPomodoro() {
    this.state.currentTime -= 1;
    if (!this.state.currentTime) {
      strategyManager.getStrategy(this);
    }
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
      animation: `${this.state.isWorking ? animations.charge : animations.recharge} ${this.state.time}s linear forwards`,
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
    this.state.legend = getMessage('work');

    this.setDisplayAnimation();
    this.playConfigAnimation();

    intervalRef = setInterval(() => this.processPomodoro(), 1000);
  },
  stop() {
    this.state.currentTime = 0;
    this.state.isWorking = false;
    this.state.isInterval = false;
    this.state.isStarted = false;
    clearInterval(intervalRef);
    this.state.animation = {
      animation: '',
    };
    this.playConfigAnimation();
  },
  startStop() {
    if (this.state.isStarted) {
      this.stop();
    } else {
      this.start();
    }
  },
  saveConfig() {
    localStorage.setItem('workTime', this.state.workTime);
    localStorage.setItem('intervalTime', this.state.intervalTime);
  },
  loadConfig() {
    const workTime = localStorage.getItem('workTime');
    const intervalTime = localStorage.getItem('intervalTime');
    this.state.workTime = workTime ? Number(workTime) : 60;
    this.state.intervalTime = intervalTime ? Number(intervalTime) : 30;
  },
};
