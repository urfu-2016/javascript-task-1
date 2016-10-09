/* eslint-env mocha */
'use strict';

var assert = require('assert');
var convertToRomanTime = require('./roman-time');

describe('Модуль roman-time', function () {
    it('должен возвращать для 09:10 значение IX:X', function () {
        assert.strictEqual(convertToRomanTime('09:10'), 'IX:X');
    });

    it('должен возвращать для 00:00 значение N:N', function () {
        assert.strictEqual(convertToRomanTime('00:00'), 'N:N');
    });

    it('должен возвращать для 23:59 значение XXIII:LIX', function () {
        assert.strictEqual(convertToRomanTime('23:59'), 'XXIII:LIX');
    });

    it('должен выбрасывать исключение TypeError для 24:00', function () {
        assert.throws(convertToRomanTime.bind(null, '24:00'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для aa:bb', function () {
        assert.throws(convertToRomanTime.bind(null, 'aa:bb'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для null', function () {
        assert.throws(convertToRomanTime.bind(null, null), TypeError);
    });

    it('должен выбрасывать исключение TypeError для undefined', function () {
        assert.throws(convertToRomanTime.bind(null, undefined), TypeError);
    });

    it('должен выбрасывать исключение TypeError для :::::', function () {
        assert.throws(convertToRomanTime.bind(null, ":::::"), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 001:1', function () {
        assert.throws(convertToRomanTime.bind(null, "001:1"), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 9:30', function () {
        assert.strictEqual(convertToRomanTime("90030"), "IX:XXX");
    });
});
