/*
* @Author: yongze-chen
* @Date:   2018-06-19 12:48:15
* @Last Modified by:   yongze-chen
* @Last Modified time: 2018-06-20 08:50:45
*/


// 导入jquery

import $ from 'jquery'

// 导入bootstrap

// 注意：如果要通过路径的形式，引入 node_modules 中相关的文件，可以直接省略 路径前面的node_modules这一层目录，直接写包的名，然后后面跟上具体的文件路径
// 不写node_modules，默认去node_modules里找

import 'bootstrap/dist/css/bootstrap.min.css'

// 导入css文件
// webpack 默认情况下 只能打包处理JS文件，无法处理CSS文件，需要安装第三方loader cnpm i style-loader css-loader -D

import './css/index.css'

import './css/index.scss'


// $(function () {
//     $('li:odd').css('backgroundColor', function() {
//         return '#' + '9D6724'
//     });
//     $('li:even').css('backgroundColor','pink');
// })

// class关键字 是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式

// class Person {
    // 使用static关键字可以定义静态属性
    // 所谓的静态属性，就是可以直接通过类名，访问的属性
    // 实例属性，只能通过类的实例 来访问的属性，
//     static info = {name: 'zs',age: 20}
// }

// 访问 Person 类身上的info静态属性
// console.log(Person.info);

// var p2 = new Person();

// 导入vue
// 第一种修改方式
// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'

// 导入vue-router 包

// import VueRouter from 'vue-router'

// 手动安装vue-router

// Vue.use(VueRouter)

// 导入组件 

// import account from './main/Account.vue'

// import goodslist from './main/GoodsList.vue'
// // 创建路由对象

// var router = new VueRouter({
//     routes: [
//         // account goodslist
//         { path: '/account', component: account},
//         { path: '/goodslist', component: goodslist}

//     ]
// })






// vue 

// var login = {
//     template: '<h1>这是登录组件</h1>'
// }

// 导入login组件

// 默认无法打包.vue文件，需要第三方loader cnpm i vue-loader vue-template-compiler -D

import login from './login.vue'

// import app from './app.vue'





var vm = new Vue({
    el: '#app',
    data: {
        msg: '124'
    },
    // components: {
    //     login
    // }
    // render: function(createElement) {// createElement是一个方法，调用它能够把指定的组件模板，渲染为html结构
    //     return createElement(login)
    //     // 注意 这里return 的结果，会替换页面中 el 指定的那个容器
    // }

    // 在webpack中，如果想要通过.vue把一个组件放到页面中去展示，vm实例中的render函数可实现
    render: c => c(login)
});




