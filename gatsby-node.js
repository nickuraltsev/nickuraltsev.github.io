import path from 'path';

exports.modifyWebpackConfig = function(config, stage) {
  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader',
  })

  const nodeModulesPath = path.join(__dirname, 'node_modules');
  config.merge({
    sassLoader: {
      precision: 8,
      includePaths: [
        path.join(nodeModulesPath, 'bootstrap-sass/assets/stylesheets'),
        path.join(nodeModulesPath, 'bootswatch'),
        // path.join(nodeModulesPath, 'font-awesome/scss'),
      ],
    },
  });
  return config;
};
