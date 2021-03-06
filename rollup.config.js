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
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

import { splitBundlesRollupConfig } from './rollup-code-split.config';

const oneBundleRollupConfig = [
  {
    input: 'src/index.ts',
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
        // delete folders in dist root and assets folder only
        targets: ['dist/*.*', 'dist/assets'],
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
        // writeDefinitions: true,
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
  },
  {
    input: './dts/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

/* eslint-disable-next-line import/no-default-export */
export default [...oneBundleRollupConfig, ...splitBundlesRollupConfig];
