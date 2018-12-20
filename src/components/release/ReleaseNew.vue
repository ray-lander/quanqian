<template>
	<div class="release_page">
		<div>选择发布朋友圈的微信账号，可多选</div>
		<div class="release_header clearfix">
			<div class="fl user_img">
				<input type="checkbox">
				<img  src="../../assets/img/666.jpg" alt>
				<p>西西妹</p>
			</div>
			<div class="fl user_img">
				<input type="checkbox">
				<img src="../../assets/img/222.jpg" alt>
				<p>抖抖</p>
			</div>
			<div class="fl user_img">
				<input type="checkbox">
				<img src="../../assets/img/111.jpg" alt>
				<p>啦啦</p>
			</div>
		</div>
		<div class="release_text">
			<textarea name id placeholder="这一刻的想法......"></textarea>
		</div>
		<!-- 上传图片 -->
		<div class="weui-gallery" id="gallery">
			<span class="weui-gallery__img" id="galleryImg"></span>
			<div class="weui-gallery__opr">
				<a href="javascript:" class="weui-gallery__del">
					<i class="weui-icon-delete weui-icon_gallery-delete"></i>
				</a>
			</div>
		</div>
		<div class="weui-cells weui-cells_form">
			<div class="weui-cell">
				<div class="weui-cell__bd">
					<div class="weui-uploader">
						<div class="weui-uploader__hd">
							<p class="weui-uploader__title">图片上传</p>
						</div>
						<div class="weui-uploader__bd">
							<ul class="weui-uploader__files" id="uploaderFiles"></ul>
							<div class="weui-uploader__input-box">
								<input
									id="uploaderInput"
									class="weui-uploader__input zjxfjs_file"
									type="file"
									accept="image/*"
									multiple
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 发布按钮 -->
		<div class="news_btn clearfix">
			<!-- 延时按钮 -->
			<a
				href="javascript:;"
				@click="this.changedelayFlag"
				class="weui-btn fl delay_send"
				:class="{'weui-btn_plain-primary':clickOn,'weui-btn_primary':clickOver}"
			>延时发送到朋友圈</a>
			<!-- 立即发送按钮 -->
			<a
				href="javascript:;"
				@click="this.changenowFlag"
				class="weui-btn fl now_send"
				:class="{'weui-btn_plain-primary':clickOver,'weui-btn_primary':clickOn}"
			>立即发送到朋友圈</a>
		</div>
		<!-- 选择延时发送盒子 -->
		<div v-show="delayFlag" class="weui-cells weui-cells_checkbox">
			<p class="check_row" @click="showCheck=!showCheck">
				<input type="checkbox" :checked="showCheck">
				<span>延时评论</span>
			</p>
			<div class="now_news" v-show="showCheck">
				<textarea name id placeholder="这一刻的想法......"></textarea>
				<p>朋友圈发送成功后15s发送评论</p>
			</div>
			<p class="check_row" @click="showChecktwo=!showChecktwo">
				<input type="checkbox" :checked="showChecktwo">
				<span>延时点赞</span>
			</p>
			<div class="delay_news" v-show="showChecktwo">
				<p>朋友圈发送成功后15s内点赞</p>
			</div>
		</div>
		<!-- 立即发送盒子 -->
		<div v-show="nowFlag" class="weui-cells now_send_box weui-cells_checkbox">
			<!-- 一 选择发送时间 -->
			<div class="send_time">
				<div class="now_tit">发送时间</div>
				<div class="time_row">
					<div class="now_tit" @click="this.userDefindFn">
						<input type="checkbox" :checked="userDefind" :disabled="reComment">
						<span :class="[reComment?'readonly':'']">自定义时间</span>
					</div>
					<div class="time_box" :class="[reComment?'readonly':'']" @click="openPicker">{{pickerValue | date}}</div>
				</div>
				
				<div class="time_row" >
					<div class="now_tit" @click="reCommentFn">
						<input type="checkbox" :checked="reComment" :disabled="userDefind">
						<span :class="[userDefind?'readonly':'']">推荐时间</span>
					</div>
					<div class="time_chioce clearfix">
						<input class="time_one" :class="[userDefind?'readonly':'']" type="text" value="07:00-08:30" readonly="readonly">
						<input class="time_two" :class="[userDefind?'readonly':'']" type="text" value="11:00-13:30" readonly="readonly">
						<input class="time_three" :class="[userDefind?'readonly':'']" type="text" value="17:00-19:30" readonly="readonly">
						<input class="time_four" :class="[userDefind?'readonly':'']" type="text" value="21:00-22:30" readonly="readonly">
					</div>
				</div>
			</div>
			<!-- 二 延时评论 -->
			<div class="delay_comment">
				<div class="now_tit" @click="this.delayCommentsFn">
					<input type="checkbox" :checked="delayComments" :disabled="userDefind">
					<span :class="[userDefind?'readonly':'']">延时评论</span>
				</div>
				<div class="now_news" v-show="delayComments">
					<textarea placeholder="这一刻的想法......"></textarea>
					<div class="now_tit" @click="randomDelay=!randomDelay">
						<input type="checkbox" :checked="randomDelay">
						<span :class="[!randomDelay?'readonly':'']">随机延时（朋友圈点赞的15s）</span>
					</div>
					<div class="now_tit" @click="randomDelay=!randomDelay">
						<input type="checkbox" :checked="!randomDelay">
						<span :class="[randomDelay?'readonly':'']">统一延时3s</span>
					</div>
				</div>
			</div>
			<!-- 三 延时点赞 -->
			<div class="delay_love">
				<div class="now_tit" @click="this.delayLikeFn">
					<input type="checkbox" :checked="delayLike" :disabled="userDefind">
					<span  :class="[userDefind?'readonly':'']">延时点赞</span>
				</div>
				<div class="now_news" v-show="delayLike">
					<div class="now_tit"  @click="randomLike=!randomLike">
						<input type="checkbox" :checked="randomLike">
						<span :class="[!randomLike?'readonly':'']">随机点赞（朋友圈点赞的15s）</span>
					</div>
					<div class="now_tit"  @click="randomLike=!randomLike">
						<input type="checkbox" :checked="!randomLike">
						<span :class="[randomLike?'readonly':'']">统一延时3s</span>
					</div>
				</div>
			</div>
		</div>

		<div class="sub_btn">
			<a href="javascript:;" class="weui-btn weui-btn_plain-primary">确认发送</a>
		</div>
		<mt-datetime-picker ref="picker" type="datetime" v-model="pickerValue"></mt-datetime-picker>
	</div>
