var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../model/user')
var app = express();
var bodyParser = require('body-parser')

router.get('/Username', verifytoken, (req, res, next) => {
  return res.status(200).json(Token.useremail)
})
var Token = ''
function verifytoken(req, res, next) {  
  let token = req.query.token;
  console.log(token)
  jwt.verify(token, 'Secret', (err, verifytoken) => {
    if (err)
      return res.status(400).json({
        Msg: 'Unauthorized'
      })
    if (verifytoken) {
      Token = verifytoken;      
      next();
    }
  })
}

//Register New Account
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
router.post('/register', (req, res) => {
  const {
    name,
    email,
    password,
    password2
  } = req.body
  var error;
  // if (error) {
  //   return res.status(400).send(error.details[0].message);
  // }

  if (!name || !email || !password || !password2) {
    res.status(501).json({
      Msg: 'Please enter all fields'
    });
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(password2)

  } else if (password != password2) {
    res.status(501).json({
      Msg: 'Passwords do not match'
    });


  } else if (password.length < 6) {
    res.status(501).json({
      Msg: "Password must be at least 6 characters"
    });

  } else {
    //validation passed
    User.findOne({
      email: email
    }).then(user => {
      if (user) {
        res.status(501).json({
          Msg: "Email already exists"
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save()
              .then(user => {
                res.status(200).json({
                  Msg: 'Registerd Succesfully'
                });

              })
              .catch(err => console.log(err));
          });
        });
      }


    });

  }
})
//Login to registered account
router.post('/login', (req, res, next) => {
  const {
    email,
    password
  } = req.body
  console.log(req.body)
  console.log("asd")
  User.findOne({
    email: email
  }).then(user => {
    console.log(user)
    if (!user) {
      res.status(501).json({
        Msg: 'Email Not Registered'
      });
    }

    // Match password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (isMatch) {
        let token = jwt.sign({
          useremail: user.email
        }, 'Secret', {
          expiresIn: '3h'
        })
        // console.log(token)
        res.status(200).json(token);
      } else {
        res.status(501).json({
          Msg: 'Password Does not Match'
        });

      }
    });
  });

});

//Delete user from database
router.delete("/:userId", (req, res, next) => {
  User.remove({
      _id: req.params.userId
    })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});








module.exports = router;
