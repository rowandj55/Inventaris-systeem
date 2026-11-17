import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../pages/Overview.vue'
import Create from '../pages/Create.vue';
import Order from '../pages/Order.vue';
import Edit from '../pages/Edit.vue';

export const routes = [
    {path: '/', component: Overview},
    {path: '/create', component: Create},
    {path: '/order', component: Order},
    {path: '/edit/:id', component: Edit},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
