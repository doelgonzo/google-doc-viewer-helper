import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/gdoc-viewer-helper.js',
  output: {
    file: 'dist/gdoc-viewer-helper.min.js',
    format: 'cjs',
    name: 'gdocViewerHelper',
    sourceMap: 'inline',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
    uglify(),
  ],
};
