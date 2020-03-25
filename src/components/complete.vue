<template>
  <div>
    <van-steps :active="active">
      <van-step>1、基本信息</van-step>
      <van-step>2、验证身份</van-step>
      <van-step>3、完成注册</van-step>
    </van-steps>
    <van-row type="flex" justify="space-between" style="text-align: center;margin-top: 20%;">
      <van-col span="8"></van-col>
      <van-col span="8" style="box-shadow:0px 0px  10px 5px #EEEFFD;background-color: gray;">
        <van-icon name="success" color="white" size="100" />
        <van-tag color="gray">注册完成</van-tag>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>
    <div style="text-align: center;margin-top: 10%;">
      <van-tag color="white" text-color="black">您的校友信息已经提交，可以查看相关的校友联系方式了</van-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2
    }
  }
}
</script>
