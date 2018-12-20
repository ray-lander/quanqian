<template>
	<div class="moments">
		<!-- <div class="check_this">
			<input type="checkbox">
		</div> -->
		<!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
		<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="pswp__bg"></div>
			<div class="pswp__scroll-wrap">
				<div class="pswp__container">
					<div class="pswp__item"></div>
					<div class="pswp__item"></div>
					<div class="pswp__item"></div>
				</div>
				<!-- 预览区域顶部的默认UI，可以修改 -->
				<div class="pswp__ui pswp__ui--hidden">
					<div class="pswp__top-bar">
						<!--  与图片相关的操作 -->
						<div class="pswp__counter"></div>
						<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
						<!--将分享按钮去掉 -->
						<!--<button class="pswp__button pswp__button--share" title="Share"></button>-->
						<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
						<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
						<div class="pswp__preloader">
							<div class="pswp__preloader__icn">
								<div class="pswp__preloader__cut">
									<div class="pswp__preloader__donut"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
						<div class="pswp__share-tooltip"></div>
					</div>
					<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
					<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
					<div class="pswp__caption">
						<div class="pswp__caption__center"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="weui-cell moments__post">
			<div class="weui-cell__hd">
				<img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg">
			</div>
			<div class="weui-cell__bd">
				<!-- 人名链接 -->
				<a class="title">
					<span>夜华</span>
				</a>
				<!-- 时间 -->
				<p class="timestamp">{{ new Date() | date }}</p>
				<!-- post内容 -->
				<p id="paragraph" class="paragraph">点击下方图片预览，点击下方图片预览，点击下方图片预览</p>
				<!-- 伸张链接 -->
				<!-- <a id="paragraphExtender" class="paragraphExtender">显示全文</a> -->
				<!-- 相册 -->
				<div class="thumbnails my-gallery">
					<figure
						itemprop="associatedMedia"
						itemscope
						itemtype="http://schema.org/ImageObject"
						class="thumbnail"
					>
						<a
							href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
							itemprop="contentUrl"
							data-size="400x400"
						>
							<img
								src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
								itemprop="thumbnail"
								alt="Image description"
							>
						</a>
						<figcaption itemprop="caption description">Image 01</figcaption>
					</figure>

					<figure
						itemprop="associatedMedia"
						itemscope
						itemtype="http://schema.org/ImageObject"
						class="thumbnail"
					>
						<a
							href="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
							itemprop="contentUrl"
							data-size="400x400"
						>
							<img
								src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg"
								itemprop="thumbnail"
								alt="Image description"
							>
						</a>
						<figcaption itemprop="caption description">Image 02</figcaption>
					</figure>
				</div>
				<!-- 资料条 -->
				<div class="toolbar">
					<transition name="slide-fade">
						<div id="actionMenu" class="actionMenu slideIn" v-if="actionBtn">
							<span class="actionBtn" id="love_btn">
								<i class="iconfont icon-aixin"></i>赞
							</span>
							<span class="actionBtn" id="comment_btn">
								<i class="iconfont icon-xiaoxi"></i>评论
							</span>
							<router-link tag="span" to="/index/release/releasenew" class="actionBtn" id="share_btn">
								<i class="iconfont icon-zhuanfa"></i>转发
							</router-link>
							<span class="actionBtn" id="sava_btn">
								<i class="iconfont icon-shoucang1"></i>收录
							</span>
						</div>
					</transition>
					<span
						id="actionToggle"
						class="actionToggle iconfont icon-xiaoxi"
						@click="actionBtn=!actionBtn"
					></span>
				</div>
				<!-- 赞／评论区 -->
				<div class="user_con">
					<p class="liketext">
						<i class="iconfont icon-aixin"></i>
						<span class="nickname">哦哦</span>,
						<span class="nickname">haha</span>
					</p>
					<div class="comment_list">
						<p>
							<span>哈哈：</span>
							<span>赞一下</span>
						</p>
						<p>
							<span>哦哦：</span>
							<span>不赞不是中国人</span>
						</p>
					</div>
				</div>
			</div>
			<!-- 结束 post -->
		</div>
	</div>
