/*
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-15 20:38:01
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-15 20:41:50
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layout';
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/HomePage',
    children: [{
            path: '/HomePage',
            component: () =>
                import ('@/views/HomePage'),
            name: 'HomePage',
        },
        {
            path: '/ApplicationForm',
            component: () =>
                import ('@/views/ApplicationForm'),
            name: 'ApplicationForm',
        },
        {
            path: '/AchievementsAppraisal',
            component: () =>
                import ('@/views/AchievementsAppraisal'),
            name: 'AchievementsAppraisal',
        },
        {
            path: '/MoralEducation',
            component: () =>
                import ('@/views/MoralEducation'),
            name: 'MoralEducation',
        },
        {
            path: '/TeachingResources',
            component: () =>
                import ('@/views/TeachingResources'),
            name: 'TeachingResources',
        },
        {
            path: '/DevelopEffective',
            component: () =>
                import ('@/views/DevelopEffective'),
            name: 'DevelopEffective',
        },
        {
            path: '/InnovationActivities',
            component: () =>
                import ('@/views/InnovationActivities'),
            name: 'InnovationActivities',
        },
        {
            path: '/SummaryReport',
            component: () =>
                import ('@/views/SummaryReport'),
            name: 'SummaryReport',
        },
        {
            path: '/OtherPages',
            component: () =>
                import ('@/views/OtherPages'),
            name: 'OtherPages',
        }
    ]
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router