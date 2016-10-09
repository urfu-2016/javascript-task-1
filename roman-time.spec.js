/* eslint-env mocha */
'use strict';

var assert = require('assert');
var romanTime = require('./roman-time');

describe('Модуль roman-time', function () {
    it('должен выбрасывать исключение TypeError для 9:10', function () {
        assert.throws(romanTime.bind(null, '9:10'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 09:1', function () {
        assert.throws(romanTime.bind(null, '09:1'), TypeError);
    });

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
    it('должен выбрасывать исключение TypeError для 2d:00', function () {
        assert.throws(romanTime.bind(null, '2d:00'), TypeError);
    });
});