</template>
<script>
	import PhotoSwipe from "photoswipe";
	import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
	import "photoswipe/dist/photoswipe.css";
	import "photoswipe/dist/default-skin/default-skin.css";
	export default {
		data() {
			return {
				actionBtn: false
			};
		},
		methods: {
			initPhotoSwipeFromDOM(gallerySelector) {
				var parseThumbnailElements = function(el) {
					// console.log(el)
					//获取相册的子节点
					var thumbElements = el.childNodes,
						// 相册子节点的长度
						numNodes = thumbElements.length,
						items = [],
						figureEl,
						linkEl,
						size,
						item;
					// console.log(thumbElements)
					// console.log(numNodes)
					// 遍历相册
					for (var i = 0; i < numNodes; i++) {
						figureEl = thumbElements[i];
						if (figureEl.nodeType !== 1) {
							continue;
						}
						linkEl = figureEl.children[0];
						size = linkEl.getAttribute("data-size").split("x");
						item = {
							src: linkEl.getAttribute("href"),
							w: parseInt(size[0], 10),
							h: parseInt(size[1], 10)
						};
						if (figureEl.children.length > 1) {
							item.title = figureEl.children[1].innerHTML;
						}
						if (linkEl.children.length > 0) {
							item.msrc = linkEl.children[0].getAttribute("src");
						}
						item.el = figureEl;
						items.push(item);
					}
					return items;
				};
				var closest = function closest(el, fn) {
					return el && (fn(el) ? el : closest(el.parentNode, fn));
				};
				var onThumbnailsClick = function(e) {
					e = e || window.event;
					e.preventDefault ? e.preventDefault() : (e.returnValue = false);
					var eTarget = e.target || e.srcElement;
					var clickedListItem = closest(eTarget, function(el) {
						return el.tagName && el.tagName.toUpperCase() === "FIGURE";
					});
					if (!clickedListItem) {
						return;
					}
					var clickedGallery = clickedListItem.parentNode,
						childNodes = clickedListItem.parentNode.childNodes,
						numChildNodes = childNodes.length,
						nodeIndex = 0,
						index;
					for (var i = 0; i < numChildNodes; i++) {
						if (childNodes[i].nodeType !== 1) {
							continue;
						}
						if (childNodes[i] === clickedListItem) {
							index = nodeIndex;
							break;
						}
						nodeIndex++;
					}
					if (index >= 0) {
						openPhotoSwipe(index, clickedGallery);
					}
					return false;
				};
				var photoswipeParseHash = function() {
					var hash = window.location.hash.substring(1),
						params = {};
					if (hash.length < 5) {
						return params;
					}
					var vars = hash.split("&");
					for (var i = 0; i < vars.length; i++) {
						if (!vars[i]) {
							continue;
						}
						var pair = vars[i].split("=");
						if (pair.length < 2) {
							continue;
						}
						params[pair[0]] = pair[1];
					}
					if (params.gid) {
						params.gid = parseInt(params.gid, 10);
					}
					return params;
				};
				var openPhotoSwipe = function(
					index,
					galleryElement,
					disableAnimation,
					fromURL
				) {
					var pswpElement = document.querySelectorAll(".pswp")[0],
						gallery,
						options,
						items;
					items = parseThumbnailElements(galleryElement);
					options = {
						history: false,
						galleryUID: galleryElement.getAttribute("data-pswp-uid"),
						getThumbBoundsFn: function(index) {
							var thumbnail = items[index].el.getElementsByTagName("img")[0],
								pageYScroll =
									window.pageYOffset || document.documentElement.scrollTop,
								rect = thumbnail.getBoundingClientRect();
							return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
						}
					};
					if (fromURL) {
						if (options.galleryPIDs) {
							for (var j = 0; j < items.length; j++) {
								if (items[j].pid == index) {
									options.index = j;
									break;
								}
							}
						} else {
							options.index = parseInt(index, 10) - 1;
						}
					} else {
						options.index = parseInt(index, 10);
					}
					if (isNaN(options.index)) {
						return "";
					}
					if (disableAnimation) {
						options.showAnimationDuration = 0;
					}
					gallery = new PhotoSwipe(
						pswpElement,
						PhotoSwipeUI_Default,
						items,
						options
					);
					gallery.init();
				};
				var galleryElements = document.querySelectorAll(gallerySelector);
				for (var i = 0, l = galleryElements.length; i < l; i++) {
					galleryElements[i].setAttribute("data-pswp-uid", i + 1);
					galleryElements[i].onclick = onThumbnailsClick;
				}
				var hashData = photoswipeParseHash();
				if (hashData.pid && hashData.gid) {
					openPhotoSwipe(
						hashData.pid,
						galleryElements[hashData.gid - 1],
						true,
						true
					);
				}
			}
		},
		mounted() {
			this.initPhotoSwipeFromDOM(".my-gallery");
		}
	};
