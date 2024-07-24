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
  width: 100vw;
  background-color: rgb(21, 39, 46);
  color: #fff;
}
</style>