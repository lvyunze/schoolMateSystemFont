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
      <van-cell :title="name" label="姓名" icon="friends" />
      <van-cell :title="QQ" label="QQ号" icon="smile" />
      <van-cell :title="email" label="邮箱号" icon="graphic" />
      <van-cell :title="unil" label="现工作单位" icon="wap-home" />
      <van-cell :title="job" label="现任职务" icon="manager" />
      <van-cell :title="award" label="个人祝愿" icon="award" />
      <van-cell :title="message" label="寄语" icon="label" />

    </van-field>
    </van-cell-group>
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name:'scholarInfoDetail',
  data(){
   return{
     personInfo:'',
      phone:"",
      name:"",
      QQ:"",
      email:"",
      unil:'',
      job:"",
      award:"",
      message:""

   };

  },
  created(){
    this.deatils()
  },
  // mounted(){
  //   this.deatils()
  // },

  methods:{
        deatils(){
          let personInfo1 = this.$route.query.ID;
          let name = this.$route.query.NAME
          this.name = name
          this.personInfo = personInfo1
         // console.log(this.name)
          //console.log(this.personInfo)
          axios.get("http://47.115.171.199:5000/scholar_getDetail",
          {
            params:{id:this.personInfo},
          }).then((res)=>{
             console.log(res.data)
			  var aa = Object.values(res.data)
			  this.phone = aa[0].mobilephone
        this.QQ=aa[0].qq;
        this.email=aa[0].email;
        this.unil=aa[0].current_department;
        this.job=aa[0].current_job;
        this.award=aa[0].wishes;
        this.message=aa[0].signature;
            console.log("获取详情信息成功")
          }).catch((response)=>{
            console.log(response)
            console.log("获取失败")
          })
        }

  }

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
