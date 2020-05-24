const path = require("path");
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

const alter_config = ()=>(config, env)=>{
    const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
    config.module.rules[oneOf_loc].oneOf=[    //例如要增加处理less的配置
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
                }
            ],
        },
        ...config.module.rules[oneOf_loc].oneOf
    ]
 
    return config;
}

module.exports = override(
    alter_config(),   //将自定义配置组合进来
    addWebpackAlias({  //增加路径别名的处理
        '@': path.resolve('./src')
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es',
        style: true
    })

);