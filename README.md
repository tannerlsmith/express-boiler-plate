# express-boiler-plate
* https://www.youtube.com/watch?v=SccSCuHhOw0 || 6:45 (rendering HTML)
* run : ```npm init -y``` and ```npm i express```
* ``` npm i --save-dev nodemon ``` and add ```"devStart": "nodemon server.js"``` to scripts.
* running "npm run devStart" will run all code in server.
* Lines 1-13 in server.js set up the basic routing.
* As seen here:
* ![server setup code](./assets/images/server-setup-express.png)
* Below app.get, add ```res.json({ message: "error" })``` and check console to see if there is an error. 
