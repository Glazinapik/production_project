import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExstractPlugin from 'mini-css-extract-plugin';
import webpack, { DefinePlugin } from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    new MiniCssExstractPlugin({
      filename: 'scc/[name].[contenthash:8].scc',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    ...(isDev ? [new webpack.HotModuleReplacementPlugin()] : []),
    // ...(isDev ? [new ReactRefreshWebpackPlugin()] : []),
  ];
}
