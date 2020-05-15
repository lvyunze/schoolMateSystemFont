import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import index from '@/views/index'
import StRegister from '@/views/staff/StRegister'
import StAuthentication from '@/views/staff/StAuthentication'
import StComplete from '@/views/staff/StComplete'
import StContacts from '@/views/staff/StContacts'
import ScRegister from '@/views/scholar/ScRegister'
import ScAuthentication from '@/views/scholar/ScAuthentication'
import ScComplete from '@/views/scholar/ScComplete'
import ScContacts from '@/views/scholar/ScContacts'
import GRegister from '@/views/graduate/GRegister'
import GAuthentication from '@/views/graduate/GAuthentication'
import GComplete from '@/views/graduate/GComplete'
import GContacts from '@/views/graduate/GContacts'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '身份选择'
    }
  },
  // 曾在院工作填写基本信息页面
  {
    path: '/StRegister',
    name: 'StRegister',
    component: StRegister,
    meta: {
      title: '注册'
    }
  },
  // 曾在院工作认证页面
  {
    path: '/StAuthentication',
    name: 'StAuthentication',
    component: StAuthentication,
    meta: {
      title: '验证身份'
    }
  },
  {
    path: '/StComplete',
    name: 'StComplete',
    component: StComplete,
    meta: {
      title: '完成注册'
    }
  },
    {
    path: '/StContacts',
    name: 'StContacts',
    component: StContacts,
    children: [
      // 子路由中的默认路由
      {
        path: '',
        name: 'Default',
        meta: {
          title: '通讯录'
        },
        component: () => import('@/views/staff/contacts/contacts_list'),
        children: [
          {
            path: '',
            name: 'Default',
            meta: {
              title: '通讯录'
            },
            component: () =>
              import('@/views/staff/contacts/contact_detail/scholar_before')
          }
          
        ]
      },
      {
        path: 'personal_set',
        name: 'personal_set',
        meta: {
          title: '个人设置'
        },
        component: () => import('@/views/staff/contacts/personal_set')
      }
    ],
    meta: {
      title: '通讯录'
    }
  },
  {
    path: '/staffInfoDetail',  //这里scholar改成了staff了
    name: 'staffInfoDetail',
    component: () =>
      import('@/views/staff/contacts/contact_detail/infoDetail'),
    meta: {
      title: '详细信息'
    }
  },
  {
    path: '/ScRegister',
    name: 'ScRegister',
    component: ScRegister,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/ScAuthentication',
    name: 'ScAuthentication',
    component: ScAuthentication,
    meta: {
      title: '验证身份'
    }
  },
  {
    path: '/ScComplete',
    name: 'ScComplete',
    component: ScComplete,
    meta: {
      title: '完成注册'
    }
  },
  {
    path: '/ScContacts',
    name: 'ScContacts',
    component: ScContacts,
    children: [
      // 子路由中的默认路由
      {
        path: '',
        name: 'Default',
        meta: {
          title: '通讯录'
        },
        component: () => import('@/views/scholar/contacts/contacts_list'),
        children: [
          {
            path: '',
            name: 'Default',
            meta: {
              title: '通讯录'
            },
            component: () =>
              import('@/views/scholar/contacts/contact_detail/scholar_before')
          },
          {
            path: 'teacher',
            name: 'scholar_teacher',
            meta: {
              title: '通讯录'
            },
            component: () =>
              import('@/views/scholar/contacts/contact_detail/teacher')
          }
        ]
      },
      {
        path: 'personal_set',
        name: 'personal_set',
        meta: {
          title: '个人设置'
        },
        component: () => import('@/views/scholar/contacts/personal_set')
      }
    ],
    meta: {
      title: '通讯录'
    }
  },
  {
    path: '/scholarInfoDetail',
    name: 'scholarInfoDetail',
    component: () =>
      import('@/views/scholar/contacts/contact_detail/infoDetail'),
    meta: {
      title: '详细信息'
    }
  },
  {
    path: '/GRegister',
    name: 'GRegister',
    component: GRegister,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/GAuthentication',
    name: 'GAuthentication',
    component: GAuthentication,
    meta: {
      title: '身份验证'
    }
  },
  {
    path: '/GComplete',
    name: 'GComplete',
    component: GComplete,
    meta: {
      title: '完成注册'
    }
  },
  {
    path: '/GContacts',
    name: 'GContacts',
    component: GContacts,
    children: [
      // 子路由中的默认路由
      {
        path: '',
        name: 'Default',
        meta: {
          title: '通讯录'
        },
        component: () => import('@/views/graduate/contacts/contacts_list'),
        children: [
          {
            path: '',
            name: 'Default',
            meta: {
              title: '通讯录'
            },
            component: () =>
              import('@/views/graduate/contacts/contact_detail/scholar_before')
          }
          
        ]
      },
      {
        path: 'personal_set',
        name: 'personal_set',
        meta: {
          title: '个人设置'
        },
        component: () => import('@/views/graduate/contacts/personal_set')
      }
    ],
    meta: {
      title: '通讯录'
    }
  }
  // {
  //   path: '/GComplete/:pid',
  //   name: 'GComplete',
  //   component: GComplete,
  //   meta: {
  //     title: '详情页'
  //   }
  // }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  document.title = to.meta.title
  // 第一次访问
  const token = window.localStorage.getItem('token')

  if (!token && to.path !== '/') {
    // 保存用户进入的url
    console.log(to.fullPath)
    window.localStorage.setItem('beforeLoginUrl', to.fullPath)
    // 进入首页
    next('/')
  } else if (token && !store.getters.userInfo) {
    // 拉取用户信息
    store.dispatch('getUserInfo').catch(err => {
      console.log(err)
      window.localStorage.removeItem('token')
      router.go(0)
    })
    next()
  } else {
    // 已经登录
    next()
  }
})
export default router
