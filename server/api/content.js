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
      const data = await contentful.client({ preview }).getEntries(query);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);
