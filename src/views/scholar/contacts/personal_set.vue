<template>
  <div>
    <div class="van-hairline--bottom">姓名：{{name}}</div>
    <van-form @submit="onSubmit">
      <van-field v-model="sex" name="性别" label="性别:" :rules="[{ required: true, message: '请选择性别' }]">
        <template #input>
         <!-- <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1" checked-color="#07c160">男</van-radio>
            <van-radio name="2" checked-color="#07c160">女</van-radio>
          </van-radio-group> -->
        </template>
        <template #right-icon>
          <van-switch v-model="switchChecked1" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="nation" name="民族" label="民族:" placeholder="请填写民族" :rules="[{ required: true, message: '请填写民族' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked2" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <!-- <van-field readonly clickable name="datetimePicker" :value="date" label="生日:" placeholder="点击选择日期" @click="show = true">
        <template #right-icon>
          <van-switch v-model="switchChecked3" size="20" active-color="#07c160" />
        </template>
      </van-field> -->
      <van-calendar v-model="show" color="#07c160" :min-date="minDate" :max-date="maxDate" @confirm="onConfirm" />
      <van-field type="email" v-model="email" name="邮箱" label="邮箱:" placeholder="请填写邮箱" :rules="[{ required: true, message: '请填写邮箱' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked4" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field type="number" v-model="QQ" name="qq号" label="qq号:" placeholder="请填写qq号" :rules="[{ required: true, message: '请填写qq号' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked5" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="phone" type="tel" name="联系电话" label="联系电话:" placeholder="请填写联系电话" :rules="[{ pattern, message: '请填写正确的号码' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked6" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="unit" name="现工作单位" label="现工作单位:" placeholder="请填写现工作单位" :rules="[{ required: true, message: '请填写现工作单位' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked7" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="job" name="现职务/职称" label="现职务/职称:" placeholder="请填写现职务/职称" :rules="[{ required: true, message: '请填写现职务/职称' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked8" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="honour" rows="2" autosize label="个人荣誉" type="textarea" placeholder="">
        <template #right-icon>
          <van-switch v-model="switchChecked9" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field v-model="message" rows="2" autosize label="寄语:" type="textarea" maxlength="50" placeholder=""
        show-word-limit>
        <template #right-icon>
          <van-switch v-model="switchChecked10" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <div style="margin: 16px;">
       <van-button round block type="info" native-type="submit" color="#07c160">
          确认修改
        </van-button>
      </div>
    </van-form>
<!-- //scholar/contacts/personal_set.vue -->
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        wx:'',
        name1:'',
        token:'',
        name: '',
        sex: '',
        nation: '',
        email: '',
        QQ: '',
        phone: '',
        unit: '',
        job: '',
        honour: '',
        message: '',
        switchChecked1: true,
        switchChecked2: true,
        switchChecked3: true,
        switchChecked4: true,
        switchChecked5: true,
        switchChecked6: true,
        switchChecked7: true,
        switchChecked8: true,
        switchChecked9: true,
        switchChecked10: true,
        username: '',
        password: '',
       // radio: '1',
        value: '',
        showPicker: false,
        date: '',
        show: false,
        minDate: new Date(1995, 0, 1),
        maxDate: new Date(2010, 0, 31),
        // 手机的验证
        pattern: /^1[3|4|5|7|8][0-9]{9}$/

      };
    },
    created(){
      //页面加载时就从本地通过localstorage获取存储的token值
      this.token =  localStorage.getItem('token')
    },
    mounted(){
       axios({
         method:'get',
         url:'http://47.115.171.199:5000/scholar_get_self_info',
         headers:{
           'Content-Type': "application/json;charset=UTF-8",
           //把token放到请求头才能请求，这里的'Bearer '表示是后台希望更加的安全，依据后台给的信息看到底是加还是不加
           'Authorization':this.token
          }
       })
       .then(res=>{
         console.log(res.data);
         const data = res.data
        var aa = Object.values(res.data)
         this.wx = aa[0].wechat
         this.name = aa[0].name
         this.phone = aa[0].mobilephone
         this.nation = aa[0].nationality
         this.sex = aa[0].sex
         this.email = aa[0].email
         this.QQ = aa[0].qq
         // this.date = aa[0].birthday
         this.unit = aa[0].current_department
         this.job = aa[0].current_job
         this.honour = aa[0].signature
         this.message = aa[0].wishes
        //  console.log(aa);
        //  console.log(aa[0].wechat);
        //  console.log(aa[0].wechat);
        //  console.log(this.wx);

         console.log('获取信息成功');
       })
       .catch((response)=>{
        console.log('失败');
        console.log(response);
       })
    },

    methods: {
      onSubmit(values) {
       // m1(){
        console.log(this.token);
        console.log('你好', values);
        axios({
          method:'post',
          url:'http://47.115.171.199:5000/scholar_personal_info',
          headers:{
            'Content-Type': "application/json;charset=UTF-8",
            //把token放到请求头才能请求，这里的'Bearer '表示是后台希望更加的安全，依据后台给的信息看到底是加还是不加
            'Authorization':this.token
           },
           data:{
            wechat:this.wx,
            name:this.name,
            sex:this.sex,
            qq:this.QQ,
            email:this.email,
            nationality:this.nation,
            current_department:this.unit,
            current_job:this.job,
            signature:this.honour,
            wishes:this.message,
            // birthday:this.date
           }
        })
        .then(res=>{
          console.log(res.data);
          console.log('赋值成功');
          this.$dialog
            .alert({
              message: '更改成功' //改变弹出框的内容
            })
            .then(() => {
              //点击确认按钮后的调用
            })
        })
        .catch((response)=>{
         console.log('失败');
         console.log(response);
        })
      },


      formatDate(date) {
        return `${date.getYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
      },
    }
  }
</script>
<style>
  .van-hairline--bottom {
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
  }
</style>
