var StyleLintPlugin = require('stylelint-webpack-plugin');

const config = {
  entry: {
    app: ['./src/index.js']
  },

  output: {
    filename: 'bundle.js',
    path: './src/static'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        <% if (includeReact) {  %>
          loaders: ['babel?presets[]=es2015&presets[]=react', 'eslint-loader'],
        <% } else { %>
          loaders: ['babel?presets[]=es2015', 'eslint-loader'],  
        <% } %>
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },

  plugins: [
    new StyleLintPlugin()
  ],

  devServer: {
    inline: true,
    contentBase: "./src/static"
  }
}

module.exports = config