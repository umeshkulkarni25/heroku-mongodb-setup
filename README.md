# heroku-mongodb-setup
This repo contains a expresss server which is connected to a mLab hosted mongodb server.
# To test mLab: 
* mLab db url: mongodb://@ds123003.mlab.com:23003/heroku-connection-test
* user: root
* Configure the DB in Robo 3T client to see the DB in a GUI.

# To test auto-deployment:
* visit https://alive-autodeploy-prototype.herokuapp.com/ notice the names that are displayed.
* next clone this repo.
* checkout the master branch.
* find the following file: ./collections/person/personList.js in the workspace
* In the above file u will find list of names.
* Add or remove names and push to master barnch.
* checkthe url https://alive-autodeploy-prototype.herokuapp.com/ after 2 minutes after the push.
* You should see the ur changes have been autodeployed.


