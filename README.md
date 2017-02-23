# Angular Project

## Overview

### What is this app for?

This is a forum app. It allows users to make arbitrary posts and comment on posts.

### What does it do?

This app will allow users to register and log in. Once they are logged in they will be able to see a list of posts from other users and click on the post they would like to read in more detail. They can also create thier own posts and comment on any post they choose.

### How does it work?

This app uses firebase refrences and queries to set and retrieve information submitted by users, which is stored on firebase database under three headings: User, Post and Comment. This site uses the AgularJS framework, and bootstrap for styling.

## Features

### Existing Features
- User Based Features
	- Registration
	- Log in
	- Log out
- Forum Based Features
	- Create a post
	- Make a comment on an existing post

## Tech Used

### Some Tech Used Includes:
- [AngularJS](https://angularjs.org/)
    - **AngularJS** ui-router to handle page routing, it is also used to build custom services and directives
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** for a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - **npm** to help manage some of the dependencies in the application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of libraries and frameworks


## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
