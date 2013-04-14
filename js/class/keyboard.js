$.Class('Keyboard', {

    _events : null,

    init : function () {
        var self = this;
        this._events = {};
        $('body').keydown(function (e) {
            //console.log(e.which);
            self._call(e.which);
        })
    },

    onPress : function (keyKode, cb) {
        this._events[keyKode] = this._events[keyKode] || [];
        this._events[keyKode].push(cb);
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
