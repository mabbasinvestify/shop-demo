/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */

const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const WebpackJasmineHtmlRunnerPlugin = require( 'webpack-jasmine-html-runner-plugin' );

module.exports = ( env = {} ) =>
   env.browserSpec ?
      Object.assign( config( env ), {
         entry: WebpackJasmineHtmlRunnerPlugin.entry( './application/widgets/**/spec/*.spec.js' ),
         output: {
            path: resolve( 'spec-output' ),
            publicPath: '/spec-output/',
            filename: '[name].bundle.js'
         }
      } ) :
      config( env );

function config( env ) {
   const outputPath = env.production ? 'dist/' : 'build/';

   return {
      devtool: '#source-map',
      entry: { 'init': './init.js' },

      output: {
         path: path.resolve( __dirname, `./${outputPath}` ),
         publicPath: outputPath,
         filename: env.production ? '[name].bundle.min.js' : '[name].bundle.js',
         chunkFilename: env.production ? '[name].bundle.min.js' : '[name].bundle.js'
      },

      plugins:
         [ new ExtractTextPlugin( { filename: '[name].bundle.css' } ) ]
         .concat( env.production ? [] : [ new WebpackJasmineHtmlRunnerPlugin() ] ),

      resolve: {
         modules: [ resolveModules() ],
         extensions: [ '.js', '.vue' ],
         alias: {
            'default.theme': 'laxar-uikit/themes/default.theme',
            'cube.theme': 'laxar-cube.theme'
         }
      },

      module: {
         rules: [
            {
               test: /\.js$/,
               exclude: resolveModules(),
               loader: 'babel-loader'
            },
            {
               test: /\.vue$/,
               exclude: resolveModules(),
               loader: 'vue-loader'
            },
            {
               test: /.spec.js$/,
               exclude: resolveModules(),
               loader: 'laxar-mocks/spec-loader'
            },

            {  // load styles, images and fonts with the file-loader
               // (out-of-bundle in build/assets/)
               test: /\.(gif|jpe?g|png|ttf|woff2?|svg|eot|otf)(\?.*)?$/,
               loader: 'file-loader',
               options: {
                  name: env.production ? 'assets/[name]-[sha1:hash:8].[ext]' : 'assets/[name].[ext]'
               }
            },
            {  // ... after optimizing graphics with the image-loader ...
               test: /\.(gif|jpe?g|png|svg)$/,
               loader: 'img-loader?progressive=true'
            },
            {  // ... and resolving CSS url()s with the css loader
               // (extract-loader extracts the CSS string from the JS module returned by the css-loader)
               test: /\.(css|s[ac]ss)$/,
               loader: ExtractTextPlugin.extract( {
                  fallback: 'style-loader',
                  use: env.production ? 'css-loader' : 'css-loader?sourceMap',
                  publicPath: ''
               } )
            },
            {
               test: /[/]default[.]theme[/].*[.]s[ac]ss$/,
               loader: 'sass-loader',
               options: Object.assign(
                  {},
                  require( 'laxar-uikit/themes/default.theme/sass-options' ),
                  { sourceMap: true }
               )
            },
            {
               test: /[/](laxar-)?cube[.]theme[/].*[.]s[ac]ss$/,
               loader: 'sass-loader',
               options: Object.assign(
                  {},
                  require( 'laxar-cube.theme/sass-options' ),
                  { sourceMap: true }
               )
            }
         ]
      }
   };
}

function resolveModules() { return path.resolve( __dirname, 'node_modules' ); }
function resolve( p ) { return path.resolve( __dirname, p ); }
