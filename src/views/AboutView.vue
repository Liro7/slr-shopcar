<template>
  <div>
    <pannel>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </pannel>

    <!-- 具名插槽 -->
    <hr />
    <pannel-one>
      <template v-slot:title>
        <h4>h4</h4>
      </template>

      <template v-slot:content>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </template>
    </pannel-one>

    <!-- 作用域插槽 -->
    <pannel-two>
      <template v-slot:title>
        <h4>芙蓉路</h4>
      </template>
      <template v-slot:content="scope">
        <ul>
          <li v-for="item in scope.list" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </template>
    </pannel-two>
  </div>
</template>

<script>
import Pannel from "@/components/Pannel.vue";
import PannelOne from "@/components/PannelOne.vue";
import PannelTwo from "@/components/PannelTwo.vue";
export default {
  components: { Pannel, PannelOne, PannelTwo },
};
</script>

<style scoped>
</style>