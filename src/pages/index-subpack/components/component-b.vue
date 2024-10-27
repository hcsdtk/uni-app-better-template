<template>
  <view class="content"> {{ title }}</view>
</template>

<script setup lang="ts">
import { Ref, ref } from "@vue/composition-api";

const title: Ref<string> = ref("I'm component b");

const emit = defineEmits(["loaded"]);

const setChineseTitle = (): void => {
  title.value = "我是组件b";
};



emit("loaded", {
  title,
  setChineseTitle,
});

// defineExpose({
//   title,
//   setChineseTitle,
// });
</script>

<style></style>
