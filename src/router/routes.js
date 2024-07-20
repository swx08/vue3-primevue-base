// 路由配置
const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("@/components/layout/Index.vue"),
    meta: {
      title: "首页",
      hidden: true,
      icon: "UploadFilled",
    },
  },
  // {
  //   path: "/",
  //   component: () => import("@/components/layout/Index.vue"),
  //   redirect: "/home",
  //   meta: {
  //     title: "layout",
  //     hidden: false,
  //     icon: "Odometer",
  //   },
  //   children: [
  //     {
  //       path: "home",
  //       name: "Home",
  //       component: () => import("@/pages/home/Index.vue"),
  //       meta: {
  //         title: "首页",
  //         hidden: false,
  //         icon: "Avatar",
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/permission",
  //   name: "Layout",
  //   component: () => import("@/components/layout/Index.vue"),
  //   meta: {
  //     title: "权限管理",
  //     hidden: false,
  //     icon: "Lock",
  //   },
  //   children: [
  //     {
  //       path: "/user",
  //       name: "User",
  //       component: () => import("@/pages/permission/user/Index.vue"),
  //       meta: {
  //         title: "用户管理",
  //         hidden: false,
  //         icon: "UserFilled",
  //       },
  //     },
  //     {
  //       path: "/role",
  //       name: "Role",
  //       component: () => import("@/pages/permission/role/Index.vue"),
  //       meta: {
  //         title: "角色管理",
  //         hidden: false,
  //         icon: "UserFilled",
  //       },
  //     },
  //     {
  //       path: "/menu",
  //       name: "Menu",
  //       component: () => import("@/pages/permission/menu/Index.vue"),
  //       meta: {
  //         title: "菜单管理",
  //         hidden: false,
  //         icon: "UserFilled",
  //       },
  //     },
  //   ],
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404/Index.vue"),
    meta: {
      title: "404",
      hidden: true,
      icon: "",
    },
  },
];

export default routes;
