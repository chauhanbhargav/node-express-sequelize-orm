const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const User = models.users;
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, (email, password, cb) => {
	return User.findOne({
		email
	}).then(user => {
		if (user)
			bcrypt.compare(password, user.password, function (err, res) {
				if (err)
					return cb(null, false, {message: 'Incorrect email or password.'});
			});
		else
			return cb(null, false, {message: 'Incorrect email or password.'});


		return cb(null, user, {message: 'Logged In Successfully'});
	}).catch(err =>
		cb(err)
	);
}
));