/*eslint-disable*/
const path = require('path');

const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/',
    pages: {
        index: {
            entry: './src/example/index.ts',
            template: resolve('./template/index.html'),
        },
    },
    configureWebpack: {
        externals: {
            // jQuery: 'jQuery',
        },
        plugins: [
            new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        ],
    },
};
