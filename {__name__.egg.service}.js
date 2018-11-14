/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

'use strict';

const Service = require('egg').Service;

class {__pascalCaseName__} Service extends Service {
  async getList() {
    const { ctx } = this;

    return ctx.request.body;
  }
}

module.exports = {__pascalCaseName__}Service;
