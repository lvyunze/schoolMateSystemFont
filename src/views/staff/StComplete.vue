<template>
  <div>
    <v-complete></v-complete>
    <div style="margin-top: 10%;">
      <router-link to="/StContacts">
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
  }
}
</script>
