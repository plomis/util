
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import { version } from './package.json';

const banner = `/*!
 * plomis-util v${version}
 * (c) 2019-${new Date().getFullYear()} Plomis
 * Released under the MIT License.
 */
`;

const env = process.env.NODE_ENV;

const config = {
  input: 'src/index.js',
  output: {
    banner,
    format: 'umd',
    name: 'plomis-util',
    file: './dist/plomis-util.js',
    globals: {
      'react-dom': 'ReactDOM'
    }
  },
  external: [
    'react-dom'
  ],
  plugins: [
    nodeResolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify( env )
    })
  ]
};

if ( env === 'production' ) {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true/* ,
        warnings: false */
      }
    })
  );
}

export default config;