'use strict';

/**
 * contractor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::contractor.contractor');
