/*
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-15 20:38:01
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-17 20:01:06
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/store/index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        data: {
            TeachingResources: {
                title: '教学资源',
                path: ['教学资源', '师资介绍'],
                menu: [{
                        id: 1,
                        content: '师资介绍',
                        showSub: false,
                        children: [
                            { id: 1, content: '师资组成' },
                            { id: 2, content: '教学团队' },
                        ],
                    },
                    {
                        id: 2,
                        content: '课程建设',
                        showSub: false,
                        children: [
                            { id: 1, content: '出版教材' },
                            { id: 2, content: '精品课程' },
                            { id: 3, content: '视频教学' },
                        ],
                    },
                    {
                        id: 3,
                        content: '实验平台',
                        showSub: false,
                        children: [
                            { id: 1, content: '实验室基本情况' },
                            { id: 2, content: '虚拟仿真实验室' },
                            { id: 3, content: '开发实验室预约' },
                        ],
                    },
                    {
                        id: 4,
                        content: '教科协同',
                        showSub: false,
                        children: [
                            { id: 1, content: '教研平台' },
                            { id: 2, content: '教改成果' },
                            { id: 3, content: '科研成果' },
                        ],
                    },
                ],
            },
            AchievementsAppraisal: {
                title: '成果鉴定',
                menu: [],
            },
            ApplicationForm: {
                title: '成果申请书',
                menu: [{
                        id: 1,
                        content: '成果获奖情况',
                        showSub: false,
                    },
                    {
                        id: 2,
                        content: '解决的关键问题',
                        showSub: false,
                    },
                    {
                        id: 3,
                        content: '方法与措施',
                        showSub: false,
                    },
                    {
                        id: 4,
                        content: '成果特色',
                        showSub: false,
                    },
                    {
                        id: 5,
                        content: '成果推广应用',
                        showSub: false,
                    },
                    {
                        id: 6,
                        content: '完成人',
                        showSub: false,
                    },
                ],
            },
            DevelopEffective: {
                title: '培养成效',
                menu: [{
                        id: 1,
                        content: '招生就业',
                        showSub: false,
                    },
                    {
                        id: 2,
                        content: '主办会议与竞赛',
                        showSub: false,
                    },
                    {
                        id: 3,
                        content: '社会影响',
                        showSub: false,
                    },
                    {
                        id: 4,
                        content: '优秀校友',
                        showSub: false,
                    },
                ],
            },
            InnovationActivities: {
                title: '创新活动',
                menu: [{
                        id: 1,
                        content: '学科竞赛',
                        showSub: false,
                    },
                    {
                        id: 2,
                        content: '创新创业',
                        showSub: false,
                    },
                    {
                        id: 3,
                        content: '科技立项',
                        showSub: false,
                    },
                    {
                        id: 4,
                        content: '学生发表论文',
                        showSub: false,
                    },
                    {
                        id: 5,
                        content: '学生参与专利',
                        showSub: false,
                    },
                    {
                        id: 6,
                        content: '学生代表性作品',
                        showSub: false,
                    },
                ],
            },
            MoralEducation: {
                title: '德育园地',
                menu: [{
                        id: 1,
                        content: '不忘初心，牢记使命',
                        showSub: false,
                        children: [
                            { id: 1, content: '师资组成' },
                            { id: 2, content: '教学团队' },
                        ],
                    },
                    { id: 2, content: '德育教育课程体系' },
                    { id: 3, content: '网络安全宣传周' },
                    { id: 4, content: '党员工作站' },
                    { id: 5, content: '职业规范教育' },
                ],
            },
            SummaryReport: {
                title: '成果总结报告',
                menu: [],
            }
        },
    },
    getters: {},
    mutations: {},
    actions: {
        GET_MENU({ state }, target) {
            console.log(target);
            const data = state.data[target]
            console.log(data);
            return new Promise((resolve) => {
                resolve(data)
            })
        }
    },
    modules: {}
})