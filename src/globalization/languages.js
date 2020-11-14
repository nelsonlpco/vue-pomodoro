import Vue from 'vue';
import VueI18n from 'vue-i18n';

const messages = {
  'pt-BR': {
    work: 'Trabalho',
    interval: 'Intervalo',
    pomodoro: 'Pomodoro',
    configurations: 'Configurações',
    workTime: 'Tempo de trabalho',
    intervalTime: 'Tempo de Intervalo',
    timeTo: 'Tempo de ',
  },
  'en-US': {
    work: 'Work',
    interval: 'Interval',
    pomodoro: 'Pomodoro',
    configurations: 'Configurations',
    workTime: 'Work Time',
    intervalTime: 'Interval Time',
    timeTo: 'Time to ',
  },
};

Vue.use(VueI18n);

const locale = navigator.language || navigator.userLanguage;
console.log(locale);

const i18n = new VueI18n({
  locale: locale in messages ? locale : 'pt-BR',
  messages,
});

export function getMessage(message) {
  try {
    return i18n.messages[i18n.locale][message];
  } catch (e) {
    return '';
  }
}

export default i18n;
