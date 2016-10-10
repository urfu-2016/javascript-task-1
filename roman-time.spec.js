/* eslint-env mocha */
'use strict';

var assert = require('assert');
var romanTime = require('./roman-time');

describe('Модуль roman-time', function () {
    it('должен возвращать для 09:10 значение IX:X', function () {
        assert.strictEqual(romanTime('09:10'), 'IX:X');
    });

    it('должен возвращать для 00:00 значение N:N', function () {
        assert.strictEqual(romanTime('00:00'), 'N:N');
    });

    it('должен возвращать для 23:59 значение XXIII:LIX', function () {
        assert.strictEqual(romanTime('23:59'), 'XXIII:LIX');
    });

    it('должен выбрасывать исключение TypeError для 24:00', function () {
        assert.throws(romanTime.bind(null, '24:00'), TypeError);
    });

    it('должен возвращать для 01:00 значение I:N', function () {
        assert.throws(romanTime.bind(null, '01:00'), 'I:N');
    });

    it('должен возвращать для 00:01 значение N:I', function () {
        assert.throws(romanTime.bind(null, '00:01'), 'N:I');
    });
});
