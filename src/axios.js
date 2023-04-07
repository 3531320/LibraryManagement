import axios from "axios";
import { ElMessage } from "element-plus";

axios.defaults.headers['Content-type'] = "application/x-www-form-urlencoded;charset=UTF-8";

//创建axios实例
const service = axios.create({
  baseURL:"/",//请求配置中有baseURL选项,表示请求URL公共部分
  timeout:10000,//请求超时时间
});
//  request拦截器
service.interceptors.request.use(config=>{
  const isToken = (config.headers || {} ).isToken = false;//是否需要设置token
  config.headers["token"] = sessionStorage.getItem("token") //放每个请求携带自定义token 请根据实际情况自行修改
  if(config.method ==="get" && config.data){
    let url = config.url +"?";
    for(const propName of Object.keys(config.data)){
      const value = config.data[propName];
      var part = encodeURIComponent(propName) +"=";
      if(value !== null && typeof(value) !=="undefined"){
        if(typeof value ==="object"){
          for(const key of Object.keys(value)){
            let params = propName +"["+key +"]";
            var subPart = encodeURIComponent(params) + "=";
            url += subPart+encodeURIComponent(value[key]) + "&"
          }
        }else{
          url +=part+encodeURIComponent(value) + "&"
        }
      }
    }
    url = url.slice(0,-1);
    config.data = {};
    config.url = url;
    console.log(config.url);
  }
  return config

},error=>{
  console.log(error);
  Promise.reject(error)
})
//response 相应拦截器

service.interceptors.response.use(res=>{
  return res.data
},error=>{
  console.log(error);
  let {message} = error;
  if(message =="Network Error"){
    message = "后端接口连接异常";
  }else if (message.includes("timeout")) {
    message = "系统接口请求超时";
  } else if (message.includes("Request failed with status code")) {
    message = "系统接口" + message.substr(message.length - 3) + "异常";
  }
  ElMessage({
    message:message,
    type:"error",
    duration:5*1000
  })

})

export default service 