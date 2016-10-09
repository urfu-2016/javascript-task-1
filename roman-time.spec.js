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

    it('должен выбрасывать исключение TypeError для 4:5', function () {
        assert.throws(romanTime.bind(null, '4:5'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 24:00', function () {
        assert.throws(romanTime.bind(null, '24:00'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 23:123', function () {
        assert.throws(romanTime.bind(null, '24:00'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для null', function () {
        assert.throws(romanTime.bind(null, null), TypeError);
    });

    it('должен выбрасывать исключение TypeError для undefined', function () {
        assert.throws(romanTime.bind(null, undefined), TypeError);
    });

    it('должен выбрасывать исключение TypeError для empty', function () {
        assert.throws(romanTime.bind(null, ''), TypeError);
    });

    it('должен выбрасывать исключение TypeError для без десяти:три', function () {
        assert.throws(romanTime.bind(null, 'без десяти:три'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 1:2:3', function () {
        assert.throws(romanTime.bind(null, '1:2:3'), TypeError);
    });

    it('должен выбрасывать исключение TypeError для 1a:22', function () {
        assert.throws(romanTime.bind(null, '1a:22'), TypeError);
    });
});
