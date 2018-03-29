'use strict';
const faker = require('faker');
const mockCustomer = module.exports = {};

mockCustomer.create = (userContext, events, done) => {
  userContext.vars.name = faker.name.firstName();
  userContext.vars.date = faker.date.recent();

  return done();
};