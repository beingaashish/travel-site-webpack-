const path = require('path');
const postcssPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('postcss-hexrgba'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        hot:true,
        port: 3000,
        before: function(app, server){
            server._watch('./app/**/*.html')
        },
        host: '0.0.0.0'
    },
    mode: 'development',
    watch: false,

    module: {
        rules: [{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postcssPlugins}}]
        }]
    }
}