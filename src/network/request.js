import axios from 'axios'

export function request(config) {

    // 创建axios实例

    /*
    instance函数代表了基于http://152.136.185.210:8000/api/z8数据请求的数据接口
    */
    const instance = axios.create({
        baseURL: "http://152.136.185.210:8000/api/w6",
        timeout: 5000
    })

    // axios的拦截器

    // 请求拦截器(作用于，请求中可添加loding效果)
    instance.interceptors.request.use((config) => {
        return config
    }, (err) => {

    })

    // 响应拦截(作用于，直接进入数据的data)
    instance.interceptors.response.use((res) => {

        return res.data;
    }, (err) => {

    })

    // 发送真正的网络请求(使用request.js的request方法请求，则会通过以上的步骤！)
    return instance(config);

}


export function request1(config) {

    // 创建axios实例

    /*
    instance函数代表了基于http://152.136.185.210:8000/api/z8数据请求的数据接口
    */
    const instance = axios.create({
        baseURL: "https://www.fastmock.site/mock/35421df31c1f3eb429869d0f5537eea7/ht1",
        timeout: 5000
    })

    // axios的拦截器

    // 请求拦截器(作用于，请求中可添加loding效果)
    instance.interceptors.request.use((config) => {
        return config
    }, (err) => {

    })

    // 响应拦截(作用于，直接进入数据的data)
    instance.interceptors.response.use((res) => {

        return res.data;
    }, (err) => {

    })

    // 发送真正的网络请求(使用request.js的request方法请求，则会通过以上的步骤！)
    return instance(config);

}