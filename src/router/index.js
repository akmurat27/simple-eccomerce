import { createRouter, createWebHistory } from 'vue-router'
// import ProductsView from '../views/ProductsView.vue'
// import CartsView from '@/views/CartsView.vue'
// import UsersView from '@/views/UsersView.vue'
import SinglePost from '@/components/SinglePost.vue'
import HomePage from '@/components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/singlepost',
      name: 'singlepost',
      component: SinglePost
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    }
    // {
    //   path: '/carts',
    //   name: 'carts',
    //   component: CartsView
    // },{
    //   path: '/users',
    //   name: 'users',
    //   component: UsersView
    // }
  ]
})

export default router
