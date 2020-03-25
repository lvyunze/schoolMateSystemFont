<template>
  <div>
    <van-steps :active="active">
      <van-step>1、基本信息</van-step>
      <van-step>2、验证身份</van-step>
      <van-step>3、完成注册</van-step>
    </van-steps>

    <div>
      <van-cell-group>
        <van-field v-model="name" placeholder="请输入姓名" />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="wechat" type="wechat" label="微信号" placeholder="请输入微信号" />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
      </van-cell-group>

      <van-checkbox v-model="check" style="padding-top: 20%;">同意基本公布信息协议</van-checkbox>

      <div style="padding-top: 10%;">
        <a @click="Next">
          <van-button type="info" size="large">下一步</van-button>
        </a>
      </div>

      <van-row type="flex" justify="center" style="margin-top: 25%;">
        <van-col span="6"></van-col>

        <van-col span="12" style="font-size: smaller;color: blue;text-align: center;">
          <p is-link @click="showPopup">点击了解信息公布协议</p>
        </van-col>

        <!-- <van-tag type="warning" color="#f2826a" is-link @click="showPopup">点击了解信息公布协议</van-tag> -->

        <van-col span="6"></van-col>
      </van-row>
      <van-popup v-model="show" position="bottom">
        <p>尊敬的各位校友，校友平台本着加强大家联系的原则,提供一个平台让大家保持联系，需要公布一些基本信息，方便大家增进了解，分类如下:</p>
        <p>1、曾在院工作过，我们会公布您的微信号、曾在院的工作部门</p>
        <p>2、曾在院学习过,我们会公布您的微信号和所在班级</p>
        <p>3、曾在院参加培训，我们会公布您的微信号、参加培训项目名称</p>
      </van-popup>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      name: '',
      tel: '',
      wechat: '',
      check: false,
      show: false,
      _self: '',
      obj: ''
    }
  },

  created() {
    this._self = this
  },
  methods: {
    showPopup() {
      this.show = true
    },
    Next: function() {
      let regExp = /^([0-9]{3,4}\-)?[0-9]{7,8}$|^0?1[3|4|5|7|8|9][0-9]\d{8}$/ //验证的手机号码格式
      var obj
      if (!this.name) {
        this.$dialog
          .alert({
            message: '请输入姓名' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.wechat) {
        this.$dialog
          .alert({
            message: '请输入微信号' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!regExp.test(this.tel)) {
        this.$dialog
          .alert({
            message: '请输入正确的手机号' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      obj = {
        name: this.name,
        tel: this.tel,
        wechat: this.wechat
      }
      obj = JSON.stringify(obj) //转化为JSON字符串
      localStorage.setItem('temp', obj)
      var x = JSON.parse(localStorage.getItem('temp'))
      this.$router.push({
        path: '/ScAuthentication'
      })
      console.log(x)
    }
  }
}
</script>
