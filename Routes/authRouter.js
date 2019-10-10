const express = require('express');
const router = express.Router();
const path = require('path');

var createCookie = require('../Controllers/authController');



// create cookie after login
// router.get('/signup',(req,res)=>{
//     res.sendFile('/partner_portal.html', { root: path.join(__dirname, '../pages/html') });    
// });


router.get('/login',(req,res)=>{
    res.sendFile('/login.html', { root: path.join(__dirname, '../pages/html') });    
});

router.post('/signup',createCookie.signup);
router.post('/signin',createCookie.signIn);

module.exports=router;