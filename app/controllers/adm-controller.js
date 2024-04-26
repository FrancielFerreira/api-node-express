const Adm = require('../models/adm');

const AdmController = {
  index: function (req, res, next) {
    res.send(Adm.todos());
  },
};

module.exports = AdmController;