</template>
<script>
	import $ from "jquery/dist/jquery.min";
	
	export default {
		name: "ReleaseNew",
		data() {
			return {
				delayFlag: true,
				nowFlag: false,
				clickOn: false,
				clickOver: true,
				showCheck: false,
				showChecktwo: false,
				pickerValue: null,
				delayComments: false,
				delayLike: false,
				// 自动勾选
				userDefind: true,
				reComment: false,
				randomDelay: true,
				randomLike: true,
			};
		},

		methods: {
			initUploader() {
				var tmpl =
						'<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
					$gallery = $("#gallery"),
					$galleryImg = $("#galleryImg"),
					$uploaderInput = $("#uploaderInput"),
					$uploaderFiles = $("#uploaderFiles");

				$uploaderInput.on("change", function(e) {
					var src,
						url = window.URL || window.webkitURL || window.mozURL,
						files = e.target.files;
					for (var i = 0, len = files.length; i < len; ++i) {
						var file = files[i];

						if (url) {
							src = url.createObjectURL(file);
						} else {
							src = e.target.result;
						}

						$uploaderFiles.append($(tmpl.replace("#url#", src)));
					}
				});
				var index; //第几张图片
				$uploaderFiles.on("click", "li", function() {
					index = $(this).index();
					$galleryImg.attr("style", this.getAttribute("style"));
					$gallery.fadeIn(100);
				});
				$gallery.on("click", function() {
					$gallery.fadeOut(100);
				});
				//删除图片
				$(".weui-gallery__del").click(function() {
					$uploaderFiles
						.find("li")
						.eq(index)
						.remove();
				});
			},
			changedelayFlag() {
				this.delayFlag = true;
				this.nowFlag = false;
				this.clickOn = false;
				this.clickOver = true;
			},
			changenowFlag() {
				this.nowFlag = true;
				this.delayFlag = false;
				this.clickOn = true;
				this.clickOver = false;
			},
			openPicker() {
				if(this.reComment){
					return
				}
				this.$refs.picker.open();
			},
			// 自定义时间
			userDefindFn(){
				if(this.reComment){
					return
				}
				this.userDefind = !this.userDefind
				if(this.userDefind == false){
					this.reComment = true
				}else {
					this.reComment = false
					this.delayComments = false
					this.delayLike = false
				}
			},
			// 推荐时间
			reCommentFn(){
				if(this.userDefind){
					return
				}
				this.reComment = !this.reComment
				if(this.reComment == false){
					this.userDefind = true
				}else {
					this.userDefind = false
				}
			},
			delayCommentsFn(){
				// console.log(this.userDefind)
				if(this.userDefind){
					return
				}
				this.delayComments = !this.delayComments
			},
			delayLikeFn(){
				if(this.userDefind){
					return
				}
				this.delayLike = !this.delayLike
			}

		},
		mounted() {
			this.initUploader();
		}
	};
