<template>
	<div class="register_page">		
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">手机号码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" v-model="telNum" type="tel" pattern="[0-11]*" placeholder="注册手机号">
				</div>
			</div>

			<div class="weui-cell weui-cell_vcode">
				<div class="weui-cell__hd">
					<label class="weui-label">验证码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" v-model="checkCode" type="number" placeholder="请输入验证码">
				</div>
				<div class="weui-cell__ft">
					<button class="weui-vcode-btn" @click="this.SendSmsCode" :disabled="open">{{codeBtn}}</button>
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for class="weui-label">登录密码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" v-model="passWord" type="password" value placeholder="请输入新的密码">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for class="weui-label">确认密码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" type="password" v-model="confirmPass" value placeholder="请确认新的密码">
				</div>
			</div>
		</div>
    <div class="regiter_btn">
      <a href="javascript:;" class="weui-btn weui-btn_plain-primary" @click="this.confrimModify">确认修改</a>      
    </div>
	</div>
</template>
<script>
	import { ModifyPassword, SendSmsCode } from "../../common/post.js";

	export default {
    name: "Register",
    data(){
      return {
				pageName: '忘记密码',
				telNum: "",
				checkCode: "",
				passWord: "",
				confirmPass: "",
				codeBtn: "获取验证码",
				countTime: 60,
				disabled: false,
				open: false

      }
		},
		methods: {
			// 发送验证码
			SendSmsCode() {
				if (this.telNum == "") {
					this.$toast("请输入手机号码");
					return;
				} else if (!/^1[34578]\d{9}$/.test(this.telNum)) {
					this.$toast("手机号码格式不正确");
					return;
				}
				let param = {
					phone: this.telNum,
					type: "Register"
				};
				SendSmsCode(param).then(res => {
					if (res.data.code == 1) {
						this.$toast("验证码已发送");
						const timer = setInterval(() => {
							// console.log(this.countTime)
							if(this.disabled == true){
								return
							}
							this.countTime--;
							this.codeBtn = `${this.countTime}秒后再次发送...`;
							this.open = true
							if (this.countTime == 0) {
								clearInterval(timer);
								this.codeBtn = "再次发送";
								this.countTime = 60;
								this.open = false
							}
						}, 1000);
					}
				});
			},
			//确认修改
			confrimModify(){
				if (this.telNum == "") {
					this.$toast("请输入手机号码");
					return;
				} else if (!/^1[34578]\d{9}$/.test(this.telNum)) {
					this.$toast("手机号码格式不正确");
					return;
				} else if (this.checkCode == "") {
					this.$toast("请获取验证码");
					return;
				} else if (this.passWord == "") {
					this.$toast("请输入密码");
					return;
				} else if (this.confirmPass == "") {
					this.$toast("请确认密码密码");
					return;
				} else {
					let param = {
						confirmPassword: this.confirmPass,
						username: this.telNum,
						password: this.passWord,
						newPassword: this.confirmPass

					};
					ModifyPassword(param).then(res => {
						console.log(res);
						if(res.status == 200){
							if(res.data.msg = "success"){
								this.$toast("修改成功");
								this.$router.push("/index/login")
							}else {
								this.$toast("新密码不能与旧密码相同");

							}
						}
					});
				}
			}
		}
  };
</script>
<style scoped lang="less">
	
  .regiter_btn {
    padding: 0 3.125rem;
    margin-top: 3.75rem;
    p {
      text-align: center;
      margin-top: 1.25rem;
      span {
        border-bottom: 1px solid #666;
      }
    }
	}
		.weui-vcode-btn[disabled] {
		color: #666;
	}
</style>
