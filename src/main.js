// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.body)

import './common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:k => k(App )
})
