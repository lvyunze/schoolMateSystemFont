<template>
  <div>
    <van-index-bar highlight-color="white">
      <div v-for="(item,index) in scholarContact.personnelList">
        <van-index-anchor :key="item.id" :index="item.group" />
        <van-cell
          v-for="info in item.info"
          @click="infoDetail(info.id)"
          :key="info.id"
          :title="info.name"
        />
      </div>
    </van-index-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scholarContact: this.$store.getters.scholarContact
    }
  },
  methods: {
    infoDetail(info) {
      this.$router.push({
        path: '/scholarInfoDetail'
      })
      console.log(info)
    }
  }
}
</script>