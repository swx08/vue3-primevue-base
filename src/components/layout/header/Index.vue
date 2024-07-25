<template>
  <Card class="layout-header" :class="{ collapsed: collapsedStore.collapsed ? true : false }">
    <template #content>
      <Collapsed />
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Collapsed from "@/components/layout/header/component/collapsed/Index.vue";
import { useCollapsedStore } from "@/stores/models/collapsed";

//控制菜单收缩
const collapsedStore = useCollapsedStore();

onMounted(() => { })
</script>
<style scoped lang='scss'>
.layout-header {
  height: $base-header-height;
  width: calc(100vw - $base-aside-width);
  margin-left: $base-header-margin;
  padding: $base-header-padding;
  transition: all 0.3s;

  &.collapsed {
      width: calc(100vw - $base-aside-collapsed-width);
      transition: all 0.3s;
    }
}

:deep(.p-card-body) {
  padding: 0;
}
</style>