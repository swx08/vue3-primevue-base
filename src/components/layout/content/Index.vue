<template>
  <div class="layout-content">
    我是内容
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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