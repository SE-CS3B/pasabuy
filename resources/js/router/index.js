import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import address from '../components/address.vue'
import uploadid from '../components/uploadid.vue'
import verifymessage from '../components/verifymessage.vue'
import ProfileEdit from '../components/ProfileEdit.vue'
import dashboard from '../components/dashboard.vue'
import accountsettings from '../components/accountset.vue'
import deliver from '../components/deliver.vue'
import orders from '../components/orders.vue'
import messages from '../components/messaging.vue'
import axios from 'axios'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {guest:true}
  },

  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {guest:true}
  
  },

  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: {gueset:true}
  },

  {
    path: '/address-book',
    name: 'address',
    component: address,
    meta: {guest:true}
  },

  {
    path: '/upload-id',
    name: 'uploadid',
    component: uploadid,
    meta: {guest:true}
  },

  {
    path: '/verification-message',
    name: 'verifymessage',
    component: verifymessage,
    meta: {guest:true}
  },

  {
    path: '/edit-profile',
    name: 'ProfileEdit',
    component: ProfileEdit,
    meta: {requiresAuth:true}
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {requiresAuth:true}
  },

  {
    path: '/account-settings',
    name: 'accountsettings',
    component: accountsettings,
    meta: {requiresAuth:true}
  },

  {
    path: '/delivery',
    name: 'deliver',
    component: deliver,
    meta: {requiresAuth:true}
  },

  {
    path: '/orders',
    name: 'orders',
    component: orders,
    meta: {requiresAuth:true}
  },

  {
    path: '/messages',
    name: 'messages',
    component: messages,
    meta: {requiresAuth:true}
  },

  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function isLoggedIn(){
  return localStorage.getItem('isLoggedIn');
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    console.log('requiresauth')
    if(!isLoggedIn()){
      next({name: 'login'})
    }else{
      next()
    }
  }
  else if(to.matched.some(record => record.meta.guest)){
    console.log('guest')
    if(isLoggedIn()){
      next({name: 'dashboard'})
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router
