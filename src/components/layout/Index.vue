<template>
    <div class="layout-container">
        <Aside />
        <div>
            <Header />
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
    display: flex;
    padding: $base-padding;
    background-color: $base-background;
}
</style>