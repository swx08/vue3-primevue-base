<template>
  <div style="background-color: #eee;width: 100%;padding: 16px;">
    我是首页
    <div class="card flex justify-center flex-wrap gap-4">
      <Button label="Primary" text raised />
      <Button label="Secondary" severity="secondary" text raised />
      <Button label="Success" severity="success" text raised />
      <Button label="Info" severity="info" text raised />
      <Button label="Warn" severity="warn" text raised />
      <Button label="Help" severity="help" text raised />
      <Button label="Danger" severity="danger" text raised />
      <Button label="Plain" plain text raised />
    </div>
    <Message severity="success">
      <template #icon>
        <Avatar image="https://pic.imgdb.cn/item/669b7846d9c307b7e94a65aa.jpg" shape="circle" />
      </template>
      <span class="ml-2">How may I help you?</span>
    </Message>
    <div class="card flex justify-center" style="padding: 20px;">
      <Toast />
      <div class="flex flex-wrap gap-2">
        <Button label="Success" severity="success" @click="showSuccess" />
        <Button label="Info" severity="info" @click="showInfo" />
        <Button label="Warn" severity="warn" @click="showWarn" />
        <Button label="Error" severity="danger" @click="showError" />
        <Button label="Secondary" severity="secondary" @click="showSecondary" />
        <Button label="Contrast" severity="contrast" @click="showContrast" />
      </div>
    </div>

    <div style="padding: 30px;">
      <FloatLabel>
        <InputText id="username" v-model="value" />
        <label for="username">用户名</label>
      </FloatLabel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const value = ref('');

const showSuccess = () => {
  toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
};

const showInfo = () => {
  toast.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
};

const showWarn = () => {
  toast.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
};

const showError = () => {
  toast.add({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
};

const showSecondary = () => {
  toast.add({ severity: 'secondary', summary: 'Secondary Message', detail: 'Message Content', life: 3000 });
};

const showContrast = () => {
  toast.add({ severity: 'contrast', summary: 'Contrast Message', detail: 'Message Content', life: 3000 });
};
</script>
<style scoped lang='scss'></style>