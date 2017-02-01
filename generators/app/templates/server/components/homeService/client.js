'use strict';
const HomeService = require('./index');

module.exports = function (config) {
  var self = this;
  let service = new HomeService(config);


  /*!
   * Read Item
   */
  self.Read = function (req, res) {
     service.get(req.params, (err, result) => {
      if (err) { return res.send(err); }

      res.json(result);
    });
  };


  return self;
};