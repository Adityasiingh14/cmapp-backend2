'use strict';

/**
 * custom-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-api.custom-api');
