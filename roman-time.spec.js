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
 @@ -20,4 +28,7 @@ describe('Модуль roman-time', function () {
        it('должен выбрасывать исключение TypeError для 24:00', function () {
            assert.throws(romanTime.bind(null, '24:00'), TypeError);
        });
            it('должен выбрасывать исключение TypeError для 2d:00', function () {
                    assert.throws(romanTime.bind(null, '2d:00'), TypeError);
                });
    });
