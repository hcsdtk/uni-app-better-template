<template>
  <view class="content"> {{ title }}</view>
</template>

<script setup lang="ts">
import { ref } from "@vue/composition-api";

const title = ref("I'm component a");

const setChineseTitle = () => {
  title.value = "我是组件a";
};
defineExpose({
  title,
  setChineseTitle,
});
</script>

<style></style>
