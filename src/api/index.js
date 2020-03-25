// import axios from '@/utils/http' // 导入http中创建的axios实例
// import axios from '../../utils/http'
import axios from '../utils/http'
// 导出接口
export default {
  getWxAuth(params) {
    return axios.get(`/get_wxauth`, {
      params: params
    })
  },
  getUserInfo(data) {
    return axios.post(`/get_user_info`, data)
  },
  // 曾在院工作验证
  staffAuth(data) {
    return axios.post(`/staff_auth`, data)
  },
  // 获取专业
  getDepart(params) {
    return axios.get(`/get_depart`, {
      params: params
    })
  },
  // 获取班级
  getClass(params) {
    return axios.get(`/get_class`, {
      params: params
    })
  },
  // 毕业生验证
  graduateAuth(data) {
    return axios.post(`/graduate_auth`, data)
  },
  scholarAuth(data) {
    return axios.post(`/scholar_auth`, data)
  },
  // 获取曾在院学习的组A~Z
  scholarContactGroup(params) {
    return axios.get(`/scholar_contact_group`, {
      params: params
    })
  },
  // 获取曾在院学习的id和姓名
  scholarContactGet(params) {
    return axios.get(`/scholar_contact_get`, {
      params: params
    })
  },
  teacherContactGet(params) {
    return axios.get(`/teacher_contact_get`, {
      params: params
    })
  }
}
