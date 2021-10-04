const express = require('express');
// .Router() creates a new route.
const router = express.Router()

// Routers for users routes.

router.get('/', (req, res) => {
    res.send('User List')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

// CRUD Routes.
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [{ name: "tanner" }, { name: "Kyle" }]

router.param((req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router