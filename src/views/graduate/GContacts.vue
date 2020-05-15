<template>
  <div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span @click="contact">通讯录</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="setting">个人设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
	//console.log(axios);
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  },
  created() {
    // this.getScholarContact()
    window.addEventListener('beforeunload', () => {
      this.$store.dispatch('scholarContactGet')
    })
  },
  methods: {
    contact() {
      this.$router.push({
        path: '/GContacts'
      })
    },
    setting() {
      this.$router.push({
        path: '/GContacts/personal_set'
      })
    }
    // getScholarContact() {
    //   const contact = this.$store.state.scholarContact
    //   if (!contact) {
    //     console.log('test')
    //     this.$store.dispatch('scholarContactGet')
    //   }
    // }
  },
  }
</script>
