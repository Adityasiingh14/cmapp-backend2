'use strict';

/**
 * custom-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::custom-api.custom-api');
