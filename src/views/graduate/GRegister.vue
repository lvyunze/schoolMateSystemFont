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
        <van-field
          v-model="wechat"
          type="tel"
          label="微信号"
          placeholder="请输入微信号"
          input-align="right"
        />
      </van-cell-group>

      <van-cell-group>
        <van-field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" input-align="right" />
      </van-cell-group>

      <van-field
        readonly
        clickable
        label="年级"
        :value="gradeValue"
        placeholder="请选择年级"
        @click="grade = true"
        input-align="right"
      />
      <van-popup v-model="grade" position="bottom">
        <van-picker
          show-toolbar
          :columns="gradeColumns"
          :default-index="17"
          @cancel="grade = false"
          @confirm="gradeConfirm"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        label="专业"
        :value="majorValue"
        placeholder="请选择专业"
        @click="allDpart();major = true"
        input-align="right"
      />
      <van-popup v-model="major" position="bottom">
        <van-picker
          show-toolbar
          :columns="majorColumns"
          :default-index="17"
          @cancel="major = false"
          @confirm="majorConfirm"
        />
      </van-popup>

      <van-field
        readonly
        clickable
        label="班级"
        :value="classValue"
        placeholder="请选择班级"
        @click="allClass();Class = true"
        input-align="right"
      />
      <van-popup v-model="Class" position="bottom">
        <van-picker
          show-toolbar
          :columns="classColumns"
          :default-index="17"
          @cancel="Class = false"
          @confirm="classConfirm"
        />
      </van-popup>

      <van-checkbox v-model="check" style="padding-top: 12%;">同意基本公布信息协议</van-checkbox>

      <div style="padding-top: 5%;">
        <a v-bind="{ href: link }" @click="Next">
          <van-button type="info" size="large">下一步</van-button>
        </a>
      </div>

      <van-row type="flex" justify="center" style="margin-top: 10%;">
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
      grade: false,
      gradeValue: '',
      gradeColumns: '',
      major: false,
      majorValue: '',
      majorColumns: '',
      Class: false,
      classValue: '',
      classColumns: '',
      check: false,
      show: false,
      _self: '',
      link: '#',
      obj: ''
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
    this.gradeColumns = Selectdate
    this.majorColumns = []
    this.classColumns = []
  },
  methods: {
    // 年级确认
    gradeConfirm(value) {
      this.gradeValue = value
      this.grade = false
    },
    // 获取所有专业并且渲染到选项当中
    async allDpart() {
      let allMajor = await this.$api.getDepart()
      var Major = new Array()
      for (var i in allMajor.data) {
        Major.push(allMajor.data[i])
        this.majorColumns = Major
      }
    },

    async allClass() {
      let all_Class = await this.$api.getClass()
      var Class = new Array()
      for (var i in all_Class.data) {
        Class.push(all_Class.data[i])
        this.classColumns = Class
      }
    },

    // 专业确认
    majorConfirm(value) {
      this.majorValue = value
      this.major = false
    },
    // 班级确认
    classConfirm(value) {
      this.classValue = value
      this.Class = false
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
      // 手机号验证
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
        wechat: this.wechat,
        tel: this.tel,
        grade: this.gradeValue,
        major: this.majorValue,
        class: this.classValue
      }
      obj = JSON.stringify(obj) //转化为JSON字符串
      localStorage.setItem('temp', obj)
      this.$router.push({
        path: '/GAuthentication'
      })

    }
  }
}
</script>
