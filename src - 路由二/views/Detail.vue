<template>
  <div>detail</div>
</template>

<script>
export default {
  created() {
    // 可以操作data中的数据
    console.log(this.$route.query);
  },
};
</script>

<style scoped>
</style>