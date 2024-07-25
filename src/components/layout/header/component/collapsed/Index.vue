<template>
    <div>
        <Button @click="handgeCollapsedStatus" v-if="!collapsedStore.collapsed" outlined aria-label="Filter">
            <svg-icon name="collapsed-left" width="20px" height="20px" />
        </Button>
        <Button @click="handgeCollapsedStatus" v-else outlined aria-label="Filter">
            <svg-icon name="collapsed-right" width="20px" height="20px" />
        </Button>
    </div>
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