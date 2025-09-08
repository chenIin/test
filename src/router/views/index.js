import { createRouter, createWebHistory } from 'vue-router'
import student from '../../components/student.vue'

// 定义路由
const routes = [
    {
        path: '/',
        name: '/',
        component: student
    },
    {
        path: '/Home',
        name: 'Home',
        component: () => import( /* webpackChunkName: "views" */ '@/components/Home')
    },
    {
        path: '/HelloWorld',
        component: () => import( /* webpackChunkName: "views" */ '@/components/HelloWorld'),
        // redirect: '/test/index',
        // children: [{
        //     path: 'index',
        //     name: '测试页',
        //     meta: {
        //         i18n: 'test'
        //     },
        //     component: () => import( /* webpackChunkName: "views" */ '@/views/util/test')
        // }]
    },
]

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
