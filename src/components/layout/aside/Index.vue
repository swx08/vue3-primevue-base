<template>
  <Card class="layout-aside">
    <template #title>
      <div style="height: 70px;padding: 16px;">
        我是logo
      </div>
      <Divider />
    </template>
    <template #content>
      <!-- 菜单 -->
      <div class="menu">
        我是菜单
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.layout-aside {
  width: $base-aside-width;
  height: calc(100vh - $base-header-padding * 2);
  border-radius: 0 8px 8px 0;
}

:deep(.p-card-body){
  padding: 0;
}

:deep(.p-divider-horizontal){
  margin: 0;
}
</style>