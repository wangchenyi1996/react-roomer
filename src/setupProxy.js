// //  用来配置代理
// const proxy = require('http-proxy-middleware')

// module.exports = function (app) {
//     app.use(
//         proxy(
//             '/api', {
//                 target: 'http://localhost:8888',
//                 changeOrigin: true,
//                 secure: false,
//                 pathRewrite: {
//                     '^/api': '',
//                 },
//                 ws: true, // 启用websocket
//             }
//         )
//     )
// }

const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本

module.exports = function (app) {
    app.use(createProxyMiddleware('/app',
        {
            target: 'http://yuhang.project.ibook.tech',
            pathRewrite: {
                '^/app': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};

