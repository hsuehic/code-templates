/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

'use strict';

import { Application } from 'egg';

export default (app: Application) => {
  const { mongoose } = app;
  const { Schema } = mongoose;

  const {__pascalCaseName__}Schema = new Schema({
    // TODO: pls change this
    userName: { type: String },
    password: { type: String }
  });

  return mongoose.model('{__name__}', {__pascalCaseName__}Schema);
};
