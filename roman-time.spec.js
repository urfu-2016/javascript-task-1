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
    it('должен выбрасывать исключение TypeError для 22.3:00', function () {
        assert.throws(romanTime.bind(null, '22.3:00'), TypeError);
    });
    it('должен выбрасывать исключение TypeError для :00', function () {
        assert.throws(romanTime.bind(null, ':00'), TypeError);
    });
    it('должен выбрасывать исключение TypeError для Number 20', function () {
        assert.throws(romanTime.bind(null, 20), TypeError);
    });
    it('должен выбрасывать исключение TypeError для undefined', function () {
        assert.throws(romanTime.bind(null, undefined), TypeError);
    });
    it('должен выбрасывать исключение TypeError для 1a:27', function () {
        assert.throws(romanTime.bind(null, '1a:27'), TypeError);
    });
    it('должен выбрасывать исключение TypeError для NaN', function () {
        assert.throws(romanTime.bind(null, NaN), TypeError);
    });
    it('должен выбрасывать исключение TypeError для NaN:15', function () {
        assert.throws(romanTime.bind(null, 'NaN:15'), TypeError);
    });
});
