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
    <div style="margin: 50px;">
      <Button icon="pi pi-user" severity="info" aria-label="User" />
      <Button icon="pi pi-bell" severity="warn" aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />
      <Button icon="pi pi-star" severity="contrast" aria-label="Star" />

      <Button icon="pi pi-check" rounded aria-label="Filter" />
      <Button icon="pi pi-bookmark" severity="secondary" rounded aria-label="Bookmark" />
      <Button icon="pi pi-search" severity="success" rounded aria-label="Search" />
      <Button icon="pi pi-user" severity="info" rounded aria-label="User" />
      <Button icon="pi pi-bell" severity="warn" rounded aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
      <Button icon="pi pi-star" severity="contrast" rounded aria-label="Star" />

      <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
      <Button icon="pi pi-bookmark" severity="secondary" rounded outlined aria-label="Bookmark" />
      <Button icon="pi pi-search" severity="success" rounded outlined aria-label="Search" />
      <Button icon="pi pi-user" severity="info" rounded outlined aria-label="User" />
      <Button icon="pi pi-bell" severity="warn" rounded outlined aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" rounded outlined aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" />
      <Button icon="pi pi-star" severity="contrast" rounded outlined aria-label="Star" />

      <Button icon="pi pi-check" text raised rounded aria-label="Filter" />
      <Button icon="pi pi-bookmark" severity="secondary" text raised rounded aria-label="Bookmark" />
      <Button icon="pi pi-search" severity="success" text raised rounded aria-label="Search" />
      <Button icon="pi pi-user" severity="info" text raised rounded aria-label="User" />
      <Button icon="pi pi-bell" severity="warn" text raised rounded aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" text raised rounded aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
      <Button icon="pi pi-star" severity="contrast" text raised rounded aria-label="Star" />

      <Button icon="pi pi-check" text rounded aria-label="Filter" />
      <Button icon="pi pi-bookmark" severity="secondary" text rounded aria-label="Bookmark" />
      <Button icon="pi pi-search" severity="success" text rounded aria-label="Search" />
      <Button icon="pi pi-user" severity="info" text rounded aria-label="User" />
      <Button icon="pi pi-bell" severity="warn" text rounded aria-label="Notification" />
      <Button icon="pi pi-heart" severity="help" text rounded aria-label="Favorite" />
      <Button icon="pi pi-times" severity="danger" text rounded aria-label="Cancel" />
      <Button icon="pi pi-star" severity="contrast" text rounded aria-label="Star" />
    </div>
    <Message severity="info" icon="pi pi-send">Info Message</Message>
    <Message severity="success">
      <template #icon>
        <Avatar image="https://pic.imgdb.cn/item/669b7846d9c307b7e94a65aa.jpg" shape="circle" />
      </template>
      <span class="ml-2">How may I help you?</span>
    </Message>

    <Card style="width: 50rem; overflow: hidden;margin-top: 50px;">
      <template #header>
        <img alt="user header" src="https://pic.imgdb.cn/item/669b7846d9c307b7e94a65aa.jpg" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
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