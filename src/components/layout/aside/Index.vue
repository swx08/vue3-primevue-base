<template>
  <div class="layout-aside">
    <Menu />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Menu from "./component/menu/Index.vue";

onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-aside {
  width: $base-aside-width;
  height: calc(100vh - $base-header-padding * 2);
  border-radius: 0 8px 8px 0;
}

:deep(.p-card-body) {
  padding: 0;
}

:deep(.p-divider-horizontal) {
  margin: 0;
}
</style>