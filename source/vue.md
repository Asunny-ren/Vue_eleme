# vue学习笔记

## vue-cli脚手架

    * 目录结构

    * 本地调试

    * 代码部署

    * 热加载

    * 单元测试

    ##### installation

    全局安装

    npm install -g vue-cli

    vue init webpack myProject

    cd myProject

    npm install

    npm run dev

**************************************** 版本更新 *******************************************

The package name changed from vue-cli to @vue/cli. If you have the previous vue-cli (1.x or 2.x) package installed globally, you need to uninstall it first with npm uninstall vue-cli -g or yarn global remove vue-cli.

``` dash
# npm uninstall -g vue-cli

# npm install -g @vue/cli

# 这里要求node version ^8.9

# vue -V
# vue -version

# You can rapidly prototype with just a single *.vue file with the vue serve and vue build commands, but they require an additional global addon to be installed first:

# npm install -g @vue/cli-service-global

# vue create hello-world

# 默认做一些pre-processors

# npm install -D stylus stylus-loader

// webpack.config.js -> module.rules
{
  test: /\.styl(us)?$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'stylus-loader'
  ]
}

# npm install -D postcss-loader

// webpack.config.js -> module.rules
{
  test: /\.css$/,
  use: [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    'postcss-loader'
  ]
}

# npm install -D babel-core babel-loader

// webpack.config.js -> module.rules
{
  test: /\.js?$/,
  loader: 'babel-loader'
}


# 进入ui配置界面

# vue ui

# 启动服务

# npm run serve

# 打包项目

# npm run build

```
