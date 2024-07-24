<template>
  <div class="layout-header">
    我是头部
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-header {
  height: $base-header-height;
  width: calc(100vw - $base-aside-width);
  background-color: #11a5c6;
  color: #1e1616;
  margin-left: $base-header-margin;
  padding: $base-header-padding;
  border-radius: 8px;
}
</style>