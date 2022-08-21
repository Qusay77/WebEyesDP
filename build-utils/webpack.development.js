/* eslint-disable */
const path = require('path');
module.exports = () => ({
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'development.js',
  },
});
