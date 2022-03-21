const path=require('path');
const src=path.join(process.cwd(),'src','electron');

module.exports={
    devtool: 'source-map',
    entry: path.join(src,'main.ts'),
    output: {
        path: path.join(process.cwd(),'dist','my-editor'),
        filename: 'shell.js'
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: path.join(src,'tsconfig.json')
                }
            }
        ]
    },
    target: 'electron-main'
};
