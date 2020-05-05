'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.at = at;
exports.pull = pull;
exports.as = as;
exports.view = view;
exports.update = update;
exports.join = join;

var _mori = require('mori');

var _mori2 = _interopRequireDefault(_mori);

var _pull = require('./pull');

var _overlay = require('./overlay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function size(a) {
    if (a) {
        return a.length;
    }
    return 0;
}

function makeLens(_g, _u) {
    return function (other) {
        if (other) {
            return {
                g: function g(data) {
                    return _g(other.g(data));
                },
                u: function u(data, f) {
                    return other.u(data, function (d) {
                        return _u(d, f);
                    });
                }
            };
        }

        return {
            g: _g,
            u: _u
        };
    };
}

function at(path) {
    function g(data) {
        return _mori2.default.getIn(data, path);
    }

    function u(data, f) {
        return _mori2.default.updateIn(data, path, f);
    }

    return makeLens(g, u);
}

function pull(tree) {
    function g(data) {
        return _mori2.default.reduce(function (acc, path) {
            return _mori2.default.assocIn(acc, path, _mori2.default.getIn(data, path));
        }, _mori2.default.hashMap(), (0, _pull.flatten)(_mori2.default.vector(), tree));
    }

    function u(data, f) {
        var updated = f(g(data));
        return _mori2.default.reduce(function (acc, path) {
            var paths = _mori2.default.map(_mori2.default.subvec, _mori2.default.repeat(path), _mori2.default.repeat(0), _mori2.default.range(_mori2.default.count(path), 0, -1));

            var r = _mori2.default.some(_mori2.default.identity, _mori2.default.map(function (path) {
                var e = _mori2.default.getIn(updated, path);
                if (e) {
                    return {
                        path: path,
                        value: e
                    };
                }
            }, paths));

            if (r) {
                return _mori2.default.assocIn(acc, r.path, r.value);
            }
            return acc;
        }, data, (0, _pull.flatten)(_mori2.default.vector(), tree));
    }

    return makeLens(g, u);
}

function as(from, to) {
    function g(data) {
        return _mori2.default.assocIn(_mori2.default.hashMap(), to, _mori2.default.getIn(data, from));
    }

    function u(data, f) {
        var updated = f(g(data));
        return _mori2.default.assocIn(data, from, _mori2.default.getIn(updated, to));
    }

    return makeLens(g, u);
}

function view(data, lens) {
    return lens().g(data);
}

function update(data, lens, f) {
    return lens().u(data, f);
}

function joinTwo(lhs, rhs) {
    function g(data) {
        return (0, _overlay.overlay)(lhs().g(data), rhs().g(data));
    }

    function u(data, f) {
        var updated = f(g(data));
        return lhs().u(rhs().u(data, _mori2.default.constantly(updated)), _mori2.default.constantly(updated));
    }

    return makeLens(g, u);
}

function join(x) {
    for (var _len = arguments.length, xs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        xs[_key - 1] = arguments[_key];
    }

    if (size(xs) > 1) {
        return joinTwo(x, join.apply(undefined, xs));
    } else if (size(xs) > 0) {
        return joinTwo(x, xs[0]);
    } else {
        return x;
    }
}