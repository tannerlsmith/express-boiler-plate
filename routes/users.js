const express = require('express');
// .Router() creates a new route.
const app = express.Router()

// Routers for users routes.
app.get('/', (req, res) => {
    res.send('User list')
})

// this will show as users/new
app.get('/new', (req, res) => {
    res.send('User New Form')
})

// import this to server.js
module.exports = router