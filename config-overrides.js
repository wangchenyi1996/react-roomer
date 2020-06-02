const path = require("path");
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

const alter_config = () => (config, env) => {
  const oneOf_loc = config.module.rules.findIndex(n => n.oneOf)
  config.module.rules[oneOf_loc].oneOf = [ //例如要增加处理less的配置
    // {
    //   test: /\.css$/,
    //   exclude: [/node_modules/,path.resolve(__dirname,'src/assets/fonts')],
    //   use: [
    //     require.resolve('style-loader'),
    //     {
    //       loader: require.resolve('css-loader'),
    //       options: {
    //         modules: {
    //           localIdentName:'[name]__[local]__[hash:base64:5]'
    //         },
    //       },
    //     },
    //     {
    //       loader: require.resolve('postcss-loader'),
    //       options: {
    //         ident: 'postcss',
    //         plugins: () => [
    //           require('postcss-flexbugs-fixes'),
    //           autoprefixer({
    //             browsers: [
    //               '>1%',
    //               'last 4 versions',
    //               'Firefox ESR',
    //               'not ie < 9', // React doesn't support IE8 anyway
    //             ],
    //             flexbox: 'no-2009',
    //           }),
    //         ],
    //       },
    //     },
    //   ],
    // },

    {
      test: /\.less$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'less-loader'
        }
      ],
    },
    {
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'sass-loader'
        },
        require.resolve('sass-loader'),
        {
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: './src/common/style.scss',
            // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          }
        }
      ],
    },
    {
      test: /\.(eot|woff2?|ttf|svg)$/,
      exclude: path.resolve(__dirname, "./src/icons"), //不处理指定svg的文件(所有使用的svg文件放到该文件夹下)
      use: [{
        loader: "url-loader",
        options: {
          name: "[name]-[hash:5].min.[ext]",
          limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
          outputPath: "font",
          publicPath: "font"
        }
      }]
    },
    {
      test: /\.svg$/,
      loader: "svg-sprite-loader",
      include: path.resolve(__dirname, "./src/icons"), //只处理指定svg的文件(所有使用的svg文件放到该文件夹下)
      options: {
        symbolId: "icon-[name]" //symbolId和use使用的名称对应      <use xlinkHref={"#icon-" + iconClass} />
      }
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]

  return config;
}

module.exports = override(
  alter_config(), //将自定义配置组合进来
  addWebpackAlias({ //增加路径别名的处理
    '@': path.resolve('./src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    // style: true
    style: 'css'
  })

);