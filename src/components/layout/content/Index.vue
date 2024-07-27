<template>
  <div class="layout-content" :class="{ collapsed: collapsedStore.collapsed ? true : false }">
    <ScrollPanel class="scroll-panel" :dt="{
      bar: {
        background: '{primary.color}'
      }
    }">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </ScrollPanel>
  </div>
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
  // overflow: scroll;

  &.collapsed {
    width: calc(100vw - $base-aside-collapsed-width);
    transition: all 0.3s;
  }
}

.scroll-panel {
  height: calc(100vh - $base-header-height - $base-header-padding * 3);
  width: 100%;
}

.fade-enter-active {
  /* 增加了过渡的持续时间以使其更温和 */
  transition: opacity 0.7s, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* 更平缓的缓动函数 */
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.7);
  /* 从0.5开始缩放，使起始状态部分可见 */
  transform-origin: center;
}
</style>