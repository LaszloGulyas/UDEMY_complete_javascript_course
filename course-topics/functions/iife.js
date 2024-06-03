'use strict';

// IIFE - immediately invoked function expression
// purpose: invoked right after creation, can run only once

(function initMessage(extraText) {
    console.log('This will run only once!\n', extraText);
})('my custom extra text');

console.log('Hello world!')
