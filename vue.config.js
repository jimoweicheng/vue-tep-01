const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const Components = require('unplugin-vue-components/webpack');
const AutoImport = require('unplugin-auto-import/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        '@':  path.resolve(__dirname, 'src/'),
        'components':  path.resolve(__dirname, 'src/components'),
        'view':  path.resolve(__dirname, 'src/view'),
      }
    },
    plugins:[
      Components({
        // relative paths to the directory to search for components.
        dirs: ['src/components'],
        // valid file extensions for components.
        extensions: ['vue'],
        // search for subdirectories
        deep: true,
        dts: true,
        resolvers:[
          ElementPlusResolver()
        ]
      }),
      AutoImport({
         include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        imports:[
          'vue',
          'vue-router'
        ],
        dts: './auto-imports.d.ts',
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
