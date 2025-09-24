Iteration 6
- What is the purpose of userSchema.statics.login in userModel.js?
Add login function to the userSchema

- Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?
User.findOne({ email }) refer to User schema, but since the static function is inside the schema we refer to it as "this" similar to python's 'self' when using Class

- Why is bcrypt imported in userController.js and not in userModel.js?
Because the authentication process is handled in userController.js and not in userModel.js

-------------------------------

Iteration 7
- What is the purpose of userSchema.statics.signup in userModel.js?
Add signup function to the userSchema

- Compare User.create({ email, password: hash }) to this.create({ email, password: hash }). When and why do we use this instead of the model's name?

User.create({ email, password: hash }) refer to User schema, but since the static function is inside the schema we refer to it as "this" similar to python's 'self' when using Class

- Why is validator imported in userController.js and not in userModel.js?
Because the authentication process is handled in userController.js and not in userModel.js