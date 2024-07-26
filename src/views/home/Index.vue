<template>
  <div class="top-container">
    <Card v-for="(item, index) in data" :key="index" style="width: 24%;">
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

const data = ref([
  {
    name: '订单数',
    num: '152',
    icon: 'pi pi-cart-plus',
    descCount: '24 new',
    desc: 'since last visit',
    type: 'success'
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

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Sales',
        data: [540, 325, 702, 620],
        backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
        borderWidth: 1
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}
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