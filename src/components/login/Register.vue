<template>
	<div class="register_page">
		<div class="logo_wrap">
			<img class="middle-self" src="../../assets/crm-bc-logo.png" alt>
		</div>
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label class="weui-label">手机号码</label>
				</div>
				<div class="weui-cell__bd">
					<input
						class="weui-input"
						@blur="this.telNumEcho"
						v-model="telNum"
						type="tel"
						pattern="[0-11]*"
						placeholder="注册手机号"
					>
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
					<input class="weui-input" v-model="passWord" type="password" value placeholder="至少6位数字，区分大小写">
				</div>
			</div>
			<div class="weui-cell">
				<div class="weui-cell__hd">
					<label for class="weui-label">确认密码</label>
				</div>
				<div class="weui-cell__bd">
					<input class="weui-input" v-model="confirmPass" type="password" value placeholder="与登录密码保持一致">
				</div>
			</div>
		</div>
		<div class="regiter_btn">
			<a
				href="javascript:;"
				class="weui-btn weui-btn_plain-primary"
				type="submit"
				@click="this.userRegister"
			>注册</a>
			<p>
				<router-link tag="span" to="/index/login">使用已有账户登录</router-link>
			</p>
		</div>
	</div>
</template>
<script>
	import { CheckRegister, Register, SendSmsCode } from "../../common/post.js";
	// import { Toast } from 'mint-ui'
	export default {
		name: "Register",
		data() {
			return {
				pageName: "注册",
				telNum: "",
				checkCode: "",
				passWord: "",
				confirmPass: "",
				codeBtn: "获取验证码",
				countTime: 60,
				open: false
			};
		},
		methods: {
			//判断手机号
			telNumEcho() {
				if (this.telNum == "") {
					this.$toast("请输入手机号码");
					return;
				} else if (!/^1[34578]\d{9}$/.test(this.telNum)) {
					this.$toast("手机号码格式不正确");
					return;
				} else {
					CheckRegister(this.telNum).then(res => {
						// console.log(res.data.code);
						if (res.status == 200 && res.data.code !== 1) {
							this.$toast("该号码已被注册过");
						}
					});
				}
			},
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
					console.log(res);
					if (res.data.code == 1) {
						this.$toast("验证码已发送");
						//倒计时
						const timer = setInterval(() => {						
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
			//注册
			userRegister() {
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
						channel: "",
						confirmPassword: this.confirmPass,
						name: this.telNum,
						password: this.passWord,
						phone: this.telNum,
						smsCode: this.checkCode
					};
					Register(param).then(res => {
						console.log(res);
						if (res.status == 200) {
							if(res.data.msg == "success"){
								this.$toast("注册成功");
								this.$router.push("/index/profile/mainprofile")
							}
						}
					});
				}
			}
		},
		// components: {
		// 	Toast
		// }

	};
</script>
<style scoped lang="less">
	.logo_wrap {
		height: 8.125rem;
		width: 100%;
		position: relative;
		img {
			width: 7.5rem;
			// margin: 0 auto;
		}
	}
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
