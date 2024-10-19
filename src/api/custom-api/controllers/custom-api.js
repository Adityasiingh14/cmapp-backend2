'use strict';

/**
 * custom-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custom-api.custom-api');
