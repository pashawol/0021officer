'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.overlay = overlay;

var _mori = require('mori');

var _mori2 = _interopRequireDefault(_mori);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function overlay(first, second) {
    if (_mori2.default.isAssociative(first) && _mori2.default.isAssociative(second)) {
        return _mori2.default.reduceKV(function (acc, key, val) {
            var v = val;
            if (_mori2.default.isAssociative(val)) {
                v = overlay(_mori2.default.get(first, key), val);
            }
            return _mori2.default.assoc(acc, key, v);
        }, first, second);
    }
    return second;
}