/*

将Toast.vue的vue组件导入

创建一个对象接收之后在全局manin.js中use创建出的toast。
（因为use注册组件时会调用使用install注册时的方法）

使用Vue.extend(Toast)创建Toast组件构造器接收过来。
(再把构造器使用new出实例)

这个时候我们就已经创建好了，再把toast实例挂在到页面中，使用div包裹

再把Toast组件template内容追加到页面的body中

再在Vue原型中使用$toast接收当前创建出的toast内容实例
(这样就可以在每个页面中使用Toast.vue组件了，其内部封装了show方法，也可用通过this.$toast.show()使用 )
其参数对应组件的展示方式
*/


import Toast from "./Toast"
const obj = {}

obj.install = function (Vue) {
    const toastContrustor = Vue.extend(Toast)
    const toast = new toastContrustor();
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast;
}

export default obj