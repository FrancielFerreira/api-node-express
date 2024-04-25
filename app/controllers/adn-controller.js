const AdmController = {
  index: function (req, res, next) {
    res.send([{ id: 1, nome: 'nobredev' }]);
  },
};

module.exports = AdmController;
