import typescript from '@rollup/plugin-typescript'
import copy from 'rollup-plugin-copy'
import html from '@rollup/plugin-html'
import postcss from 'rollup-plugin-postcss'
import serve from 'rollup-plugin-serve'
import resolve from '@rollup/plugin-node-resolve'

export default {
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'es',
    },
    plugins: [
        typescript({
        }),
        resolve(),
        postcss({
        }),
        html({
            title: 'to leto bolo niečím iné'
        }),
        serve(
            'dist'
        )
    ]
  }