import { defineParameterType } from '@cucumber/cucumber'
import Person from 'src/shouty.js'

// const { defineParameterType } = require('@cucumber/cucumber')
// const Person = require('../../src/shouty')

// Định nghĩa parameter type person có thể nhận giá trị là Lucy, Sean, ...
defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name)
})