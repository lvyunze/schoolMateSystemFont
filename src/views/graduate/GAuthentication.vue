<template>
  <div>
    <van-steps :active="active">
      <van-step>1、基本信息</van-step>
      <van-step>2、验证身份</van-step>
      <van-step>3、完成注册</van-step>
    </van-steps>
    <div>
      <van-cell-group>
        <van-field
          v-model="teacherName"
          label="老师姓名"
          placeholder="请输入教您的一位信息院老师姓名"
          input-align="right"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="teachB" label="信息院教学楼" placeholder="请输入信息院教学楼" input-align="right" />
      </van-cell-group>

      <van-button type="info" size="large" style="margin-top: 20%;" @click="Submit">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      teacherName: '',
      teachB: ''
    }
  },
  methods: {
    async Submit() {
      if (!this.teacherName) {
        this.$dialog
          .alert({
            message: '请输入信息员教您的其中一位老师姓名' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.teachB) {
        this.$dialog
          .alert({
            message: '请输入信息院教学楼名称' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      var x = JSON.parse(localStorage.getItem('temp'))
      var obj = {
        name: x['name'],
        wechat: x['wechat'],
        tel: x['tel'],
        grade: x['grade'],
        major: x['major'],
        class: x['class'],
        teacher: this.teacherName,
        teachB: this.teachB,
        role: 2
      }
      console.log(obj)
      // 提交数据,验证问题
      try {
        let auth = await this.$api.graduateAuth(obj)
        if (auth.data.code == 200) {
          localStorage.removeItem('temp')
          this.$router.push({
            path: '/GComplete'
          })
        }
      } catch (err) {
        this.$dialog
          .alert({
            message: '验证失败' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
      }
      // 删除临时存放的数据
    }
  }
}
</script>