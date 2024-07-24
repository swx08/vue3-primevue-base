<template>
  <div class="layout-aside">
    我是左侧
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-aside {
  width: $base-aside-width;
  height: calc(100vh - $base-header-height);
  background-color: rgb(11, 16, 45);
  color: #fff;
}
</style>