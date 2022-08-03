<template>
  <div>userinfo</div>
</template>

<script>
export default {
  created() {
    console.log("userinfo组件创建");
  },
  beforeDestroy() {
    console.log("userinfo组件销毁");
  },
};
</script>

<style scoped>
</style>