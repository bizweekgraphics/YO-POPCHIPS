# Yo! POPCHIPS

A yeoman generator that scaffolds out a front-end webapp

![Popcorners](http://www.popcorners.com/images/content/flavors/popcorners-kettle.png)

#Features
* Gulp 
* Browserify
* Scss
* Bower
* Lints yo scripts
* Bootstrap for Sass (optional)
* Fontawesome icons (optional)
* jQuery (optional)

#Getting Started
* Install: ```npm install -g generator-popchips```
* Run: ```yo popchips```
* Run ```gulp``` to build and run preview server
* Uncomment ```.pipe((gStreamify(uglify())))``` in gulp/tasks/browserify.js and run ```gulp``` to minify scripts

#Things I haven't really created an elegant solution for and might be hard to guess
* Must install all vendor dependencies to package.json
* You can install deps via bower but they will not be included in the browserify vendor bundle
* If you're not using AMD modules or Bower modules in yo project, you can comment out debowerify and deamdify lines in the browserify and vendor gulp task to get easier debugging

