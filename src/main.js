// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Fuse from 'fuse.js'
// import mockData from './mock-data.json'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const options = {
//   shouldSort: true,
//   threshold: 0.2,
//   location: 0,
//   distance: 100,
//   maxPatternLength: 32,
//   minMatchCharLength: 1,
//   keys: [
//     "first_name",
//     "last_name",
//     "email"
//   ]
// };

// const fuse = new Fuse(mockData, options);
//
// const start = new Date().getTime()
// const result = fuse.search("Andrea");
// const end = new Date().getTime()
//
// console.log(result)
// console.log('used', end - start, 'ms')
//
// console.log('mock', mockData)
