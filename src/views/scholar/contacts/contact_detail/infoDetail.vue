<template>
  <div>
    <div class="top">
    	 <!-- 个人详情页 -->
      <van-image class="img"
        round
        width="5rem"
        height="5rem"
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
     </div>
    <van-cell-group>
      <van-cell :title="phone" label="电话" icon="phone" />
      <van-cell :title="name" label="姓名拼音" icon="friends" />
      <van-cell :title="QQ" label="QQ号" icon="smile" />
      <van-cell :title="email" label="邮箱号" icon="graphic" />
      <van-cell :title="unil" label="现工作单位" icon="wap-home" />
      <van-cell :title="job" label="现任职务" icon="manager" />
      <van-cell :title="award" label="个人荣誉" icon="award" />
      <van-cell :title="message" label="寄语" icon="label" />

      <!-- <van-cell is-link v-for="item in station" :key="item.Id" :id="item.Id" :title="item.Name" @click="onClick"/> -->

    </van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data(){
   return{
      phone:"1234567",
      name:"LAN CUIYINGLAN",
      QQ:"1270967764",
      email:"1370967764@qq.com",
      unil:'学校',
      job:"教师",
      award:"计算机等级合格证书、英语四级、教师资格证、托福、雅思、研究生博士生",
      message:"人吃饭是为了活着，但活着不是为了吃饭"

   };

  },

}
</script>
<style>
  .top{
    padding-bottom: 10%;
    background-color: rgba(0, 102, 255, 0.623);
    position: relative;
  }
  .img{
    margin: 20% 0 0 40%;
  }
</style>
