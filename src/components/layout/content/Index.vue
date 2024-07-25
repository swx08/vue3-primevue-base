<template>
  <Card class="layout-content" :class="{ collapsed: collapsedStore.collapsed ? true : false }">
    <template #content>
      <div style="height: 400px;background-color: #eee;">
        我是内容
        <span class="pi pi-user"></span>
        <span class="pi pi-angle-down"></span>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCollapsedStore } from "@/stores/models/collapsed";

//控制菜单收缩
const collapsedStore = useCollapsedStore();
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-content {
  height: calc(100vh - $base-header-height - $base-header-padding * 3);
  width: calc(100vw - $base-aside-width);
  margin: $base-content-margin;
  transition: all 0.3s;

  &.collapsed {
      width: calc(100vw - $base-aside-collapsed-width);
      transition: all 0.3s;
    }
}
</style>