<template>
  <div>
    <!-- 导航栏完成注册 -->
    <v-complete></v-complete>
    <div style="margin-top: 10%;">
    <!-- 注册类型 -->
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
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
