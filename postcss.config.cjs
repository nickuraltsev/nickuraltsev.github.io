module.exports = {
  syntax: require('postcss-html'),
  plugins: [
    require('autoprefixer')()
  ]
};
