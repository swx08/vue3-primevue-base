<template>
  <Card class="layout-header">
    <template #content>
      我是头部
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-header {
  height: $base-header-height;
  width: calc(100vw - $base-aside-width);
  margin-left: $base-header-margin;
  padding: $base-header-padding;
  border-radius: 8px;
}

:deep(.p-card-body) {
  padding: 0;
}
</style>