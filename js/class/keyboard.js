$.Class('Keyboard', {

    _events : null,
    _block : null,
    _pressed : null,


    init : function () {
        var self = this;
        this._events = {};
        this._pressed = {};

        $('body').keydown(function (e) {
            self._pressed[e.which] = true;
        });
        $('body').keyup(function (e) {
            self._pressed[e.which] = false;
        });
        this._interval = setInterval(function () {
            self._call();
        }, 100);
    },

    onPress : function (keyKode, cb) {
        if ($.type(keyKode) !== 'array') {
            keyKode = [keyKode];
        }

        for (var i in keyKode) {
            this._addEvent(keyKode[i], cb);
        }
        return this;
    },

    block : function () {
        this._block = true;
        return this;
    },

    unblock : function () {
        this._block = false;
        return this;
    },

    _addEvent : function (key, cb) {
        this._events[key] = this._events[key] || [];
        this._events[key].push(cb);
        return this;
    },

    _call : function () {
        for (var key in this._pressed) {
            if(!this._pressed[key]) {
                continue;
            }
            if (this._events[key]) {
                for (var i in this._events[key]) {
                    this._events[key][i]();
                }
            }
        }
    }

})
