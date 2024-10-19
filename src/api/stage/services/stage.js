'use strict';

/**
 * stage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stage.stage');
