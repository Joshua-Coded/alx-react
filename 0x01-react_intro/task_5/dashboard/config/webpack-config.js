const path = require('path');

module.exports =  {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devServer: {
        hot: true,
        contentBase: path.resolve('./dist'),
        compress: true,
        port: 8564
    },

    performance: {
        maxAssertSize: 1000000,
        maxEntrypointsSize: 1000000,
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                
                    "file-loader",
                        {
                            loader: "image-webpack-loader",
                            options: {
                                byPassOnDebug: true,
                                disable: true,
                            }
                        }
]

            }
    ]
    }
}