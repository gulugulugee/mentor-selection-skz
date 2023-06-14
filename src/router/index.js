import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/login/LoginIndex.vue')
    },
    {
      path: '/student',
      component: () => import('@/views/student/StudentIndex.vue'),
    },
    {
      path: '/teacher',
      component: () => import('@/views/teacher/TeacherIndex.vue'),
      name: 'teacherPage'
    },
    {
      path: '/show',
      component: () => import('@/views/layout/LayoutIndex.vue')
    }
  ]
})

export default router
