const express = require('express')

const route = express.Router()

const services = require('../services/render')

/*
 * @description Root Route
 * @method GET /
*/ 

route.get('/',services.homeRoutes);

//route for adding user into form

route.get('/add_user',services.add_user);

//route for updating user 

route.get('/update_user',services.update_user);


module.exports = route