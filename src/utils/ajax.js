import axios from 'axios';

const ajax = axios.create({
  baseURL: 'https://m.ctrip.com/',
  headers: { },
});

ajax.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  console.log(config);  //eslint-disable-line
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use((response) => {
  // 对响应数据做点什么
  return response.data;
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default ajax;
