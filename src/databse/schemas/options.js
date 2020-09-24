const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Options = new mongoose.Schema({
  _id: String,
})

Options.plugin(mongoosePaginate)
mongoose.model('options', Options)


