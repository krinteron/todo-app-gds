import { createRouter, createWebHistory } from 'vue-router';
import TasksAll from '@/views/TasksAll.vue';
import TasksDone from '@/views/TasksDone.vue';
import TasksActive from '@/views/TasksActive.vue';

const routes = [
  {
    path: '/',
    component: TasksAll,
  },
  {
    path: '/done',
    component: TasksDone,
  },
  {
    path: '/active',
    component: TasksActive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
