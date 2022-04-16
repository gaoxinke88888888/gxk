import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        meta: {},
        component: () => import("@/views/home/index.vue"),
        children: [
            {
                path: "/pc",
                name: "pc",
                meta: {},
                component: () => import("@/views/pages/pc.vue"),
            },
            {
                path: "/app",
                name: "app",
                meta: {},
                component: () => import("@/views/pages/app.vue"),
            },
            // {
            //     path: "/p",
            //     name: "p",
            //     meta: {},
            //     component: () => import("../views/pTu.vue"),
            // },
            // {
            //     path: "/s",
            //     name: "s",
            //     meta: {},
            //     component: () => import("../views/searchTu.vue"),
            // },
            // {
            //     path: "/st",
            //     name: "st",
            //     meta: {},
            //     component: () => import("../views/setu.vue"),
            // },
        ],
    },
    {
        path: "/login",
        name: "login",
        meta: {},
        component: () => import("@/views/login/login.vue"),
    },
    {
        path: "/401",
        name: "401",
        meta: {},
        component: () => import("@/views/error/401.vue"),
    },
    {
        path: "/404",
        name: "404",
        meta: {},
        component: () => import("@/views/error/404.vue"),
    },
    {
        path: "/*",
        redirect: "/",
        name: "notfound",
        meta: {},
    },
];
const router = createRouter({
    history: createWebHistory(), //hash模式：createWebHashHistory  history模式:  createWebHistory
    routes,
});

// 通过beforeEach钩子来判断用户是否登陆过 有无token
const whiteList = ["/login"]; // 不重定向白名单
// const userInfo = getUserInfo()

router.beforeEach((to, from, next) => {
    // console.log(to.matched)
    if (true) {
        if (to.path === "/login") {
            next();
        } else {
            if (to.matched.length === 0) {
                next("/404"); // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
            } else {
                next(); // 如果匹配到正确跳转
            }
        }
        // 没有登录
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            // 还没有登录过 则跳转到登录界面
            // next('/login')
            if (to.path.slice(1) !== "") {
                if (to.matched.length === 0) {
                    router.push({
                        path: "/login",
                    });
                } else {
                    router.push({
                        path: "/login",
                        query: {
                            redirect: to.path.slice(1),
                        },
                    });
                }
            } else {
                router.push({
                    path: "/login",
                });
            }
        }
    }
});

router.beforeResolve((to, form, next) => {
    // console.log("全局解析守卫 beforeResolve");
    next();
});

router.afterEach((to, form) => {
    // console.log("全局后置守卫 afterEach");
});

export default router;
