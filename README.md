# Community-Connect

## Description

The Community Connect web application provides an easy and convenient way for people to connect to their neighbors, plan local events, keep up with local news, and start community donation drives. 

The application allows users to create both an admin account to manage their local neighborhood as well as normal user accounts to participate in neighborhood events.  When users create an account, they are able to create posts, events, photos, and donation drives.

## Table of Contents

- [Screenshots and Links](#screenshots)
- [Functionality](#functionality)
- [Future Development](#future)
- [Team](#team)

## ScreenShots

Below is a screen shot of the web application:

![Entertainment Finder](./public/images/FireShot%20Capture%20017%20-%20CommunityConnect%20-%20localhost.png)

The page is live on [Heroku](https://gentle-peak-70353.herokuapp.com/)

The code is in the [GitHub Repository](https://github.com/rekhawb/Community-Connect)

## Functionality

The application currently incorporates the following technology and functionality

- [x] The application uses Node.js and Express.js to create a RESTful API
- [x] The application uses Handlebars.js as the template engine
- [x] The application uses MySQL and the Sequelize ORM for the database
- [x] The application has both GET and POST routes for retrieving and adding new data
- [x] The application uses the following libraries that haven’t been discussed:
    - Multer
- [x] The application has a folder structure that meets the MVC paradigm
- [x] The application includes authentications (express-session and cookies)
- [x] The application protects API keys and sensitive information with environment variables
- [x] The application is deployed using Heroku
- [x] The application has a polished UI
- [x] The application is responsive
- [x] The application is interactive
- [x] The application has good-quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.)
- [x] The application has a professional README (with unique name, description, technologies used, screenshot, and link to deployed application)

## Future

This is the first iteration of the application, or Minimum Viable Product (MVP).

The following tasks are on our roadmap:

- Add a calendar to more easily see and schedule upcoming events
- Ability to find local non-profits using a mapping API
- Additional language support
- Ability to connect user's Community Connect account with their social media account
- Adding navbar to each page


## Team

The following are the individuals that contributed to this application.  Everyone contributed in all areas of development.

- Ron Crawford - CSS, Handlebars
- Bhavna Jain - Javascript, Handlebars
- Rekha Renduchintala - Javascript, Handlebars
- Ben Smith - CSS

## Credits

All images are stock photography
Bulma and W3School CSS frameworks were used for styling
BCrypt was used to hash passwords
Express back-end API was used
Connect-Session-Sequelize were used for session store for connect-session using sequelize
Sequelize was used for object-relational mapping
DotEnv was used to dynamically load the environment variables
Express-Handlebars were used as teh UI templating engine
Mutler was used as middleware for handling multipart/form-data, primarily for uploading files
Mysql2 was used as a database version with better performance