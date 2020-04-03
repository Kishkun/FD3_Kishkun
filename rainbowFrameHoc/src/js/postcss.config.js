// npm install sass-loader node-sass --save-dev
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('css-mqpacker'),
        require('cssnano')({
            preset: [
                'default', {
                discardComments:{
                    removeAll: true
                }
                }
            ]
        })
    ]
};
