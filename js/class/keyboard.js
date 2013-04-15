$.Class('Keyboard', {

    _events : null,
    _block : null,

    init : function () {
        var self = this;
        this._events = {};
        $('body').keydown(function (e) {
            if (self._block) {
                return;
            }
            self._call(e.which);
        })
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

    _call : function (keyKode) {
        if (this._events[keyKode]) {
            for (var i in this._events[keyKode]) {
                this._events[keyKode][i]();
            }
        }
    }

})
