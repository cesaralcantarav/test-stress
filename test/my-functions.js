'use strict';

module.exports = {
  generateRandomData
};

// Make sure to "npm install faker" first.
const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const name = Faker.name.firstName(); //`${Faker.name.firstName()} ${Faker.name.lastName()}`;
  const firstLastName = Faker.name.lastName();
  const secondLastName = Faker.name.lastName();
  const email = Faker.internet.exampleEmail();
  const password = Faker.internet.password();
  const job = "Analyst"
  const location = "3020"

  // add variables to virtual user's context:
  userContext.vars.name = name;
  userContext.vars.firstLastName = firstLastName;
  userContext.vars.secondLastName = secondLastName;
  userContext.vars.email = email;
  userContext.vars.password = password;
  userContext.vars.job = job;
  userContext.vars.location = location;
  // continue with executing the scenario:
  return done();
}