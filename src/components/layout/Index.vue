<template>
    <div class="layout-container">
        <Header />
        <div class="layout-content">
            <Aside />
            <Content />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from "@/components/layout/header/Index.vue";
import Aside from "@/components/layout/aside/Index.vue";
import Content from "@/components/layout/content/Index.vue";

onMounted(() => {})

</script>
<style scoped lang='scss'>
.layout-container{
    height: 100vh;
    width: 100vw;

    .layout-content{
        display: flex;
        height: calc(100vh - $base-header-height);
    }
}
</style>