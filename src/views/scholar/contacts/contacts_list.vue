<template>
  <div>
    <!-- 搜索框 -->
    <van-sticky>
      <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </van-sticky>
    <!-- 筛选 -->

    <van-tabs v-model="activeName" offset-top="40" sticky>
      <van-tab title="曾在院学习" name="a">
        <v-scholar></v-scholar>
      </van-tab>

      <van-tab title="授课老师" name="b">
        <v-teacher></v-teacher>
      </van-tab>
    </van-tabs>

    <!-- 通讯列表 -->
    <!-- <van-index-bar>
      <div v-for="(item,index) in scholarContact.personnelList">
        <van-index-anchor :key="item.id" :index="item.group" />
        <van-cell v-for="info in item.info" :key="info.id" :title="info.name" />
      </div>
    </van-index-bar>-->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import scholar_before from '../contacts/contact_detail/scholar_before'
import teacher from '../contacts/contact_detail/teacher'
// let mapStateobj = mapState([''])
export default {
  components: {
    'v-scholar': scholar_before,
    'v-teacher': teacher
  },
  data() {
    return {
      active: 0,
      value: '',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      },
      valueOption: 0,

      activeName: 'a'
      // option: [
      //   { text: '曾在院学习', value: 0 },
      //   { text: '授课老师', value: 1 }
      // ],
      // scholarContact: this.$store.getters.scholarContact
    }
  },
  // computed: {
  //   ...mapState(['scholarContact'])
  // }
  methods: {}
}
</script>
