// require express
const express = require('express');
// set up app variable for the server.
const app = express();

app.use(express.static('public'))

// To get engine to listen to ejs file,
app.set('view engine', 'ejs')

// To set up the route, set up HTTP methods. (get, post, delete,)
// Then we run code inside the function.
app.get('/', logger, (req, res) => {
    console.log('hello');
    // Whenever people use a get route, they will receive the response.
    res.render('index', { text: 'world' })
})

// import routes
const userRouter = require('./routes/users');

// in order to link the routes, it starts all after /users
app.use('./users', userRouter)

// Middleware function
function logger(req, res, next) {
    console.log(req.originlUrl)
    next()
}

// to get the app to run, set up port number.
app.listen(3000);