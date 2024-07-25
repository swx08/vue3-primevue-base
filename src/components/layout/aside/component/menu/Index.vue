<template>
    <sidebar-menu :collapsed="collapsedStore.collapsed" :hideToggle="true" :menu="items" width="220px"
        theme="white-theme" @item-click="onItemClick">
        <template v-slot:header>
            <Logo />
            <Divider />
        </template>
    </sidebar-menu>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Logo from "@/components/layout/aside/component/logo/Index.vue";
//左侧菜单组件
import { SidebarMenu } from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import { useCollapsedStore } from "@/stores/models/collapsed";
import router from '@/router';

//控制菜单收缩
const collapsedStore = useCollapsedStore();

onMounted(() => {})

const items = ref([
    {
        href: '/home',
        title: '主面板',
        icon: 'pi pi-gauge',
    },
    {
        href: '/404',
        title: '404',
        icon: 'pi pi-map',
    },
    {
        title: '系统管理',
        icon: 'pi pi-cog',
        child: [
            {
                href: '/notice',
                title: '公告管理',
                icon: 'pi pi-envelope',
            },
            {
                href: '/charts/sublink',
                title: '字典管理',
                icon: 'pi pi-box',
            }
        ]
    },
    {
        title: '权限管理',
        icon: 'pi pi-lock',
        child: [
            {
                href: '/permission/user',
                title: '用户管理',
                icon: 'pi pi-user',
            },
            {
                href: '/permission/role',
                title: '角色管理',
                icon: 'pi pi-box',
            },
            {
                href: '/permission/menu',
                title: '角色管理',
                icon: 'pi pi-box',
            }
        ]
    }
]);
</script>
<style scoped lang='scss'>
:deep(.p-divider-horizontal){
    padding: 0;
    margin: 0 0 16px 0;
}
</style>