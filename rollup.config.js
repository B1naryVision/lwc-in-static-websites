import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';

export default {
    input: 'lightning/main.js',
    output: {
        file: 'lwc.js',
        format: 'esm'
    },
    plugins: [
        lwc(),
        replace({ 'process.env.NODE_ENV': '"development"', preventAssignment: true })
    ]
};
