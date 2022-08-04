<template>
  <div>
    <button @click="comname = 'UserName'">账号密码填写</button>
    <button @click="comname = 'UserInfo'">个人信息填写</button>

    <div style="border: 1px solid #333">
      <keep-alive>
        <component :is="comname"></component>
      </keep-alive>
    </div>

    <hr />
    <use-directive></use-directive>
  </div>
</template>

<script>
import UserName from "@/components/UserName.vue";
import UserInfo from "@/components/UserInfo.vue";
import UseDirective from "@/components/UseDirective.vue";
export default {
  components: { UserName, UserInfo, UseDirective },
  data() {
    return {
      comname: "UserName", //用来存储组件名
    };
  },
};
</script>

<style scoped>
</style>