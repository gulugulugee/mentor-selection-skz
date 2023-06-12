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
      name: 'studentPage'
    },
    {
      path: '/teacher',
      component: () => import('@/views/teacher/TeacherIndex.vue'),
      name: 'teacherPage'
    }
  ]
})

export default router
