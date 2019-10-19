const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');//per hash password
const titlize = require('mongoose-title-case');
const validate = require('mongoose-validator');

const emailValidator = [
  //reg exr per salvare il nome con le maiuscole corrette
  validate({
    validator: 'isEmail',
    message: 'NO valid email!'
  }),
  validate({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

const usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 25],
    message: 'Usarname should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    message: 'Username must contain letters and numbers only'
  })
];

const passwordValidator = [
  validate({
    validator: 'matches',
    arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
    message: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
  })
];

const UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required:true,
    unique: true,
    validate: usernameValidator
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidator,
    select: false
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: emailValidator
  }
});

//Per gestire le maiuscole/minuscole inserite scorrettamente nei nomi
UserSchema.plugin(titlize, {
  paths: [ 'name' ]
});

// prima di salvare l'user, crea hash della password per non spedirla in chiaro
UserSchema.pre('save', function(next){
  const user = this;

  if(!user.isModified('password')) return next();

  bcrypt.hash(user.password, null, null, function(err, hash){
    if(err) return next(err);
    user.password = hash;
    next();
  });
});

//validate password da usare nel api
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema); //** export in a server file

