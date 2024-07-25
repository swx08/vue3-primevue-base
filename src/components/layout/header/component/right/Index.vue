<template>
    <div class="header-right">
        <span>
            <Button icon="pi pi-bell" text rounded @click="handgeCollapsedStatus" severity="secondary" />
        </span>
        <span>
            <Button icon="pi pi-refresh" text rounded @click="handgeCollapsedStatus" severity="secondary" />
        </span>
        <span>
            <Button icon="pi pi-expand" text rounded @click="handgeCollapsedStatus" severity="secondary" size="small" />
        </span>
        <span>
            <Button icon="pi pi-user" severity="secondary" rounded text @click="toggle">
                <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" shape="circle" />
            </Button>
            <Menu ref="menu" id="config_menu" :model="items" popup>
                <template #item="{ item, props }">
                    <a v-ripple class="flex items-center" v-bind="props.action" @click="handler(item)">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </a>
                </template>
            </Menu>
        </span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const menu = ref(null);
const items = ref([
    {
        label: '个人中心',
        icon: 'pi pi-user'
    },
    {
        label: '退出登录',
        icon: 'pi pi-power-off'
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const handler = (item) => {
    console.log(item)
};
onMounted(() => {})

</script>
<style scoped lang='scss'>
.header-right{
    display: flex;
    align-items: center;
    height: 64px;
}

.header-right span{
    margin: 0 10px 0 10px;
}
</style>