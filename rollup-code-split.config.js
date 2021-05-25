import fs from 'fs';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss-modules';
import pkg from './package.json';

/** IMPORTANT: this config relies on the dts folder to have been created
 * and populated with d.ts files. */

const gelCategories = [
  'components',
  'compositions',
  'constants',
  'contexts',
  'customHooks',
  'utils',
];

const generateRollupInputs = () => {
  const rollupBundlingInput = {};
  const rollupTypeDefinitionInput = {};

  gelCategories.forEach(gelCategory => {
    const isEntryADirectory = entry =>
      fs.statSync(`./src/${gelCategory}/${entry}`).isDirectory();

    fs.readdirSync(`./src/${gelCategory}`)
      .filter(isEntryADirectory)
      .forEach(folder => {
        const entry = `${gelCategory}/${folder}`;

        rollupBundlingInput[`${entry}/index`] = `./src/${entry}/index.ts`;
        rollupTypeDefinitionInput[
          `${entry}/index`
        ] = `./dts/${entry}/index.d.ts`;
      });
  });

  return { rollupBundlingInput, rollupTypeDefinitionInput };
};

const {
  rollupBundlingInput,
  rollupTypeDefinitionInput,
} = generateRollupInputs();

export const splitBundlesRollupConfig = [
  {
    input: rollupBundlingInput,
    output: {
      dir: `dist`,
      chunkFileNames: 'sharedChunks/[name].js',
      format: 'cjs',
    },
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
      del({
        targets: [
          ...gelCategories.map(category => `dist/${category}`),
          'dist/sharedChunks',
        ],
        verbose: false,
      }),
      postcss({
        modules: {
          sourceMap: true,
          minimize: true,
        },
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      typescript(),
      commonjs(),
      nodeResolve(),
      terser(),
    ],
  },
  {
    input: rollupTypeDefinitionInput,
    output: {
      dir: 'dist',
      chunkFileNames: 'sharedChunks/[name].ts',
    },
    plugins: [dts()],
  },
];
