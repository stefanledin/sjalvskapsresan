const path = require('path');

module.exports = {
    entry: './assets/js/src/app.js',
    output: {
        publicPath: '/app/themes/sjalvskapsresan/assets/js/dist/',
        path: path.resolve(__dirname, 'assets/js/dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    }
}