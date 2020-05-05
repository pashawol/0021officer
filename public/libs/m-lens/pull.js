'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatten = flatten;

var _mori = require('mori');

var _mori2 = _interopRequireDefault(_mori);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flatten(parent, tree) {
    return _mori2.default.reduce(function (acc, val) {
        if (_mori2.default.isMap(val)) {
            return _mori2.default.reduceKV(function (acc, key, val) {
                var f = flatten(_mori2.default.conj(parent, key), val);
                return _mori2.default.reduce(_mori2.default.conj, acc, f);
            }, acc, val);
        }
        return _mori2.default.conj(acc, _mori2.default.conj(parent, val));
    }, _mori2.default.vector(), tree);
}