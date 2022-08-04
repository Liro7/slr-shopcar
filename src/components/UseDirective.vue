<template>
  <div>
    <input type="text" v-focus />
    <p v-color="colorStr" @click="colorStr = 'blue'">修改文字颜色</p>
  </div>
</template>

<script>
// 创建自定义指令
// inserted指令所在标签被插入到网页上触发（一次）
export default {
  data() {
    return {
      colorStr: "red",
    };
  },
  directives: {
    focus: {
      inserted(e) {
        console.log(e, 9);
        e.focus();
      },
    },
    color: {
      inserted(e, bindling) {
        e.style.color = bindling.value;
      },
      update(e, bindling) {
        e.style.color = bindling.value;
      },
    },
  },
};
</script>

<style scoped>
</style>