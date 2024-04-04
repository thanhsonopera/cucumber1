import {Person, Network} from 'src/shouty.js';
import { Given, When, Then, Before } from '@cucumber/cucumber';
import assert from 'assert';
// const { Given, When, Then, Before } = require('@cucumber/cucumber')
// const {Person, Network} = require('../../src/shouty');
// const assert = require('assert')

// Incidental details 
const default_range = 100

/** 
  * @method Before - Chạy trước mỗi scenario, tương tự test context hoặc test fixture
*/ 
Before(function () {
  this.people = {}
  this.network = new Network(default_range)
})


/**  
  * PARAMETER TYPE 
  * @param {number} int - An integer parameter.
  * @param {number} float - A floating point parameter.
  * @param {string} word - A word parameter.
  * @param {string} string - A string parameter.
  * @param (s)  
  * @example 
  * Both "Lucy is located 15m from Sean" and "Lucy is located 15m(s) from Sean" are valid.
  * @param / : located/standing/.... / - A choice parameter.
  * @example
  * Both "Lucy is located 15m from Sean" and "Lucy is standing 15ms from Sean" are valid.
  * @param {person} person - A person parameter.
  * Dùng Person parameter định nghĩa trong feature/support => {person}
*/

Given('a person named {word}', function (name) {
  this.people[name] = new Person(name)
})


/*   
  {word} cách hoạt động na ná {person} nhưng person chỉ có thể nhận một số giá trị cố định
  Ví dụ: hàm Given('{word} is located/standing {int}m(s) from {word}', function (lucy, distance, sean) ta bắt buộc phải truyền lucy, distance, sean theo thứ tự cố định 
  Tuy nhiên nếu dùng {person} thì không cần phải truyền theo thứ tự cố định
*/

Given('{word} is located/standing {int}m(s) from {word}', function (lucy, distance, sean) {
  
  // this.lucy = new Person
  // this.sean = new Person
  // this.lucy.moveTo(distance)

  // this.people[lucy] = new Person()
  // this.people[sean] = new Person()
  this.people[lucy].moveTo(distance)
})

Given('people are located at', function (dataTable) {
  dataTable.hashes().forEach(person => {
    this.people[person.person].moveTo(person.distance)
    // console.log(person.person)
  })
})

When('{word} shouts {string}', function (sean, message) {
  // this.sean.shout(message)
  // this.message = message
  this.people[sean].shout(message)
  this.message = message
})

// This ở đây tham chiếu đến cả chương trình
Then('{word} hears {word}’s message', function (lucy, sean) {
  // assert.deepEqual(this.lucy.messagesHeard(), [this.message])
  assert.deepEqual(this.people[lucy].messagesHeard(), [this.message])
})

