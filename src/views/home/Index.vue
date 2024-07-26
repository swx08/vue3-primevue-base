<template>
  <div class="top-container">
    <Card v-for="(item, index) in data" :key="index" style="width: 22%;">
      <template #content>
        <div style="display: flex;justify-content: space-between;">
          <div style="display: flex;flex-direction: column;align-content: space-between;">
            <span style="color: #666;">{{ item.name }}</span>
            <span style="margin: 22px 0 22px 0;font-weight: 600;font-size: 18px;">{{ item.num }}</span>
            <span><span style="color: green;">{{ item.descCount }}</span> {{ item.desc }}</span>
          </div>
          <div>
            <Button style="cursor: auto;" :icon="item.icon" :severity="item.type" aria-label="Notification" />
          </div>
        </div>
      </template>
    </Card>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const data = ref([
  {
    name: '订单数',
    num: '152',
    icon: 'pi pi-cart-plus',
    descCount: '24 new',
    desc: 'since last visit',
    type:'success'
  },
  {
    name: '收入',
    num: '$2.100',
    icon: 'pi pi-wallet',
    descCount: '%52+',
    desc: 'since last week',
    type: 'info'
  },
  {
    name: '用户数',
    num: '28441',
    icon: 'pi pi-user',
    descCount: '520',
    desc: 'newly registered',
    type: 'warn'
  },
  {
    name: '评论数',
    num: '152 Unread',
    icon: 'pi pi-comments',
    descCount: '85',
    desc: 'responded',
    type: 'help'
  },
]);
</script>
<style scoped lang='scss'>
.top-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.top-container > card {
  flex: auto;
}
</style>