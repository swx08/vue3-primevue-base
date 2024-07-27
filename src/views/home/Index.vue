<template>
  <div class="top-container">
    <Card v-for="(item, index) in data" :key="index" style="width: 24%;">
      <template #content>
        <div style="display: flex;justify-content: space-between;">
          <div style="display: flex;flex-direction: column;align-content: space-between;">
            <span style="color: #666;">{{ item.name }}</span>
            <count-up style="margin: 22px 0 22px 0;font-weight: 600;font-size: 18px;" :start-val="0" :end-val="item.num"
              :duration="2.5" :decimal-places="1" :delay="2"></count-up>
            <span><span style="color: green;">{{ item.descCount }}</span> {{ item.desc }}</span>
          </div>
          <div>
            <Button style="cursor: auto;" :icon="item.icon" :severity="item.type" aria-label="Notification" />
          </div>
        </div>
      </template>
    </Card>
  </div>

  <div class="middle-container">
    <Card style="width: 49.2%;margin-bottom: 16px;">
      <template #content>
        <Chat1 />
      </template>
    </Card>

    <Card style="width: 49.2%;margin-bottom: 16px;">
      <template #content>
        <Chat2 />
      </template>
    </Card>

    <Card style="width: 49.2%;margin-bottom: 16px;">
      <template #content>
        <Chat3 />
      </template>
    </Card>

    <Card style="width: 49.2%;">
      <template #content>
        <Chat4 />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chat1 from "@/views/home/component/chart1/Index.vue";
import Chat2 from "@/views/home/component/chart2/Index.vue";
import Chat3 from "@/views/home/component/chart3/Index.vue";
import Chat4 from "@/views/home/component/chart4/Index.vue";
import CountUp from 'vue-countup-v3'

const data = ref([
  {
    name: '订单数',
    num: 500,
    icon: 'pi pi-cart-plus',
    descCount: '24 new',
    desc: 'since last visit',
    type: 'success'
  },
  {
    name: '收入',
    num: 2000,
    icon: 'pi pi-wallet',
    descCount: '%52+',
    desc: 'since last week',
    type: 'info'
  },
  {
    name: '用户数',
    num: 3400,
    icon: 'pi pi-user',
    descCount: '520',
    desc: 'newly registered',
    type: 'warn'
  },
  {
    name: '评论数',
    num: 4000,
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

.top-container>card {
  flex: auto;
}

.middle-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
  flex-wrap: wrap;
}

.middle-container>card {
  flex: auto;
  margin-top: 16px;
}
</style>