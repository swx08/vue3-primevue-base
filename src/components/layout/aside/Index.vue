<template>
  <div class="layout-aside">
    <div style="height: 70px;">
      我是logo
    </div>
    <Divider />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-aside {
  width: $base-aside-width;
  height: calc(100vh - $base-header-padding * 2);
  background-color: #30efbf;
  color: #1e1616;
  border-radius: 0 8px 8px 0;
}

.p-divider-horizontal{
  margin: 0;
}
</style>