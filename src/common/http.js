

/* eslint-disable no-console */
import axios from 'axios'
// import baseUrl from './setBaseUrl'
// 配置请求域名
axios.defaults.baseURL = 'http://172.16.0.119:8887';
// 超时时间
axios.defaults.timeout = 5000
// 设置Content-Type类型
axios.defaults.headers.post['Content-Type'] = "application/json; charset=UTF-8";
//http请求拦截器
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('YX-TOKEN');
    if(token){
        config.headers.common['YX-TOKEN'] = token;
    }
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
  })
  
export default class CourseAxios {
    constructor(options = {}) {
        this.options = options;
    }
    request(options) {
        return axios.request(options);
    }
    get(url, options = {}) {
        return this.request({
            url,
            params: {
                ...options
            }
        })
    }
    post(url, data, options = {}) {
        if (data instanceof Object) {
            data = JSON.stringify(data);
        }
        return this.request({
            method: 'post',
            url,
            data,
            ...options
        });
    }
}
const instanceAxios = new CourseAxios;
export const request = instanceAxios.request.bind(instanceAxios);
export const get = instanceAxios.get.bind(instanceAxios);
export const post = instanceAxios.post.bind(instanceAxios);
