# express-boiler-plate
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
* https://www.youtube.com/watch?v=SccSCuHhOw0 || 16:00 (Advanced routers)

### Server setup and basic Routing
* run : ```npm init -y``` and ```npm i express```
* ``` npm i --save-dev nodemon ``` and add ```"devStart": "nodemon server.js"``` to scripts.
* running "npm run devStart" will run all code in server.
* Lines 1-13 in server.js set up the basic routing.
* As seen here:
* ![server setup code](./assets/images/server-setup-express.png)
* Below app.get, add ```res.json({ message: "error" })``` and check console to see if there is an error. 

### Rendering HTML
* to render views, create a views folder with an index.html file inside of it.
* install ejs for your HTML styling: ```npm i ejs```

* in server.js, tell the engine to use ejs by typing ```app.set('view engine', 'ejs')```
* install ejs engine support in VS code.
<br>

### Routers
* A way for you to create a mini-application inserted into main app.

* To do this, create a routes folder. Take the ```app.get()``` routes for users.

### Advanced Routing
* You can do dynamic routing with "/:id"
* Always put "new" routes above dynamic routes so you can work top-to-bottom.
* Generally, use CRUD routes; use router.route() to chain together these.
* router.param() runs any time it matches a param you pass in. 

### Middleware
