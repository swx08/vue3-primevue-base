<template>
    <Button @click="handgeCollapsedStatus" text rounded v-if="!collapsedStore.collapsed" severity="secondary">
        <svg-icon name="collapsed-left" width="20px" height="20px" />
    </Button>
    <Button @click="handgeCollapsedStatus" text rounded v-else severity="secondary">
        <svg-icon name="collapsed-right" width="20px" height="20px" />
    </Button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCollapsedStore } from "@/stores/models/collapsed";

//控制菜单收缩
const collapsedStore = useCollapsedStore();

onMounted(() => {})

//修改菜单栏收缩状态
const handgeCollapsedStatus = () => {
    collapsedStore.collapsed = !collapsedStore.collapsed;
}
</script>
<style scoped lang='scss'>

</style>