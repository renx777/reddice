import path from 'path';
import webpack from 'webpack';

export default{
    devtool:'eval-source-map',
    
    entry: [
        'webpack-hot-middleware/client?reload=true',
       
        path.join(__dirname,'/client/index.js')
    ],
    output:{
        filename:'bundle.js',
        path:'/',
        publicPath:'/'
    },

    plugins:[
       
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    
    module:{
        loaders:[
            {
                test: /\.js$/,
               
                include: [ 
                    path.join(__dirname,'client'),
                    path.join(__dirname,'server/shared')
                ],
                
                loaders:['babel-loader'],
                
                
            }
        ]
    },
    resolve:{
        extensions:['.js']
    }
   
    
}