</script>
<style lang="less" scoped>
	// .check_this {
	// 	position: relative;
	// 	input {
	// 		position: absolute;
	// 		top: 22px;
	// 		left: 5px;
	// 		z-index: 2;
	// 		width: 20px;
	// 		height: 20px;
	// 	}
	// }
	.moments {
		position: relative;
	}
	.moments .drag-reflash {
		position: absolute;
		left: 20px;
		top: -40px;
		z-index: 2;
		width: 30px;
		height: 30px;
		/* background: url(../../assets/images/find-album-reflash-icon.png) no-repeat 0 0; */
		background-size: contain;
	}

	.moments .home-content {
		padding-top: 45px;
		min-height: 500px;
	}

	.moments .moments__post {
		background: #fff;
		display: block;
		border-bottom: 1px solid #f2eeee;
		// padding-left: 30px;
	}

	.moments .moments__post::before {
		content: none;
	}

	.moments .moments__post .weui-cell__hd {
		display: table-cell;
		vertical-align: top;
		min-width: 45px;
	}

	.moments .moments__post .weui-cell__hd img {
		width: 45px !important;
	}

	.moments .moments__post .weui-cell__bd {
		font-size: 15px;
		display: table-cell;
		padding-left: 10px;
	}

	.moments .moments__post .weui-cell__bd .paragraphExtender {
		margin: 5px auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
	}

	.moments .moments__post .title {
		color: #094dcc;
	}

	.moments .moments__post .thumbnails {
		width: 100%;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}

	.moments .moments__post .thumbnails .thumbnail {
		width: 80px;
		height: 80px;
		margin: 3px;
		margin-left: 0px;
		background: #757575;
		overflow: hidden;
	}

	.moments .moments__post .thumbnails .thumbnail img {
		width: 100%;
		height: 100%;
	}

	.moments .moments__post .toolbar {
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		height: 28px;
	}

	.moments .moments__post .timestamp {
		color: #757575;
		height: 30px;
		line-height: 30px;
		font-size: 15px;
	}

	.moments .moments__post .actionMenu {
		position: absolute;
		height: 30px;
		width: 200px;
		background-color: #f3f3f5;
		border-radius: 5px;
		z-index: 5;
		top: 0px;
		right: 20px;
		// display: none;
		-webkit-justify-content: space-around;
		-ms-flex-pack: distribute;
		justify-content: space-around;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		border: 1px solid #ccc;
		line-height: 30px;
		span.actionBtn {
			margin-left: 3px;
		}
	}

	.moments .moments__post .actionToggle {
		width: 15px;
		height: 15px;
		// background: #92abd4;
		margin-left: auto;
		border-radius: 1px;
		position: absolute;
		right: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.moments .moments__post .liketext {
		margin-top: 5px;
		width: 100%;
		background-color: #f3f3f5;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	.comment_list {
		background-color: #f3f3f5;
	}
	.moments .moments__post .liketext .nickname {
		color: #094dcc;
		font-size: 13px;
	}
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
