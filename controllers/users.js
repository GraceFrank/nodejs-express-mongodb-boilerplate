
const User = require('../models/user')
class UserController{
  async get(req, res){
    const users = await User.find();
    return res.status(200).send({
      message: "sucessfully fetched data",
      data: users
    })
  }
}

module.exports = new UserController()