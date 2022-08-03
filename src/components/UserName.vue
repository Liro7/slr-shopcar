<template>
  <div>username</div>
</template>

<script>
export default {
  created() {
    console.log("username组件创建");
  },
  beforedestroy() {
    console.log("username组件销毁");
  },
};
</script>

<style scoped>
</style>