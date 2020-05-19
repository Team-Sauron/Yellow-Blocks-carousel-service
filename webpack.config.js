const path = require('path');

module.exports = {
  mode: 'production',

  entry: './Client/components/carousel.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader?modules=true'],
        include: `${__dirname}/Client/styles/styles.css`,
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      }],
  },
  resolve: { extensions: ['.js', '.jsx', 'css'] },
};
