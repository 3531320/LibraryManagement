import { createRouter, createWebHistory,createWebHashHistory } from "vue-router"
import routes from "./routes.js"
var router = createRouter({
    history: createWebHashHistory(), //hash模式的路由 /#/
    routes
})
export default router