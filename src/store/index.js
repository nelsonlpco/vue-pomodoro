const workTime = 10;
const intervalTime = 5;
const animations = {
  charge: 'charge',
  recharge: 'recharge',
};

let intervalRef = null;

export default {
  state: {
    time: 0,
    currentTime: 0,
    isWorking: false,
    isStarted: false,
    animation: { animation: '' },
    legend: 'Trabalho',
  },
  setLegend() {
    this.state.legend = this.state.isWorking ? 'Trabalho' : 'Intervalo';
  },
  setTimer() {
    const timer = this.state.isWorking ? intervalTime : workTime;
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
  },
  startStop() {
    if (this.state.isStarted) {
      this.stop();
    } else {
      this.start();
    }
  },
};
