module.exports = {
    module: {
      rules: [
        {
            test: /\.pug$/,
            loader: 'pug-plain-loader'
        },
        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
}