import Person from 'src/shouty.js';
import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
// const { Given, When, Then } = require('@cucumber/cucumber')
// const Person = require('../../src/shouty');
// const assert = require('assert')

Given('I am walking', function () {
    assert.ok(true)
})

When('I stop walking', function () {
    assert.ok(true)
})

Then('I should be standing', function () {
    assert.ok(true)
})