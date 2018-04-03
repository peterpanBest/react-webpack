module.exports = {
    plugins: [
        require('autoprefixer')({
            broswers: ['>1%', 'last 5 versions', 'Firefox ESR', 'not ie < 9']
        }),
        require('postcss-px2rem')({
            remUnit: 75
        })
    ]
}