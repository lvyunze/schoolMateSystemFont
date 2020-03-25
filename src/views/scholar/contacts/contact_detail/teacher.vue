<template>
  <div>
    <!-- <van-index-bar>
      <div v-for="(item,index) in teacher.data.personnelList">
        <van-index-anchor :key="item.id" :index="item.group" />
        <van-cell v-for="info in item.info" :key="info.id" :title="info.name" />
      </div>
    </van-index-bar>-->
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
  data() {
    return {
      teacher: this.$api.teacherContactGet()
    }
  },
  created() {
    console.log(this.teacher)
  }
}
</script>