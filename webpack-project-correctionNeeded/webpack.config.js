//node  programing

const path = require('path');

module.exports={
    entry:"./scr/index.ts",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'), //localhost:8040/dist/)
        publicPath:'dist'
    },
    devtool:'inline-source-map',
   
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    }
}