'use strict';

/**
 * smartphone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smartphone.smartphone');
