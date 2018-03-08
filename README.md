# Ionic Application for Living Sky TaikoIonic

This is an Ionic App with TapeScript for a taiko Japanese drum club. It is still in development.


## Table of Contents
 - [Getting Started](#getting-started)
 - [Use Cases](#use-cases)
 - [App Preview](#app-preview)
 - [File Structure of App](#file-structure-of-app)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ShinNakagawa/taiko1.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: You may need to add “sudo” in front of any global commands to install the utilities._


## Use Cases

* Action Sheet - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.ts) ]
* Alert - [ [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]
* Cards - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/speaker-list/speaker-list.html) ]
* Datetime - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/about/about.html) ]
* Grid - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/login/login.html) ]
* Inputs - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/login/login.html) ]
* Items (Sliding) - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]
* Menu - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/app.template.html) |
[code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/app/app.component.ts) ]
* Modal - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule-filter/schedule-filter.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]
* Searchbar - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]
* Segment - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]
* Slides - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/tutorial/tutorial.html) |
* Sticky headers - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.html) ]
* Tabs - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/tabs/tabs.html) | [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/tabs/tabs.ts) ]
* Toggle - [ [template](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule-filter/schedule-filter.html) ]
[code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/tutorial/tutorial.ts) ]
* Using Angular HTTP for JSON - [ [code](https://github.com/ionic-team/ionic-conference-app/blob/master/src/providers/conference-data.ts) | [usage](https://github.com/ionic-team/ionic-conference-app/blob/master/src/pages/schedule/schedule.ts) ]


## App Preview

[Try it live](https://taiko1.herokuapp.com)


## Deploying

* PWA - Un-comment [this](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21), run `npm run ionic:build --prod` and then push the `www` folder to your favorite hosting service
* Android - Run `ionic cordova run android --prod`
  - If you are deploying to Android 4.4 or below we recommend adding crosswalk: `cordova plugin add cordova-plugin-crosswalk-webview`
* iOS - Run `ionic cordova run ios --prod`


## Add by Shin
1. youtube player
install youtube-video-player
$ ionic cordova plugin add cordova-plugin-youtube-video-player
$ npm install --save @ionic-native/youtube-video-player

add the following into config.xml	
<preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />

2. add firebase
$ npm install --save firebase angularfire2
$ npm install promise-polyfill --save-exact

3. Parse, validate, manipulate, and display dates and times in JavaScript.
$ npm install --save moment

===============================================
Publish to Heroku:
1. Edit .gitignore file
* remove the mentions of www/ so git picks it up
* add these two lines so platforms browsers folder is picked up
*   platforms/*
*   !platforms/browser/
*   !platforms/browser/www
*   !platforms/browser/www/plugins

2. Run the followings to add these 3 libraries
$ npm install --save connect
$ npm install --save serve-static
$ npm install express --save --save-exact

3. Add ["start": "node web.js"] to your npm scripts in package.json
* Add web.js to your project folder:

4. Add platform browser and build.
* Run Bash:
$ ionic cordova platform add browser
$ ionic cordova build browser

Run Bash:
$ heroku login
$ heroku git:remote -a taiko1
$ git init
$ git add .
$ git commit -am "make it better"
$ git push heroku master
$ heroku ps:scale web=1

===============================================
Publish to Git:
$ git init
$ git add README.md
$ git commit -am "commit1"
$ git remote add origin https://github.com/ShinNakagawa/taiko1.git
$ git push -u origin master

## Database Structure of Firebase

```
base-gallery/
|
├── events/               * Event Data
│   ├── 2018              * 2018 events
|   |   ├── user.uid
|   |   |   └── name, date, description, id, imageUrl
|   |   └── user.uid
│   └── 2019              * 2019 events
|
├── pays/                 * Pay Data
│   ├── 2018              * 2018 pays
|   |   ├── user.uid
|   |   |   └── month, date, id, userid
|   |   └── user.uid
│   └── 2019              * 2019 pays
|
├── songs/                * Song Data
|    ├── id/
|    |    ├── name, id, description, imageUrl, userid
|    |    └── playListID, fullVideoID
|    └── id/
|
├── uploads/              * Storage Data
|    ├── id/
|    |    └── name, id, progress, url
|    └── id/
|
└── users/                * User Data
     ├── id/
     |    └── email, desplayName, imageUrl, status, uid
     └── id/

