<template>
  <div>
    <!-- 搜索框 -->
    <van-sticky>
      <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </van-sticky>
    <!-- 筛选 -->

    <van-tabs v-model="activeName" offset-top="40" sticky @change="onChange" >

     <van-tab title="培训校友" name="a">
        <v-scholar></v-scholar>
      </van-tab>
      <van-tab title="教师校友" name="b" v-model="tealist" >
       <van-index-bar id="table1">
         <div v-for="(item,index) in list_data1">
           <van-index-anchor :key="item.id" :index="item.group" />
           <van-cell v-for="info in item.info" :key="info.id" @click="infoDetail(info)" :title="info.name" />
         </div>
       </van-index-bar>
      </van-tab>

	 <van-tab title="学生校友" name="c" v-model="tealist1" >
	     <van-index-bar id="table2">
	       <div v-for="(item,index) in list_data2">
	         <van-index-anchor :key="item.id" :index="item.group" />
	         <van-cell v-for="info in item.info" :key="info.id" @click="infoDetail(info)" :title="info.name" />
	       </div>
	     </van-index-bar>
	  </van-tab>

    </van-tabs>

  </div>
</template>
<script>
import { mapState } from 'vuex'
import axios from 'axios'
import scholar_before from '../contacts/contact_detail/scholar_before'
//import teacher from '../contacts/contact_detail/teacher'
// let mapStateobj = mapState([''])
export default {
  components: {
    'v-scholar': scholar_before,
   // 'v-teacher': teacher
  },
  data() {
    return {
      active: 0,
      value: '',
      tealist:'',
      tealist1:'',
      list_data1:[],
	   list_data2:[],
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      valueOption: 0,

      activeName: 'a'

    }
  },
  created(){
  axios({
  	method:'get',
  	url:'http://47.115.171.199:5000/graduate_contact_get',
  })
  .then(res=>{
  	console.log(res.data);
  	const data = res.data
  	this.list_data2 = data.personnelList
  	 console.log("成功拉")
  })
  },
  methods:{
	  onChange(){
		  // console.log("我爱编程")
      axios.get("http://47.115.171.199:5000/staff_contact_get")
      .then(this.get1)
	  },
    get1(res){
         const data = res.data
         this.list_data1 = data.personnelList
      // console.log(res.data)
      // console.log("成功拉")
    },
    mounted(){
      this.onChange()
    },
    infoDetail(info) {
      this.$router.push({
        path: '/scholarInfoDetail',
        query:{ID:info.id, NAME:info.name}
        // query:{id:info.activeJobId}
      })
     // console.log(info)
     // console.log(scholarContact.personnelList)
    },

}
}
</script>
