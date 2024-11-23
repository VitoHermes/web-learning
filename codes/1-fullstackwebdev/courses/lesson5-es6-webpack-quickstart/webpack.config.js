module.exports = function (env = 'development') {
  try {
    return require(`./conf/webpack.${env}.js`)
  } catch (error) {
    console.error(`无法加载 webpack.${env}.js 配置文件:`, error.message)
    process.exit(1)
  }
}