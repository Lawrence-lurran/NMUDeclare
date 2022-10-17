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
//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//使用ElementUI
Vue.use(ElementUI);
// 引入
import MenuList from '@/components/MenuList'
import curPosition from '@/components/curPosition.vue'
import MainContent from '@/views/MainContent'
// 注册为全局组件
Vue.component('MenuList', MenuList)
Vue.component('curPosition', curPosition)
Vue.component('MainContent', MainContent)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')