// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import cookie from 'vue-cookie'
import api from './api'
// import store from './store'
import store from './store' // 导入api接口
Vue.prototype.$api = api // 导入状态管理
// import VWechatAuth from 'v-wechat-auth'
// import config from '../api/wxauth'
Vue.prototype.$cookie = cookie
import {
  Button,
  Step,
  Steps,
  Cell,
  CellGroup,
  Col,
  Row,
  DropdownMenu,
  DropdownItem,
  Checkbox,
  Popup,
  Field,
  Dialog,
  Picker,
  Icon,
  Tag,
  Tabbar,
  TabbarItem,
  Search,
  IndexBar,
  IndexAnchor,
  List,
  Tab,
  Tabs,
  PullRefresh,
  Sticky,
  Switch,
  Form

} from 'vant'

Vue.use(Button)
  .use(Step)
  .use(Steps)
  .use(Cell)
  .use(CellGroup)
  .use(Col)
  .use(Row)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Checkbox)
  .use(Popup)
  .use(Field)
  .use(Dialog)
  .use(Picker)
  .use(Icon)
  .use(Tag)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(List)
  .use(Tab)
  .use(Tabs)
  .use(PullRefresh)
  .use(Sticky)
  .use(Switch)
  .use(Form)

// .use(VWechatAuth)
Vue.config.productionTip = false
// wechatAuth: new VWechatAuth(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
