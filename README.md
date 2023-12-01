# HikeBikeClimb

Developer: Jonatan Hurtig

![Mockup image](https://i.imgur.com/m7jyWnM.png)

[View live website](https://hbc-frontend-pj-5db59e2e946b.herokuapp.com/)

## Table of Contents

0. [About](#about)

1. [Project Goals](#project-goals)

   1. [User Goals](#user-goals)

2. [User Experience](#user-experience)

   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
   4. [Site Owner Stories](#site-owner-stories)

3. [Wireframes](#wireframes)

4. [Technologies Used](#technologies-used)

   1. [Languages](#languages)
   2. [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
   3. [Tools & Programs](#tools--programs)

5. [Agile Design](#agile-design)

6. [Design](#design)

   1. [Colors](#colours)
   2. [Fonts](#fonts)

7. [Project Structure](#project-structure)

   1. [Front End](#front-end)
   2. [Back End API](#back-end-api)

8. [Features](#features)

   1. [Implemented Features](#implemented-features)
   2. [Features to be Implemented](#features-to-be-implemented)

9. [Validation](#validation)

   1. [CSS](#css)
   2. [Html](#html)
   3. [Lighthouse](#lighthouse)
   4. [ESLint](#eslint-validation)

10. [Testing](#testing)

11. [Deployment](#deployment)

    1. [Deploying in Heroku](#deploying-the-website-in-heroko)
    2. [Forking of Github repo](#forking-the-github-repository)
    3. [Cloning the Github repo](#cloning-the-repository-in-github)

12. [Credits](#credits)

    1. [Image](#images)
    2. [Code](#code)

13. [Thank You](#thank-you)

# About

 - HikeBikeClimb is a site for users that likes to hike, ride bikes, and/or climb. The site gives the user tools to create and view events in these categories of sport, and to collect their specific gear in gear lists that they can update as they update their gear, to keep track of and inspire other users that are interested in different gear set ups. A user can also add posts to update the other users on the site about their journey and milestones in these sports.

---

## Project Goals

 - The goal for this project was to create a place for enthusiasts of these three sports to come together and share information, inspiration and meet up at events big and small.

Key functionality Goals
 - comprehensive navigation
 - User authentication
 - User profiles with users posts, gearlists and events
 - CRUD functionality for profiles, events, posts, comments, gear lists and gear items
 - Filtering of events, posts, gear lists by profile

### User Goals

 - Ability to create events, posts and gearlists with items
 - Add comments to posts
 - Update or delete content where needed
 - Filtering events, posts and gearlists by profile
 
## User Experience

### Target Audience

 - The target audience for HikeBikeClimb is people that likes to hike, ride bikes, and/or climb and want tools to extend these interests in to a network of likeminded.

### User Requirements and Expectations

 - A responsive and visually clean design
 - Intuitive, efficient navigation 
 - A purpose-driven application for a specific demografic


### User stories

 - As a user I want to be able to create posts and comments and also update them so that I kan keep them up to date and standard
 - As a user I can create events and update them so that I kan keep them up to date and standard
 - As a user I can create gear lists with gear items and update them so that I kan keep them up to date and standard
 - As a user I can see other users profiles with their own posts, events and gear lists

#### Navigation & Authentication

 - Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
 - Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
 - Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
 - Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
 - Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
 - Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
 - Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
 - Avatar: As a user I can view user's avatars so that I can easily identify users of the application

#### Events
 - Create Events: As a logged in user I can create events so that other users can see them and attend if they want
 - View Events in Calendar: As a user I can see the events in the calendar and click on them to go to the detailed view
 - View Events in Profile pages: As a user I can see all the events that a specific user (including myself) has created on their profile and click on them to go to the detailed view


#### Gear Lists and Gear Items

 - Create Gear Lists: As a logged in user I can create gear lists so that i can keep track of my gear and other users can see them
 - View Gear Lists in Profile pages: As a user I can see all the gear lists with the added gear items that a specific user (including myself) has created on their profile and click on them to go to the detailed view
 - Add, Delete Edit Gear Items: As a logged in user I can add gear items to my gear lists and edit or delete them to keep them up to date.
 

#### Posts and Comments
 - Posts List: As a user I can see all posts added in the homepage by all users
 - Create Posts: As a logged in user I can create posts so that other user can see what i am up to
 - Comments: As a logged in user I can comment on posts, edit or delete them to keep the comments relevant and up to date.
 - View Posts in Profile pages: As a user I can see all the posts that a specific user (including myself) has created on their profile and click on them to go to the detailed view

#### The Profile Page

 - Sign up and Log in: As a user I want to be able to log in and create my profile 
 - View Profiles: As a user I can see other users profiles with their avatar, bio, own posts, events and gear lists
 - Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
 - Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure


### Site Owner Stories

 - As a site owner I can provide access to logged in user so that they can use the functions
 - As a site owner I can restrict an unauthorised user or a user that does not own the content from making changes
 - As a site owner I can make my site responsive so that user can view it on different screen sizes


## Wireframes
Initial wireframe for mobile with [Balsamiq](https://balsamiq)

![Mobile Wireframe](https://i.imgur.com/QEvkU4w.png)


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
- React


### Libraries, frameworks and dependencies

- [Balsamiq](https://balsamiq.com/): was used to create wireframes.
- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to prevent unauthenticated user from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (posts/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to enable the navigation among views of various components and control what the user sees depending on the URL they have accessed in the browser.
- [ES7 Snippets](https://open-vsx.org/extension/dsznajder/es7-react-js-snippets): this was used for keyboard shortcuts when creating jsx functions
- [BigCalendar](https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page): was used to display the events per date in the calendar page

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of font for the website
- [CodeAnyWhere](https://app.codeanywhere.com/) was IDE used for writing code and to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- Validation:
- [WC3 Validator](https://validator.w3.org/) was used to validate the html
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
- [ESLint](https://eslint.org/) used to validate JSX code
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the app


## Agile design

### About

The project was planned and implemented following agile methodology principles. GitHub Projects was used to manage and document this process.

The GitHub project can be viewed here: [Project](https://github.com/users/PjHurtig/projects/8)

Following MoSCoW Priortisation principles, each User Story was assigned a tag from one of the following:

- Must Have
- Should Have
- Could Have
- Won't Have


### User Story Template

- Using Github issues first I created the template for a user story that was later used to create user stories.


### Kanban Board

 - I used a Kanban board to provide visual clarity and task tracking.


## Design

### Colours

The colours used in the design were taken from [coolors.co](https://coolors.co/)

![Color Palette](https://i.imgur.com/HzmRV4b.png)


### Fonts

The font usesd throughout the site is [Poppins](https://fonts.google.com/specimen/Poppins?query=Poppins) from google fonts


## Project Structure

### Front-End

#### React

Utilizing React in this project 


I used React for this application

There were various components created and reused across this application.

- `<Asset />` - multi purpose component, used to display a range of items due to being passed props.

  - Those include a loading spinner from React Bootstrap, image with source and alt attribute or a message consisting of a paragraph.


- `<Avatar />` - resuable component, used to display the relevant user profile picture.

  - This component uses props which can specify the source of the image and also its size
  - This components was used in profile avatar, event owner, comment create form and comments posted

 
- `<NavBar />` - resuable component, used for easy navigation of the site.

  - This component is reusable as it will display different icons based on a users logged in status.
  - If no user is logged in a log in, sign up and contact icon will be available however if a user is currently logged in, the full range of icons will be available apart from log in.

- `<ConfirmDelete />` - resuable component, used for a modal to confirm deletion of a users content.

- `<CategoryColors />` - resuable component, used for defining the colors of event and gearlist categories.

- `<SmallImage />` - resuable component, used for a small preview of gear items in the accordion list.

- `<SuccessAlert />` - resuable component, used for displaying informational alerts to the user when performing actions.



There were various pages created and used in this application

- auth - The auth page group consisted of the following files:

  - SignInForm.js - This file handles the Login form
  - SignUpForm.js - This file handles the Sign up form

- comments - The comments page group consisted of the following files:

  - Comment.js - This file returns the comments
  - CommentEditForm.js - This file handles the comment edit form
  - CommentCreateForm.js - This file handles the create comment form


- profiles - The profiles page group consisted of the following files:

  - Profile.js - This file returns the profile section
  - ProfilePage.js - This file returns the entire Profile page
  - ProfileEditForm.js - This file handles the profile edit form
  - UsernameForm.js - This file handles the username change form
  - UserPasswordForm.js - This file handles the password change form

### Back-End API

#### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here](https://github.com/PjHurtig/hbcapi).

##### Back to [top](#table-of-contents)

## Features

### Implemented Features

#### Navigation(Navbar)
NavBar Logged in

![NavBar Logged in](https://i.imgur.com/OuNrVCc.png)

NavBar Logged out

![NavBar Logged out](https://i.imgur.com/1oRKYET.png)

NavBar Mobile

![NavBar Mobile](https://i.imgur.com/9S06LqB.png)

NavBar Mobile Expanded

![NavBar Mobile Expanded](https://i.imgur.com/1nfW5iX.png)


- Navbar consists of Logo image and is displayed in all pages for easy navigation of website
- Logo and webbsite name both are links for home page
- Navbar consists of a links to home, signin page, signup page and the calendar for logged out users
- Authenticated/Signed in user can see additional icons as follows:
  - Add gear/post/event: It opens the create form page for each
  - Logout: This is used for user to logout
  - Profile: This shows the user avatar and opens the user's profile page
- Responsive and on small screens it coverts into a 'hamburger menu'


#### Sign Up Page

- This page consists of sign up form for user to create new account
- New users can access this page by clicked on Sign Up link on Navbar

![Signup Page](https://i.imgur.com/GUydwDp.png)

#### Sign In Page

- This page consists of sign in form for existing user to signin using their credentials
- Users can access this page by clicking on Sign In link on Navbar

![Signin Page](https://i.imgur.com/DDORPjP.png)

#### HomePage

- Displays all user posts / events / gearlists sorted by newly created
![Home Page](https://i.imgur.com/DGklIoO.png)

#### Profile Page

- This page consists the detail of user including their bio, number of posts/events/gear lists that the user has created
- Logged in user can access this page by clicking on their avatar image in Navbar

![Profile Desktop](https://i.imgur.com/sNTxA2h.png)
![Profile Mobile](https://i.imgur.com/bbLNBoY.png)




### Bugs

during the project there has been some bugs that i have sorted out, for example in the calendar when connecting to events in the backend i could not get the date/time to work with eachother. Through a lot of googling i found toISOString and that made it work as expected.

![ISOString](https://i.imgur.com/TYgNvGh.png)


### Future Enhancements

In the future I want to add a google maps API for a location field on the events

##### Search form and filters

- This component has a search bar for user to type and search 
- This component is provided for user to search all posts easily by their title, owner and post content.


## Validation

### CSS

- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)was used to validate the css in the project.


### Html

- [WC3 Validator](https://validator.w3.org/) was used to validate the html in the project


### Lighthouse

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for performance, accessibility, progressive web apps, SEO analysis of the project code here are the results:

Home

![Home Lighthouse](https://i.imgur.com/UzhCatk.png)

Profile

![profile Desktop](https://i.imgur.com/zcilwN2.png)

Calendar

![calendar Desktop](https://i.imgur.com/4pzMCWA.png)


### ESLint Validation

- The JSX code was validated using the ESLint utility.
- The library was preinstalled in Codeanywhere IDE
- The code was getting validated so the errors were corrected during development process
- No errors remained before final submission


## Testing

A separate document for the manual testing can be found in the repository:
[TESTING.md](https://github.com/PjHurtig/hbc-frontend/blob/main/TESTING.md)


The site has been successfully tested on these devices available to me:

#### Phones

Huawei mate 20 pro

- Chrome
- Firefox

Samsung s8

- Chrome
- Firefox

#### Computers

lenovo ideapad

- Chrome
- Firefox
- Edge


### Browser Testing

- Chrome
- Firefox
- Edge
 
## Deployment

### Deploying the website in Heroko

Deployment to Heroku was completed using the following steps:

1. Open and login to [Heroku](https://id.heroku.com/login).
2. From the dashboard, click 'New', then click 'Create new app' from the dropdown menu.
3. Enter the App name, choose a region, then click 'Create app'
8. Navigate to the 'Deploy' tab.
9. Within 'Deploy', navigate to 'Deployment method'.
10. Click on 'GitHub'. Navigate to 'Connect to GitHub' and click 'Connect to GitHub'
11. Within 'Connect to GitHub', use the search function to find the repository to be deployed. Click 'Connect'.
12. Navigate to either 'Automatic Deploys' or 'Manual Deploys' to choose which method to deploy the application.
13. Click on 'Enable Automatic Deploys' or 'Deploy Branch' respectively, depending on chosen method.
14. Once the app is finished building, a message saying 'Your app was successfully deployed' will appear.
15. Click 'View' to see the deployed app.



### Forking the GitHub Repository

1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
4. GitHub Repository

### Cloning the repository in GitHub

1. Visit the GitHub page of the website's repository
2. Click the “Clone” button on top of the page
3. Click on “HTTPS”
4. Click on the copy button next to the link to copy it
5. Open your IDE
6. Type `git clone <copied URL>` into the terminal

## Credits

### Images



### Code

- The base code was based on the [Moments](https://github.com/Code-Institute-Solutions/moments) walkthrough.

- The base structure for this readme is from [markdaniels](https://github.com/markdaniel1982) [taskmonkey](https://github.com/markdaniel1982/taskmonkey) readme.

- The switch color by category for events on calendar page information is from [stackoverflow](https://stackoverflow.com/questions/50057749/switch-color-statement)



## Thank You

To everyone that has helped me in this process and to you for reading this README.