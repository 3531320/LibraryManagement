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
        {
            path: "/books",
            name: "books",
            component: () => import("../components/books.vue")
        },
      ],
      redirect:"/books" //重定向路由
  },
  {
      path: "/detail/:id",
      name: "detail",
      component: () => import("../components/detail.vue")
  }
]
export default routes;