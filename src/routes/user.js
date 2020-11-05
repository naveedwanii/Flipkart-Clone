const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/signin', (res,req) =>{



});

router.post('/signup', (res,req) =>{

     User.findOne({
         email: req.body.email
     })
     .exec((error, user) =>{
         if(user) return res.status(400).json({
             message: 'User already registered'
         })
         
      const {
          firstName,
          lastName,
          email,
          password
      } = req.body;

      const _user = new User({})
          firstName,
          lastName,
          email,
          password,
          username: Math.random().toString();
     });

     _user.save((error, data) =>{
         return res.status(400).json({
             message: 'Something went wrong'
         });
     
        });
    

});

module.exports = router;











module.exports = router;
