import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export default {
  mode: 'development', // 'production'으로 변경 가능
  entry: './src/main.tsx', // Vite에서는 main.jsx, index.jsx 같은 파일을 entry로 사용함
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@api': path.resolve(process.cwd(), 'src/axios'),
      '@assets': path.resolve(process.cwd(), 'src/assets'),
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@hooks': path.resolve(process.cwd(), 'src/hooks'),
      '@store': path.resolve(process.cwd(), 'src/store'),
      '@types': path.resolve(process.cwd(), 'src/types'),
      '@utils': path.resolve(process.cwd(), 'src/utils'),
      '@pages': path.resolve(process.cwd(), 'src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
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
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
