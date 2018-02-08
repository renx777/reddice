video 1:

issues i ran into
--> making existing folder into git repo 
    -->first you need to make git repo on website and get the url

    git init
    git add .
    git commit -m 'first commit'
    git remote add origin <repo url>
    git remote -v 

--> you will run into problem if you try to push or pull, to solve it you need to use following commands

    git pull origin master --allow-unrelated-histories
    git merge origin origin/master
    git push origin master

setting up react node project
 * intstall express
 
   * install path module - helps you use directory paths while sending files as response

 install babel-cli,babel-preset-es2015 - these are necessary modules for transpiling our code so that we can use new es2015 features like import etc

    create .babelrc file in root folder
        {
            "presets":["es2015"]
        }
    
    then in package.json set this command to use along with node-mon

    "server": "nodemon --watch server --exec babel-node -- server/index.js"

    you can run your project now by using command
    npm run server

video 2

main issue i ran into here is configuring webpack 
    for webpack to work you need to mention in config file
        - entry:  from where App is being rendered i.e index file
        - output: path can be anything but you need to mention filename you serving up as script in index.html
            output:{
                filename:'bundle.js',
                path:'/'
            }
        -module: here you need to mention loaders for handling react files and js files so that webpack knows how to handle them and which files to include or exclude
        -resolve: gotta mention file extension here
        

webpack bundling

    add scrit src="bundle.js" in root folder

webpack bundles all client thing in one bundle js file and server it

import path from 'path';

export default{
    devtools:'eval-source-map',
    // take files form this
    entry: path.join(__dirname,'/client/index.js'),
    // webpack doesnt know how to handle js files,for that you need to setup loaders which hanlde js files
    module:{
        loader:[
            {
                test: /\.js$/,
                // include js files only from client folder
                include: path.join(__dirname,'client'),
                // babel transpiles es6
                loaders:['babel'] // need to mention babel-loader instead babel in new version of webpack
            }
        ]
    },
    resolve:{ 
        extensions:['','.js']  // remove empty string it is not included
    },
    // no need to mention thing in output
    output:{
        path:'/'
    }
}

Video 4 react router and basic navigation

react-router is node module which lets you implement routing actions in react app
    -there are two versions v3 and v4,latter being the latest version,each with slight different implementation,so be careful when using them
    -to use it you need to wrap your components in Router component and also history={browserHistory} prop and mention where you define routes 
        - you can either mention routes right in Router or create separate file
    -if using separate file you need to wrap your components in Route component and pass IndexRoute 
        - index route is default component which will be shown 
    -   -then after that use 
        <Route path="pathName" component={component you want to render} />
        - since you are passing routes and components as props, you need to mention them as {this.props.children} in base component i.e <App />
    - to link up to components when a button or element is clicked,you need to link it up to route
        - for e.g bar navbar links like home,you would do
         <Link to="pathName" className="navbar-brand">Red Dice</Link>

Video 5 User sing up form and manage its state

I did not expeirence much problem here but one thing to note was how state was being updated with single handle change function
    
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value;
        })
    }

    -> Above funciton will handle change to as many components as specified

    <div className="form-group">
            <label className="control-label">Username</label>
            <input value={this.state.username} onChange={this.handleChange} type="text" name="username" className="form-control" />
    </div>

    -> another cool module which we are using it here are lodash which is node moudle which helps handling of array,objects easier
        as from official website
        Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
        ->Lodash’s modular methods are great for:
            -Iterating arrays, objects, & strings
            -Manipulating & testing values
            -Creating composite functions

       
