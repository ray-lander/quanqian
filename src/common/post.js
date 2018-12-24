import { post } from "./http";
// 接口
export const GetToken = p => post('/auth/getToken', p); // 登录获取token
export const CheckRegister = p => post('/frontUserInfo/checkRegister', p); // 手机号是否存在
export const ForgetPassword = p => post('/frontUserInfo/forgetPassword', p); // 忘记密码
export const ModifyPassword = p => post('/frontUserInfo/modifyPassword', p); // 修改密码
export const Register = p => post('/frontUserInfo/register', p); // 注册
export const SendSmsCode = p => post('/frontUserInfo/sendSmsCode', p); // 发送短信验证码
export const UserInfo = p => post('/frontUserInfo/userInfo', p); // 用户信息



