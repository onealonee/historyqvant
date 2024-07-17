import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import VideoPage from '@/views/VideoPage.vue';
import ReconstructionPage from '@/views/ReconstructionPage.vue';
import MethodicalPage from '@/views/MethodicalPage.vue';
import LocalHistoryPage from '@/views/LocalHistoryPage.vue';
import BiographiesPage from '@/views/BiographiesPage.vue';
import IntellectualGamesPage from '@/views/IntellectualGamesPage.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/video', name: 'video', component: VideoPage },
  { path: '/reconstruction', name: 'reconstruction', component: ReconstructionPage },
  { path: '/methodical', name: 'methodical', component: MethodicalPage },
  { path: '/local_history', name: 'local_history', component: LocalHistoryPage },
  { path: '/biographies', name: 'biographies', component: BiographiesPage },
  { path: '/intellectual_games', name: 'intellectual_games', component: IntellectualGamesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
