import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/mainpage/Index'
import MobPage from '@/components/website/MobPage'
import Register from '@/components/login/Register'
import Login from '@/components/login/Login'
import ForgetPassword from '@/components/login/ForgetPassword'
import MomentsList from '@/components/moments/MomentsList'
import FriendsList from '@/components/moments/FriendsList'
import PersonalMoments from '@/components/moments/personalMoments'
import ReleaseNew from '@/components/release/releasenew'
import MyCollection from '@/components/materialcollection/MyCollection'
import MainProfile from '@/components/profile/MainProfile'
import SendtaskManagement from '@/components/profile/SendtaskManagement'

Vue.use(Router)

Vue.config.productionTip = false

export default new Router({
  routes: [
    { path: '/', redirect: '/index/moments/momentslist' },
    { path: '/index', redirect: '/index/moments/momentslist', name: 'Index', component: Index,
      children: [
        // 朋友圈
        { path: '/index/moments/momentslist', name: 'MomentsList', component: MomentsList },
        { path: '/index/moments/friendslist', name: 'FriendsList', component: FriendsList },
        { path: '/index/moments/personalmoments', name: 'personalMoments', component: PersonalMoments },
        // 发布
        { path: '/index/release/releasenew', name: 'ReleaseNew', component: ReleaseNew },
        //素材
        { path: '/index/materialcollection/mycollection', name: 'MyCollection', component: MyCollection },
        //个人中心
        { path: '/index/profile/mainprofile', name: 'MainProfile', component: MainProfile },
        { path: '/index/profile/sendtaskmanagement', name: 'SendtaskManagement', component: SendtaskManagement },
        // 登录
        { path: '/index/MobPage', name: 'MobPage', component: MobPage },
        { path: '/index/login/register', name: 'Register', component: Register },
        { path: '/index/login', name: 'Login', component: Login },
        { path: '/index/login/forgetpassword', name: 'ForgetPassword', component: ForgetPassword },
      ]
    }, 
  ],
  linkActiveClass: 'weui-bar__item_on'
})
