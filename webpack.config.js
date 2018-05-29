let path = require("path");
let webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "./app/main.js"),
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015','stage-0']
                }
            }
        ],
    }

}

