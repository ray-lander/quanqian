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
    {
      path: '/index', redirect: '/index/moments/momentslist', name: 'Index', component: Index,
      children: [
        // 朋友圈
        { path: '/index/moments/momentslist', name: 'MomentsList', component: MomentsList, meta: { title: '圈钱宝', auth: true } },
        { path: '/index/moments/friendslist', name: 'FriendsList', component: FriendsList, meta: { title: '好友列表' } },
        { path: '/index/moments/personalmoments', name: 'personalMoments', component: PersonalMoments, meta: { title: '圈钱宝' } },
        // 发布
        { path: '/index/release/releasenew', name: 'ReleaseNew', component: ReleaseNew, meta: { title: '圈钱宝' } },
        //素材
        { path: '/index/materialcollection/mycollection', name: 'MyCollection', component: MyCollection, meta: { title: '圈钱宝' } },
        //个人中心
        { path: '/index/profile/mainprofile', name: 'MainProfile', component: MainProfile, meta: { title: '圈钱宝' } },
        { path: '/index/profile/sendtaskmanagement', name: 'SendtaskManagement', component: SendtaskManagement, meta: { title: '发送任务管理' } },
        // 登录
        { path: '/index/MobPage', name: 'MobPage', component: MobPage, meta: { title: '首页' } },
        { path: '/index/login/register', name: 'Register', component: Register, meta: { title: '注册' } },
        { path: '/index/login', name: 'Login', component: Login, meta: { title: '登录' } },
        { path: '/index/login/forgetpassword', name: 'ForgetPassword', component: ForgetPassword, meta: { title: '忘记密码' } },
      ]
    },
  ],
  linkActiveClass: 'weui-bar__item_on'
})
