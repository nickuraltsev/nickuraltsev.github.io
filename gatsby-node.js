import path from 'path';

exports.modifyWebpackConfig = function(config, stage) {
  config.merge({
    sassLoader: {
      precision: 8,
      includePaths: [
        path.join(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets'),
      ],
    },
  });
  return config;
};
