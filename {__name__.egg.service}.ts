/**
 * {__name__}.jsx
 * @author: {__author__}({__email__})
 * @link: {__link__}
 * @date: {__date__}
 */

'use strict';

import { Service } from 'egg';

class {__pascalCaseName__}Service extends Service {
  async getList() {
    const { ctx } = this;

    return ctx.request.body;
  }
}

export default {__pascalCaseName__}Service;
