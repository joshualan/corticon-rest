const express = require('express')
const decisionService = require('./decisionServiceBundle');

module.exports = {
    getCorticon: (req, res) => {
        const payload = {
          'Default return value': 'Some return value'
        }

        return res.status(200).json({ payload: payload });
    },
    postCorticon: (req, res) => {
      const configuration = { logLevel: 0 };
      const result = decisionService.execute(req.body, configuration);

      return res.status(200).json(result);
  }
}