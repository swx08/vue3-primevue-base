<template>
  <div class="layout-content">
    我是内容
    <svg-icon name="logo" width="15rem" height="15rem" />
    <span style="font-size: 1.5rem;">决定是否了解的客服经理刷卡积分水电开发经理开始</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-content {
  height: calc(100vh - $base-header-height);
  width: calc(100vw - $base-aside-width);
  background-color: #eee;
  padding: $base-content-padding;
}
</style>