</script>
<style scoped lang="less">
	.release_header {
		padding: 0.625rem 0.3125rem;
		border-bottom: 1px solid #ccc;
		.user_img {
			width: 5rem;
			height: 5rem;
			margin: 0 0.3125rem;
			position: relative;
			img {
				width: 3.75rem;
				height: 3.75rem;
				margin: 0 auto;
			}
			p {
				text-align: center;
			}
			input {
				width: 1.25rem;
				height: 1.25rem;
				position: absolute;
				opacity: 0.9;
				top: -0.0625rem;
				left: 0.5625rem;
			}
		}
	}
	.release_text {
		padding: 0.3125rem 0.625rem;
		textarea {
			width: 100%;
			border: 1px solid #ccc;
			height: 115px;
		}
	}
	.now_news {
		padding: 0.3125rem 0.625rem;
		textarea {
			width: 100%;
			border: 1px solid #ccc;
			height: 7.1875rem;
		}
	}

	.now_send_box {
		padding: 0.625rem;
		.now_news {
			padding: 0.3125rem 1.625rem;
		}
	}
	.now_tit {
		height: 30px;
		width: 100%;
		padding: 0 10px;
		line-height: 30px;
		box-sizing: border-box;
	}
	.time_row {
		width: 85%;
		margin: 0 auto;
		// &.read_only {
		// 	input {

		// 	}
		// }
	}
	.sub_btn {
		padding: 10px 60px;
		font-size: 15px;
	}
	.delay_news {
		padding: 0.3125rem 0.625rem;
	}
	.weui-cells {
		margin-top: 0;
		font-size: 16px;
	}

	.weui-cell {
		padding: 10px;
	}
	.news_btn {
		width: 100%;
		.weui-btn {
			width: 45%;
			font-size: 15px;
			margin-right: 8px;
			margin-left: 8px;
			margin-top: 0;
		}
	}
	.weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {
		content: "\EA06";
		color: #09bb07;
	}

	.weui-cells_checkbox .weui-icon-checked:before {
		content: "\EA01";
		color: #c9c9c9;
		font-size: 23px;
		display: block;
	}
	.check_row {
		padding: 0.3125rem 0.625rem;
	}
	.time_box {
		height: 26px;
		width: 77%;
		border: 1px solid #ccc;
		margin: 0 auto;
		border-radius: 3px;
		margin-top: 3px;
		margin-bottom: 3px;
	}
	.time_chioce {
		input {
			// display: block;
			// float: left;
			width: 45%;
			text-align: center;
			margin: 3px 5px;
			border: 1px solid #ccc;
			border-radius: 3px;
			padding: 3px 0;
		}
	}
	input.readonly,
	span.readonly,
	.time_box.readonly {
		color: #ccc;
	}
</style>