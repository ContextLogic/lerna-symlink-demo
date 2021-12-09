/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const path = require('path');
const pkg = require('./package.json');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  externals: ['react', 'react-dom'],
  module: {
    rules: [
      // TS, TSX
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'ts-loader' },
      },
      // JS, JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      // PNG, JPG/JPEG, GIF
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      // SVG compression
      {
        test: /\.svg$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: (content) => svgToMiniDataURI(content.toString()),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    // Absolute import paths must be updated here
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      tests: path.resolve(__dirname, 'src/tests/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: {
      name: pkg.name,
      type: 'umd',
    },
  },
};
