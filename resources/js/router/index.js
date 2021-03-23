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
    component: Home
  },

  {
    path: '/login',
    name: 'login',
    component: login,
  },

  {
    path: '/signup',
    name: 'signup',
    component: signup
  },

  {
    path: '/address-book',
    name: 'address',
    component: address
  },

  {
    path: '/upload-id',
    name: 'uploadid',
    component: uploadid
  },

  {
    path: '/verification-message',
    name: 'verifymessage',
    component: verifymessage
  },

  {
    path: '/edit-profile',
    name: 'ProfileEdit',
    component: ProfileEdit
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    beforeEnter: (to, form, next ) =>{
      axios.get('/api/authenticated').then(response=>{
        next();
      }).catch(()=>{
        return next({ name: 'login'})
      })
    }
  },

  {
    path: '/account-settings',
    name: 'accountsettings',
    component: accountsettings
  },

  {
    path: '/delivery',
    name: 'deliver',
    component: deliver
  },

  {
    path: '/orders',
    name: 'orders',
    component: orders
  },

  {
    path: '/messages',
    name: 'messages',
    component: messages
  },

  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
