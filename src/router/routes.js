const routes = [
  {
      path: "/",
      name: "home",
      component: () => import("../components/home.vue"),
      children: [
        {
            path: "/index",
            name: "index",
            component: () => import("../components/index.vue")
        },
        {
            path: "/echat",
            name: "echat",
            component: () => import("../components/echat.vue")
        },
      ]
  },
  {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../components/detail.vue")
  }
]
export default routes;