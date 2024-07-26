<template>
    <Button @click="handgeCollapsedStatus" icon="pi pi-angle-double-left" text rounded v-if="!collapsedStore.collapsed"
        severity="secondary" />
    <Button @click="handgeCollapsedStatus" icon="pi pi-angle-double-right" text rounded v-else severity="secondary" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCollapsedStore } from "@/stores/models/collapsed";

//控制菜单收缩
const collapsedStore = useCollapsedStore();

onMounted(() => { })

//修改菜单栏收缩状态
const handgeCollapsedStatus = () => {
    collapsedStore.collapsed = !collapsedStore.collapsed;
}
</script>
<style scoped lang='scss'></style>