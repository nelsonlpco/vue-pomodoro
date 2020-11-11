import notifyManager from './notificationManager';

const animations = {
  charge: 'charge',
  recharge: 'recharge',
};

let intervalRef = null;

export default {
  state: {
    workTime: 10,
    intervalTime: 5,
    time: 0,
    currentTime: 0,
    isWorking: false,
    isStarted: false,
    animation: { animation: '' },
    legend: 'Trabalho',
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
  setWorkTime(time) {
    this.state.workTime = time;
  },
  setIntervalTime(time) {
    this.state.intervalTime = time;
  },
  setPlayConfigMiddleOfContainer(middleOfContainer) {
    this.state.playConfig.middleOfContainer = middleOfContainer;
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
  setLegend() {
    const legend = this.state.isWorking ? 'Trabalho' : 'Intervalo';
    this.state.legend = legend;
    notifyManager.Notify(legend);
  },
  setTimer() {
    const timer = this.state.isWorking ? this.state.intervalTime : this.state.workTime;
    this.state.isWorking = !this.state.isWorking;
    this.state.currentTime = timer;
    this.state.time = timer;
  },
  setDisplayAnimation() {
    this.state.animation = {
      animation: `${this.state.isWorking ? animations.charge : animations.recharge} ${this.state.time}s linear forwards`,
    };
  },
  updateState() {
    this.setTimer();
    this.setLegend();
    this.setDisplayAnimation();
    this.playConfigAnimation();
  },
  start() {
    this.state.isStarted = true;
    this.updateState();

    intervalRef = setInterval(() => {
      if (this.state.currentTime) { this.state.currentTime -= 1; } else {
        this.updateState();
        if (!this.state.isStarted) { clearInterval(intervalRef); }
      }
    }, 1000);
  },
  stop() {
    clearInterval(intervalRef);
    this.state.animation = {
      animation: '',
    };
    this.state.currentTime = 0;
    this.state.isWorking = false;
    this.state.isStarted = false;
    this.playConfigAnimation();
  },
  startStop() {
    if (this.state.isStarted) {
      this.stop();
    } else {
      this.start();
    }
  },
};
