module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/public/assets/',
        publicPath: '/public/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}