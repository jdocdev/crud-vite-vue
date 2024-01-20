import { createRouter, createWebHistory } from 'vue-router'
import PostListView from '@/views/PostListView.vue'
import PostEditView from '@/views/PostEditView.vue'
import PostCreateView from '@/views/PostCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'postList',
      component: PostListView
    },
    {
      path: '/postedit/:id',
      name: 'postEdit',
      component: PostEditView
    },
    {
      path: '/postcreate',
      name: 'postCreate',
      component: PostCreateView
    }
  ]
})

export default router
