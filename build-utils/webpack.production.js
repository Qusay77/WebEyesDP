const path = require('path');

module.exports = () => ({
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'prod'),
    filename: 'production.js',
  },
});
