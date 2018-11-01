/**
 * {__name__}.jsx
 * @Author: {__author__}({__email__})
 * @Link: {__link__}
 * @Date: {__date__}
 */

'use strict';

const egg = require('egg');

class Controller extends egg.Controller {
  // GET LIST /{__name__}
  async index() {
    const { ctx } = this;
    ctx.body = {};
  }

  // POST CREATE /{__name__}
  async create() {
    const { ctx } = this;
    ctx.body = {};
  }

  // GET READ /{__name__}/:id
  async show() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = { id };
  }

  // GET UPDATE /{__name__}/:id/edit
  async edit() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = { id };
  }

  // PATCH UPDATE /{__name__}/:id
  async update() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = { id };
  }

  // DELETE DELETE /{__name__}/:id
  async destroy() {
    const { ctx } = this;
    const { id } = ctx.params;
    ctx.body = { id };
  }
}

module.exports = Controller;
