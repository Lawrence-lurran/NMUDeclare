/*
 * @Author: lucas-se 1320467676@qq.com
 * @Date: 2022-10-15 20:38:01
 * @LastEditors: lucas-se 1320467676@qq.com
 * @LastEditTime: 2022-10-16 23:11:43
 * @FilePath: /NUMDeclare/NMUDeclare/frontend/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by lucas-se 1320467676@qq.com, All Rights Reserved. 
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入
import MenuList from '@/components/MenuList'
// 注册为全局组件
Vue.component('MenuList', MenuList)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')