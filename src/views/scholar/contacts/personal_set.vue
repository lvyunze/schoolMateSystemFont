<template>
  <div>
    <div class="van-hairline--bottom">姓名：{{name}}</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
   <!-- <van-form @submit="onSubmit">
      <van-field
       v-model="sex"
       name="性别"
       label="性别:"
        :rules="[{ required: true, message: '请填写用户名' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked" size="20" active-color="#07c160" />
        </template>
      </van-field>
      <van-field
        v-model="nation"
        name="民族"
        label="民族:"
         :rules="[{ required: true, message: '请填写用户名' }]">
        <template #right-icon>
          <van-switch v-model="switchChecked" size="20" active-color="#07c160" />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form> -->

  </div>
</template>
<script>
export default {
  data(){
    return{
      name:"吕云泽",
      sex: '',
      nation:'',
      switchChecked: true,
      username: '',
      password: ''
    };
  },
  methods:{
    onSubmit(values) {
          console.log('submit', values);
        },
  }
}
</script>
<style>
  .van-hairline--bottom{
    position: relative;
    z-index: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
    background-color: #fff;
  }
</style>
