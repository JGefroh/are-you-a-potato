Are You A Potato?
===


### Creating a Build
This project uses the [Grunt](http://gruntjs.com/) Javascript Task Runner to handle the build process.  
See Grunt's [Getting Started](http://gruntjs.com/getting-started) page for instructions on installing Grunt if you do not already have it.

**The build process consists of the following steps:**  
1. Concatenate all of the application's Javascript files into a single Javascript file.  
2. Uglify/Minify the concatenated file.  
3. Move the project files into a separate, production-ready directory (production builds only).

**To create a development build:**  
1. Navigate to the directory with the project's `.gruntfile`.  
2. Execute the command `grunt dev`, or simply `grunt`, to create a development build.

**To create a production build**  
1. Navigate to the directory with the project's `.gruntfile`.  
2. Execute the command `grunt prod` to create a production build.  
3. Move the contents of the `prod_dist` directory to the target server.