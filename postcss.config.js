
/*
postcss-px-to-viewport：
基本宽度已375规定
基本高度已667规定
保留转换之后尺寸的9位小数
以vw尺寸进行较衡
忽略1px（不转换只设置了1px的尺寸）
开启媒体查询的设置
*/

module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-px-to-viewport": {
            viewportWidth: 375,
            viewportHeight: 667,
            unitPrecision: 9,
            viewportUnit: 'vw',
            minPixelValue: 1,
            mediaQuery: true,
        }
    }
}