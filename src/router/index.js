import Vue from 'vue'
import Router from 'vue-router'
import LineItemList from '@/components/LineItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LineItemList',
      component: LineItemList
    }
  ]
})
