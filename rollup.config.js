import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    external: [
        'react',
        'prop-types',
        'jquery',
        'bootstrap',
        'popper.js',
    ],
    plugins: [
        babel({
            babelHelpers: 'runtime',
            exclude: '/node_modules/',
        }),
        terser(),
    ],
}
