import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')
const Login = () => import('views/login/Login.vue')


// 安装插件
Vue.use(VueRouter)

// 创建router


const routes = [
    {
        path: '',
        redirect: '/home',
        meta: {
            showTab: true
        }
    },
    {
        path: "/home",
        component: Home,
        meta: {
            showTab: true
        }
    },
    {
        path: "/category",
        component: Category,
        meta: {
            showTab: true
        }
    },
    {
        path: "/cart",
        component: Cart,
        meta: {
            showTab: true
        }
    },
    {
        path: "/profile",
        component: Profile,
        meta: {
            showTab: true
        }
    },
    {
        path: "/detail/:iid",
        component: Detail,
        meta: {
            showTab: false
        }
    },
    {
        path: "/login",
        component: Login,
        meta: {
            showTab: false
        }
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router