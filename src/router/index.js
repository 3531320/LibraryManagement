import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes.js"
var router=createRouter({
    history:createWebHistory(),
    routes
})
export default router