<template>
	<div class="release_page">
		<div>选择发布朋友圈的微信账号，可多选</div>
		<div class="release_header clearfix">
			<div class="fl user_img">
				<input type="checkbox">
				<img src="../../assets/img/666.jpg" alt>
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
			<a
				href="javascript:;"
				@click="this.changedelayFlag"
				class="weui-btn fl weui-btn_plain-primary delay_send"
			>延时发送到朋友圈</a>
			<a
				href="javascript:;"
				@click="this.changenowFlag"
				class="weui-btn fl weui-btn_plain-primary now_send"
			>立即发送到朋友圈</a>
		</div>
		<!-- 选择延时发送 -->
		<div v-show="delayFlag" class="weui-cells weui-cells_checkbox">
			<p>
				<input type="checkbox">
				<span>延时评论</span>
			</p>
			<div class="now_news">
				<textarea name id placeholder="这一刻的想法......"></textarea>
				<p>朋友圈发送成功后15s发送评论</p>
			</div>
			<p>
				<input type="checkbox">
				<span>延时点赞</span>
			</p>
			<div class="delay_news">
				<p>朋友圈发送成功后15s内点赞</p>
			</div>
		</div>
		<!-- 选择立即发送 -->
		<div v-show="nowFlag" class="weui-cells weui-cells_checkbox">
			<div class="now_news">
				<textarea name id placeholder="这一刻的想法......"></textarea>
				<p>朋友圈发送成功后15s发送评论</p>
			</div>

			<div class="delay_news">
				<p>朋友圈发送成功后15s内点赞</p>
			</div>
		</div>

		<div class="sub_btn">
			<a href="javascript:;" class="weui-btn weui-btn_plain-primary">确认发送</a>
		</div>
	</div>
</template>
<script>
	import $ from "jquery/dist/jquery.min";

	export default {
		name: "ReleaseNew",
		data() {
			return {
				delayFlag: true,
				nowFlag: false
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
			},
			changenowFlag() {
				this.nowFlag = true;
				this.delayFlag = false;
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
				opacity: 0.8;
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
			height: 115px;
		}
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
</style>