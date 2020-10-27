
// comm导入防抖函数
import { debounce } from "common/utils";

// 返回顶部
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
            refresh: null
        }
    },
    mounted() {

        // 通过事件总线监听图片加载完成的事件

        // 这个refresh方法返回的是一个方法。（this.$refs.scroll.refresh不带括号是因为调用的是方法，）
        // 带了括号就是方法的返回值值  
        this.refresh = debounce(this.$refs.scroll.refresh, 200);
        // 对监听传递过来的事件进行保存(用于离开组件时销毁)
        this.itemImgListener = () => {
            this.refresh();
        };
        this.$bus.$on("itemImageLoad", this.itemImgListener);
    },
}

// 返回顶部进行混入。（因部分页面需要返回顶部，且代码一致。）
export const backTopMixin = {

    data() {
        return {
            showTop: false,
        }
    },

    methods: {
        // 返回顶部
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 300);
        },
        showBackItem(index) {
            this.showTop = index > 500
        }

    },



    components: {
        BackTop,
    }


}