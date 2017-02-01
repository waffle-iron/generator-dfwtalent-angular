'use strict';
const express = require('express');
const Component = require('../components');

let router = express.Router();
let config = require('../config/environment');

// ----------------------
// COMPONENT APIs
// ----------------------
// GET   /api/v1/home/   -- Get Item

router.get('/', Component.HomeService(config).Read);

module.exports = router;