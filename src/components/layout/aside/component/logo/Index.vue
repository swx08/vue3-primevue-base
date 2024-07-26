<template>
    <div class="logo">
        <svg-icon name="logo" width="32px" height="32px"></svg-icon>
        <span v-if="!collapsedStore.collapsed">Elp - 后台系统</span>
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
.logo {
    height: $base-header-height;
    padding: $base-header-padding;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    overflow: hidden;
}

.logo span{
    flex-shrink: 0;
    margin-left: 8px;
    color: black;
}
</style>