<template>
  <div>
    <van-steps :active="active">
      <van-step>1、基本信息</van-step>
      <van-step>2、验证身份</van-step>
      <van-step>3、完成注册</van-step>
    </van-steps>
    <div>
      <van-field
        readonly
        clickable
        label="培训年份"
        :value="value"
        placeholder="请选择培训年份"
        @click="train = true"
        input-align="center"
      />
      <van-popup v-model="train" position="bottom">
        <van-picker
          show-toolbar
          :columns="Columns"
          :default-index="17"
          @cancel="train = false"
          @confirm="Confirm"
        />
      </van-popup>
      <van-cell-group>
        <van-field
          name="proName"
          v-model="proName"
          label="培训项目名称"
          placeholder="请输入培训项目名称(全称)"
          label-width="95px"
          input-align="center"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="teacher"
          label="培训老师姓名?"
          placeholder="请输入其中一位培训老师姓名？"
          label-width="95px"
          input-align="center"
        />
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
      value: '',
      train: false,
      proName: '',
      teacher: '',
      _self: ''
    }
  },
  created() {
    this._self = this
    var Selectdate = new Array()
    var now = new Date()
    let i
    for (i = 2000; i <= now.getFullYear(); i++) {
      Selectdate.push(i)
    }
    this.Columns = Selectdate
  },
  methods: {
    Confirm(value) {
      this.value = value
      this.train = false
    },
    async Submit() {
      if (!this.value) {
        this.$dialog
          .alert({
            message: '请选择培训年份' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      if (!this.proName) {
        this.$dialog
          .alert({
            message: '请输入培训项目名称' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      if (!this.teacher) {
        this.$dialog
          .alert({
            message: '请输入其中一位培训老师姓名' //改变弹出框的内容
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
        date: this.value,
        project: this.proName,
        teacher: this.teacher,
        role: 3
      }
      try {
        let auth = await this.$api.scholarAuth(obj)
        if (auth.data.code == 200) {
          // localStorage.removeItem('temp')
          this.$router.push({
            path: '/ScComplete'
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
    }
  }
}
</script>
