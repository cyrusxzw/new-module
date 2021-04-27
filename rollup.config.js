import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy-assets';
import del from 'rollup-plugin-delete';
import json from '@rollup/plugin-json';
import path from 'path';
import postcss from 'rollup-plugin-postcss-modules';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

/* eslint-disable-next-line import/no-default-export */
export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      exports: 'named',
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    del({
      targets: 'dist/*',
      verbose: false,
    }),
    copy({
      assets: ['src/assets'],
    }),
    alias({
      entries: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
    }),
    postcss({
      modules: {
        sourceMap: true,
        minimize: true,
      },
      extract: 'styles.css',
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    typescript({
      exclude: ['./scripts/**'],
    }),
    json(),
    commonjs(),
    nodeResolve(),
    terser(),
  ],
};
