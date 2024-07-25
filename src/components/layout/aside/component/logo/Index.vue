<template>
    <div class="logo">
        <svg-icon name="logo" width="42px" height="42px"></svg-icon>
        <span>Elp - 后台系统</span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
onMounted(() => { })

</script>
<style scoped lang='scss'>
.logo {
    height: $base-header-height;
    padding: $base-header-padding;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
}

.logo span{
    flex-shrink: 0;
    margin-left: 8px;
    color: black;
}
</style>