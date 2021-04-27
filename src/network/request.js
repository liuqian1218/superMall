import axios from 'axios'

export function request(config){
    const instance1 = axios.create({
        baseURL:"http://123.207.32.32:8000",
        timeout:5000
    });
    //axios拦截器
    //拦截请求
    instance1.interceptors.request.use(config => {
        //请求成功,config即配置
        // console.log(config);
        return config;
    },err => {
        //请求失败
        console.log(err);
    })
    //拦截响应
    instance1.interceptors.response.use(res => {
        // console.log(res);
        return res.data;
    },err => {
        console.log(err);
    })
    return instance1(config);
}