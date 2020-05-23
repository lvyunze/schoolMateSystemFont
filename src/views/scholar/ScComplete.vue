<template>
  <div>
    <!-- 导航栏完成注册 -->
    <v-complete></v-complete>
    <div style="margin-top: 10%;">
   
      <router-link to="/ScContacts">
        <van-button type="info" size="large">返回通讯录页面</van-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import complete from '../../components/complete'
export default {
  components: {
    'v-complete': complete
  },
  // 向后台提交什么数据
  created() {
    this.$store.dispatch('scholarContactGet')
  }
}
</script>
