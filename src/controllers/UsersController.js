const mongoose = require('mongoose');
const Users = mongoose.model('users');

module.exports = {
  //Show all users
  async index(req, res) {
    const { page = 1 } = req.query;
    const users = await Users.paginate({}, { page, limit: 10 });

    return res.json(users);
  },
  //Show a specific users
  async show(req, res) {
    const user = await Users.findById(req.params.id);

    return res.json(user);
  },
  //Save an user
  async store(req, res) {
    const user = await Users.create(req.body);

    return res.json(user);
  },
  //Update an user
  async update(req, res) {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(user);
  },
  //Delete an user
  async destroy(req, res) {
    await Users.findByIdAndRemove(req.params.id);

    return res.send()
  },
}