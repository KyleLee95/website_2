const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const contentful = require('../lib/contentful');

module.exports = router;

router.get(
  '/entries',
  celebrate(
    {
      query: Joi.object().keys({ preview: Joi.boolean() }).unknown(true),
    },
    { abortEarly: false }
  ),
  async (req, res, next) => {
    const { preview, ...query } = req.query;

    try {
      const rawData = await contentful.client({ preview }).getEntries(query);
      //remove unused fields and make more usable on clientside
      const data = contentful.client().parseEntries(rawData);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);
