<template>
  <div>
    <van-steps :active="active">
      <van-step>1、基本信息</van-step>
      <van-step>2、验证身份</van-step>
      <van-step>3、完成注册</van-step>
    </van-steps>

    <div>
      <van-cell-group>
        <van-field v-model="name" label="姓名" placeholder="请输入姓名" input-align="right" />
      </van-cell-group>

      <van-cell-group>
        <van-field
          v-model="wechat"
          type="wechat"
          input-align="right"
          label="微信号"
          placeholder="请输入微信号"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="tel" type="tel" input-align="right" label="手机号" placeholder="请输入手机号" />
      </van-cell-group>

      <!-- <van-cell-group>
        <van-cell title="入职年" v-model="inDate" @click="InDate()" />
      </van-cell-group>-->
      <!-- 入职年 -->
      <van-field
        readonly
        clickable
        label="入职年"
        :value="value"
        placeholder="请选择入职年"
        @click="InDate = true"
        input-align="right"
      />
      <van-popup v-model="InDate" position="bottom">
        <van-picker
          show-toolbar
          :columns="inColumns"
          :default-index="17"
          @cancel="InDate = false"
          @confirm="inConfirm"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        label="离职年"
        :value="outValue"
        placeholder="请选择离职年"
        @click="outDate = true"
        input-align="right"
      />
      <van-popup v-model="outDate" position="bottom">
        <van-picker
          show-toolbar
          :columns="inColumns"
          :default-index="17"
          @cancel="outDate = false"
          @confirm="outConfirm"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        label="原工作部门"
        :value="departValue"
        placeholder="请选择原工作部门"
        @click="depart = true"
        input-align="right"
      />
      <van-popup v-model="depart" position="bottom">
        <van-picker
          show-toolbar
          :columns="departColumns"
          :default-index="17"
          @cancel="depart = false"
          @confirm="departConfirm"
        />
      </van-popup>

      <van-checkbox v-model="check" style="padding-top: 15%;">同意基本公布信息协议</van-checkbox>
      <!-- <router-link to="/StAuthentication"> -->
      <div style="padding-top: 10%;">
        <van-button type="info" size="large" @click="Next">下一步</van-button>
      </div>
      <!-- </router-link> -->

      <van-row type="flex" justify="center" style="margin-top: 15%;">
        <van-col span="6"></van-col>

        <van-col span="12" style="font-size: smaller;color: blue;text-align: center;">
          <p is-link @click="showPopup">点击了解信息公布协议</p>
        </van-col>

        <!-- <van-tag type="warning" color="#f2826a" is-link @click="showPopup">点击了解信息公布协议</van-tag> -->

        <van-col span="6"></van-col>
      </van-row>
      <van-popup v-model="show" position="bottom">
        <p>尊敬的各位校友，校友平台本着加强大家联系的原则,提供一个平台让大家保持联系，需要公布一些基本信息，方便大家增进了解，分类如下:</p>
        <p>1、曾在院工作过，我们会公布您的手机号、曾在院的工作部门</p>
        <p>2、曾在院学习过,我们会公布您的手机号和所在班级</p>
        <p>3、曾在院参加培训，我们会公布您的手机号、参加培训项目名称</p>
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
      InDate: false,
      outDate: false,
      depart: false,
      value: '',
      outValue: '',
      departValue: '',
      check: false,
      show: false,
      _self: '',
      link: '#',
      obj: '',
      inColumns: '',
      departColumns: ''
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
    this.inColumns = Selectdate
    this.departColumns = [
      '计算机系',
      '软件工程系',
      '物联网系',
      '教育技术系',
      '办公室',
      '学工'
    ]
  },
  methods: {
    // 入职年确认
    inConfirm(value) {
      this.value = value
      this.InDate = false
    },
    //
    outConfirm(value) {
      this.outValue = value
      this.outDate = false
    },
    departConfirm(value) {
      this.departValue = value
      this.depart = false
    },
    showPopup() {
      this.show = true
    },
    Next: function() {
      let regExp = /^([0-9]{3,4}\-)?[0-9]{7,8}$|^0?1[3|4|5|7|8|9][0-9]\d{8}$/ //验证的手机号码格式
      var obj
      if (!this.name) {
        this.$dialog
          .alert({
            message: '请输入姓名~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.wechat) {
        this.$dialog
          .alert({
            message: '请输入微信号~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!regExp.test(this.tel)) {
        this.$dialog
          .alert({
            message: '请输入正确的手机号~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.value) {
        this.$dialog
          .alert({
            message: '请选择入职年~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.outValue) {
        this.$dialog
          .alert({
            message: '请选择离职年~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (this.value > this.outValue) {
        this.$dialog
          .alert({
            message: '离职年小于入职年~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }

      if (!this.departValue) {
        this.$dialog
          .alert({
            message: '请选择工作部门~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      if (this.check == false) {
        this.$dialog
          .alert({
            message: '请同意基本公布信息协议~' //改变弹出框的内容
          })
          .then(() => {
            //点击确认按钮后的调用
          })
        return false
      }
      obj = {
        name: this.name,
        wechat: this.wechat,
        tel: this.tel,
        InDate: this.value,
        outDate: this.outValue,
        depart: this.departValue
      }
      obj = JSON.stringify(obj) //转化为JSON字符串
      localStorage.setItem('temp', obj)
      var x = JSON.parse(localStorage.getItem('temp'))
      this.$router.push({
        path: '/StAuthentication'
      })
      console.log(x)
      // this.link = 'authentication.html'
    }
  }
}
</script>
