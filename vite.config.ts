import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        // "components": path.resolve(__dirname, "src/components"),
        // "styles": path.resolve(__dirname, "src/styles"),
        // "plugins": path.resolve(__dirname, "src/plugins"),
        // "views": path.resolve(__dirname, "src/views"),
        // "layouts": path.resolve(__dirname, "src/layouts"),
        // "utils": path.resolve(__dirname, "src/utils"),
        // "apis": path.resolve(__dirname, "src/apis"),
        // "dirs": path.resolve(__dirname, "src/directives"),
      },
      extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    css:{
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      },
    },
    //强制预构建插件包
    optimizeDeps: {
      include: ['axios'],
    },
    // 打包配置
    build: {
      target: "es2020", //指定es版本,浏览器的兼容性
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets', // 指定生成静态资源的存放路径
      cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
      sourcemap: false, //是否构建source map 文件
      minify: 'terser', // 混淆器，terser构建后文件体积更小
      terserOptions: {
        // 生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    //项目部署的基础路径
    base: "/",
    server: {
      // host: "0.0.0.0", // 指定服务器主机名
      // port: 3333, // 指定服务端口号
      // strictPort: true,//设为 true 时若端口已被占用则会直接退出
      // cors: true, // 默认启用并允许任何源
      // open: true, // 在服务器启动时自动在浏览器中打开应用程序
      // https: false,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_BASE_URL,
          changeOrigin: true,
          // configure: (proxy, options) => {
          //   // proxy 是 'http-proxy' 的实例
          //   console.log(proxy, options)
          // },
          rewrite: path => path.replace(/^\/api/, '')
        },
        // '/lc': {
        //   target: 'http://localhost:8181/',
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/lc/, '')
        // },
      },
    },
  }
})
