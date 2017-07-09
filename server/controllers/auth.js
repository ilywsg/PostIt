require('dotenv').config();
const User = require('../database/models').User;
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const Validator = require('validatorjs');

module.exports = {
  index(req, res) {
    res.send('update here');
  },
  signup(req, res) {
    const obj = req.body;
    const validator = new Validator(obj, User.signupRules());
    if (validator.passes() && obj.confirm_password) {
      if (obj.confirm_password !== obj.password) {
        return res.status(400).send({ message: 'password not matched' });
      }
      User.findOne({
        where: {
          $or: [{ email: obj.email }, { mobile: obj.mobile }, { username: obj.username }]
        }
      })
          .then((existingUser) => {
            if (existingUser) {
              let message = '';
              if (existingUser.email === obj.email) message = 'A user with this email already exists';
              if (existingUser.mobile === obj.mobile) message = 'This Mobile Number has been used';
              if (existingUser.username === obj.username) message = 'This Username has been used';
              return res.status(400).send({ message });
            }
            // if user does not exist and he/she registering for the first time
            if (!req.body.mobile) {
              obj.mobile = '';
            }
            return User.create(obj, { fields: ['email', 'password', 'username', 'mobile', 'fullname'] });
          })
          .then(savedUser => res.status(201).send(savedUser))
          .catch(err => res.status(400).send(err));
    } else {
      return res.status(400).send({ message: 'There are problems with your input' });
    }
  },
  signin(req, res) {
    const body = _.pick(req.body, ['username', 'password']);
    const validator = new Validator(body, User.loginRules());
    if (!validator.passes()) {
      return res.status(400).send({ message: 'There are problems with your input' });
    }
    User.findOne({
      where: {
        username: body.username
      }
    })
        .then((user) => {
          if (!user) {
            return res.status(404).send({ message: 'User not found' });
          }
          if (!user.comparePassword(body.password)) {
            return res.status(404).send({ message: 'Incorrect password' });
          }
          const data = _.pick(user, ['username', 'email']);
          const token = jwt.sign(data, process.env.JWT_SECRET, { expiresIn: 3600 });
          return res.status(200).send({ token, message: 'Sign in successful' });
        })
        .catch(err => res.status(400).send(err));
  }
};

