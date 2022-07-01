const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../db/conn');
const User = require("../model/userSchema");

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the fields properly" });
    }
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });
            await user.save();
            res.status(201).json({ message: "User successfully registred" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the fields properly" })
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials " });
            } else {
                token = await userLogin.generateAuthToken();
                const jwtToken = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);
                User.updateOne({ _id: userLogin._id }, { $set: { tokens: jwtToken } })
                res.cookie("jwtoken", jwtToken, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: false
                });
                res.json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }
    } catch (err) {
        console.log(err);
    }
});

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser);
});

router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('Logout Successfull');
});

module.exports = router;

