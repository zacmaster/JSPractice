module.exports = {
    mode: 'development',
    entry: {
        app: './src/app/index.js'
    },
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
    
}