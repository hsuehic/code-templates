/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const {__pascalCaseName__}Schema = new Schema({
    // TODO: pls change this
    userName: { type: String },
    password: { type: String }
  });

  return mongoose.model('{__name__}', {__pascalCaseName__}Schema);
};
