'use strict';

/**
 * consultant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consultant.consultant');
