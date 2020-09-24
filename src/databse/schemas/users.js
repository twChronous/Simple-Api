const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Users = new mongoose.Schema({
  _id: String,
})

Users.plugin(mongoosePaginate)
mongoose.model('users', Users)