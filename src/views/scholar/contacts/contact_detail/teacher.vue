<template>
  <div>
       <!-- 曾在院参加培训的老师联系方式-->
    <!-- <van-index-bar id="table1">
      <div v-for="(item,index) in list_data1">
        <van-index-anchor :key="item.id" :index="item.group" />
        <van-cell v-for="info in item.info" :key="info.id" :title="info.name" />
      </div>
    </van-index-bar> -->
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="D" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>
<script>
export default {
  //在data中将要用到的数据给一个初始值，为空
  data(){
    return{

    }
  },
  // mounted: function () {
  //         // GET /someUrl
  //         this.$http.get('127.0.0.1:5000/teacher_contact_get').then(response => {
  //              console.log(response.data);
  //             // get body data
  //             // this.someData = response.body;

  //         }, response => {
  //             console.log("error");
  //         });
  //     },

}
</script>
