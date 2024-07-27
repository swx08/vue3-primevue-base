<template>
  <div>
    公告管理
    <Toast />
    <Button label="Show" @click="show()" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useToast } from "primevue/usetoast";

const toast = useToast();
onMounted(() => {})

const show = () => {
  toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>
<style scoped lang='scss'>
</style>