<template>
  <div class="container" id="container">
    <div class="top">
      <p class="select_identity">请选择您的身份</p>
    </div>
    <div class="all_type">
      <router-link class="typePersonnel" to="/StRegister">
        <div class="weui-cell__bd">
          <p style="text-align:center">曾在院工作过</p>
          <div class="weui-cell__ft"></div>
          <p class="info">曾有在院工作经历,曾经院职工可选</p>
        </div>
      </router-link>

      <router-link class="typePersonnel" to="/GRegister">
        <div class="weui-cell__bd">
          <p style="text-align:center">曾是在院学生</p>
          <div class="weui-cell__ft"></div>
          <p class="info">曾是信息院学生,已毕业</p>
        </div>
      </router-link>

      <router-link class="typePersonnel" to="/ScRegister">
        <div class="weui-cell__bd">
          <p style="text-align:center">曾在院参加培训</p>
          <div class="weui-cell__ft"></div>
          <p class="info">曾在院参加培训的其他地区教职工可选</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getQueryString } from '@/utils/utils'
export default {
  name: 'index',
  data() {
    return {}
  },
  created() {
    // 判断链接有没有token参数，如果没有就跳微信授权，然后后台会重定向回来并携带token，如： www.xxxx.com/wx/author?token=xxxxxxxxx&msg=200
    if (!getQueryString('token')) {
      console.log('授权登录')
      this.returnGetCodeUrl()
    } else {
      console.log('登录成功')
      const msg = getQueryString('msg')
      const role = getQueryString('role')
      if (Number(msg) === 200) {
        // 获取微信code
        const token = getQueryString('token')
        // const role = getQueryString('role')
        // 存储token到本地
        window.localStorage.setItem('token', token)
        // 将用户类型存在本地
        window.localStorage.setItem('role', role)
        // window.location.setItem('role', role)
        // 获取beforeLoginUrl 页面地址
        const url = window.localStorage.getItem('beforeLoginUrl')
        console.log(url, token, 333)
        const roleis = Number(window.localStorage.getItem('role'))
        console.log(typeof roleis)
        // 跳转
        // this.$router.replace(url)
        // 删除本地beforeLoginUrl
        window.localStorage.removeItem('beforeLoginUrl')
      } else {
        // msg不是200的情况,
        alert('授权失败请关闭网页重新进入')
      }
    }
  },
  methods: {
    async returnGetCodeUrl() {
      let { data } = await this.$api.getWxAuth()
      if (data.status === 200) {
        window.location.href = data.url
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  padding-bottom: 25%;
  background-color: rgba(0, 102, 255, 0.623);
  position: relative;
}
.select_identity {
  position: absolute;
  text-align: center;
  margin: 5% 0 0 5%;
  font-size: 20px;
  color: #ffffff;
}
.info {
  font-size: 12px;
  color: #888888;
  text-align: center;
}
/* typePersonnel： */
.typePersonnel {
  display: block;
  margin: 3% 10% 0 10%;
  padding: 5% 0 5% 0;
  box-shadow: 5px 5px 5px 5px rgba(170, 170, 170, 0.178);
}
.all_type {
  position: absolute;
  width: 100%;
  margin-top: 5%;
}
</style>
