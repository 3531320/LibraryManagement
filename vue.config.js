// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     proxy:"http://localhost:3001"
//     // open: true,
//     // overlay: {
//     //   warning: false,
//     //   errors: true,
//     // },
//     // proxy: {
//     //   '/API': {
//     //     target: "http://localhost:3001",
//     //     secure: false,
//     //     changeOrigin: true,
//     //     pathRewrite: {
//     //       "^/API": ""
//     //     }
//     //   }
//     // }
//   }
// })

module.exports = {
  // publicPath:"/",
  // outputDir:"dist",
  // assetsDir:"static",
  // productionSourceMap:false,
  lintOnSave:false,///关闭检查
  css:{extract:false} ,//免提取css文件，强制内联
  transpileDependencies:['element-ui'],
  chainWebpack(config){
    config.entry('main').add('babel-polyfill')//main是入口js文件
  },
  //跨域问题
  devServer:{
    open:true,
    host: 'localhost',
    port: 8080,
    // overlay:{
    //   warning:false,
    //   errors:true,
    // },
    proxy:{
      '/api':{
        target:'http://localhost:9090', //后台请求地址
        secure:false, 
        ws:true, //表示webSocket协议
        changeOrigin:true, //表示是否更改原域名 是否跨域
        pathRewrite:{
          //重写路径，当我们请求的地址喂：/api/……时，实际访问的地址是http://localhost:3001/……
          '^/api':''
        }
      }
    },
  
  }
}