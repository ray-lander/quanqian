import { post } from "./http";
// 接口

export const GetToken = p => post('/auth/getToken', p); // 登录获取token
export const CheckRegister = p => post('/frontUserInfo/checkRegister', p); // 手机号是否存在

