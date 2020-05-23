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
          name="teachB"
          v-model="teachB"
          label="信息院教学楼?"
          placeholder="请输入信息院教学楼(简称)"
          label-width="95px"
          input-align="center"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="libraryS"
          label="图书馆广场?"
          placeholder="请输入图书馆所在广场？"
          label-width="95px"
          input-align="center"
        />
      </van-cell-group>

      <van-row type="flex" style="padding-left: 2%;">
        <van-col span="12" style="padding-top: 2.5%;">是否曾经是老师？</van-col>
        <van-col span="6" style="padding-bottom: 2%;">
          <van-dropdown-menu>
            <van-dropdown-item v-model="teacher" :options="option" />
          </van-dropdown-menu>
        </van-col>
      </van-row>

      <van-button type="info" size="large" style="margin-top: 20%;" @click="Submit">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
      teachB: '',
      libraryS: '',
      teacher: 1,
      option: [
        { text: '是', value: 1 },
        { text: '否', value: 0 }
      ]
    }
  },
  created() {},
  methods: {
    async Submit() {
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
      if (!this.libraryS) {
        this.$dialog
          .alert({
            message: '请输入图书馆所在广场' //改变弹出框的内容
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
        InDate: x['InDate'],
        outDate: x['outDate'],
        depart: x['depart'],
        teacher: this.teacher,
        teachB: this.teachB,
        square: this.libraryS,
        role: 1
      }
      // var obj1 = JSON.stringify(obj) //转化为JSON字符串
      // 提交数据,验证问题
      try {
        let auth = await this.$api.staffAuth(obj)
        if (auth.data.code == 200) {
          localStorage.removeItem('temp')
          this.$router.push({
            path: '/StComplete'
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