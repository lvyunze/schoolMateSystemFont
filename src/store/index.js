import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 开发模式下使用日志，和谷歌浏览器里面的vuedevtool插件类似
// 修改state的时候会在控制台打印一些信息
import createLogger from 'vuex/dist/logger'

// import api from '../api'
import api from '../api'
const { scholarContactGet, getUserInfo} = api

Vue.use(Vuex)

// 调试,开发模式开启严格模式，修改state必须使用mutations提交的方式
const debug = process.env.NODE_ENV !== 'production'
const createPersisted = createPersistedState({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  // * Vuex 数据持久化 */
  // plugins: [
  //   createPersistedState({
  //     storage: window.sessionStorage // localStorage or sessionStorage,
  //   })
  // ],
  state: {
    userInfo: null,
    scholarGroup: null,
    scholarContact: null

  },
  getters: {
    userInfo: state => state.userInfo,
    scholarGroup: state => state.scholarGroup,
    scholarContact: state => state.scholarContact
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info
    },
    setScholarGroup(state, group) {
      state.scholarGroup = group
    },
    setScholarContact(state, contact) {
      state.scholarContact = contact
    }
  },
  actions: {
    // 获取用户相关信息
    getUserInfo({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo()
            .then(res => {
              const data = res.data
              console.log('data的值为：', data)
              commit('setUserInfo', data)
              resolve(data)
            })
            .catch(err => {
              reject(err)
            })
        } catch (error) {
          reject(error)
        }
      })
    },
    // 获取曾经在院学习相关信息
    scholarContactGroup({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          scholarContactGroup()
            .then(res => {
              console.log('res.date的值:', res.data)
              commit('setScholarGroup', res.data)
              resolve(res.data)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        } catch (error) {
          reject(error)
        }
      })
    },
    scholarContactGet({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          scholarContactGet()
            .then(res => {
              console.log('res.date的值:', res.data)
              commit('setScholarContact', res.data)
              resolve(res.data)
            })
            .catch(err => {
              console.log(err)
              reject(err)
            })
        } catch (error) {
          reject(error)
        }
      })
    },


  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})
