<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <component-a ref="componentARef" />

    <component-b @loaded="handleLoadedB" />
  </view>
</template>

<script setup lang="ts">
import { ref } from "@vue/composition-api";
import { unWrapEvent } from "../utils/async-load";

const title = ref("Hello World");

const componentARef = ref(null);

const componentBRef = ref(null);

function handleLoadedB(e: any) {
  console.log(e);
  componentBRef.value = unWrapEvent(e);

  setTimeout(() => {
    componentBRef.value?.setChineseTitle();
  });
}
</script>

<style></style>
