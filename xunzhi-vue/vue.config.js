// module.exports = {
//   devServer: {
//     open: true,
//     host: 'localhost',
//     port: 8081,
//     https: false,
//     proxy: {
//       // 配置跨域
//       '/api': {
//         target: 'http://localhost:5001/api/',
//         ws: true,
//         changOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     }
//   }
// };

const path = require('path')
function resolve(dir) {
 return path.join(__dirname, '.', dir)
}
module.exports = {
  devServer: {
      open: true,
      port: 8888,     // 端口
  },
  outputDir: 'dist',
  lintOnSave: false,   // 取消 eslint 验证
  
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    //const svgRule = config.module.rule('svg')
    //svgRule.uses.clear()
    config.module
     .rule('svg-sprite-loader')
     .test(/\.svg$/)
     .include
     .add(resolve('src/icons')) //处理svg目录
     .end()
     .use('svg-sprite-loader')
     .loader('svg-sprite-loader')
     .options({
      symbolId: 'icon-[name]'
     })
   }
};

       