import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
    timeout:5000
  })
  //2.axios的拦截器
  //2.1.请求拦截
  instance.interceptors.request.use(aaa =>{
      // console.log(aaa)
      return aaa
      //1.比如aaa中的一些信息不符合服务器要求
      //2.每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3.某些网络请求，比如登录（token),是必须携带一些特殊信息，
    },
    err => {
      console.log(err);});
  //2.响应拦截
  instance.interceptors.response.use(res =>{
    console.log(res);
    return res
  },err =>{
    console.log(err);
  })
  return instance(config)
}
