const mongoose = require('mongoose');
const Options = mongoose.model('options');

module.exports = {
  //Show all options
  async index(req, res) {
    const { page = 1 } = req.query;
    const options = await Options.paginate({}, { page, limit: 10 });

    return res.json(options);
  },
  //Show a specific option
  async show(req, res) {
    const option = await Options.findById(req.params.id);

    return res.json(option);
  },
  //Save an option
  async store(req, res) {
    const option = await Options.create(req.body);

    return res.json(option);
  },
  //Update an option
  async update(req, res) {
    const option = await Options.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(option);
  },
  //Remove an option
  async destroy(req, res) {
    await Options.findByIdAndRemove(req.params.id);

    return res.send()
  },
}