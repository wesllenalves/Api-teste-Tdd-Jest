const routes = require('express').Router();
const { User } = require('./app/models')

User.create({
    name: 'wesllen',
     email: 'wesllenalves@gmail.com',
      password_hash: '123456789'
});

module.exports = routes;