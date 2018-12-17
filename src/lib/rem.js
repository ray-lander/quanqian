
var initWidth = 375; //设计图的宽度
var initFontSize = 16; //初始的fontsize

var bili = initWidth / initFontSize;

var screenWidth = document.documentElement.offsetWidth; //当前屏幕的宽度
var fontSize = screenWidth / bili; //当前需要的fontSize

getSize();

window.addEventListener("resize", getSize);

function getSize() {
    screenWidth = document.documentElement.offsetWidth;
    if (screenWidth <= 320) { // 兼容的最小尺寸
        fontSize = 320 / bili;
    } else if (screenWidth >= 750) { // 兼容的最大尺寸
        fontSize = 750 / bili;
    } else {
        fontSize = screenWidth / bili;
    }
    document.documentElement.style.fontSize = fontSize + 'px';
}