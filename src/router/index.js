import Vue from 'vue';
import VueRouter from 'vue-router';
import Pomodoro from '@/views/Pomodoro.vue';
import Configurations from '@/views/Configurations.vue';

Vue.use(VueRouter);

export const Routes = {
  pomodoro: 'Pomodoro',
  configurations: 'Configurations',
};

const routes = [
  {
    path: '/',
    name: Routes.pomodoro,
    component: Pomodoro,
  },
  {
    path: '/configurations',
    name: Routes.configurations,
    component: Configurations,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: '/vue-pomodoro/',
  routes,
});

export default router;
