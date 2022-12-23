/* module.exports = function override(config, env) {
  console.log("React app rewired works!")
  config.resolve.fallback = {
    fs: false,
    path: false
  };
  return config;
}; */
//const path = require('path');
module.exports = {
  webpack: {
      configure: (webpackConfig, { env, paths }) => {
          // eslint-disable-next-line no-param-reassign
          webpackConfig.resolve.fallback = {
              fs: false,
              path: false
          };
          return webpackConfig;
      },
  },
}