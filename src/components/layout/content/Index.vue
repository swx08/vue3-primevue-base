<template>
  <div class="layout-content">
    <div style="height: 400px;background-color: #eee;">
      我是内容
      <span class="pi pi-user"></span>
      <span class="pi pi-angle-down"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-content {
  height: calc(100vh - $base-header-height - $base-header-padding * 3);
  width: calc(100vw - $base-aside-width);
  background-color: #c54bde;
  margin: $base-content-margin;
  padding: $base-header-padding;
  border-radius: 8px;
}
</style>