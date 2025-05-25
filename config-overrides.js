const path = require('path');

module.exports = function override(config, env) {
  // Add any custom configurations here
  // Add src/ alias
  config.resolve.alias = {
    ...config.resolve.alias,
    'src': path.resolve(__dirname, 'src')
  };
  
  return config;
} 