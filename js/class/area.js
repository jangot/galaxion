$.Class('Area', {

    _canvas : null,

    _drawable : null,

    init : function (canvas) {
        this._canvas = canvas;
        this._drawable = {};
    },

    add : function (id, drawable) {
        this._drawable[id] = drawable;
        this._drawable[id].onDestroy(function (idD) {
            this.remove(idD);
        }.bind(this));
        return this;
    },

    remove : function (id) {
        delete this._drawable[id];
        return this;
    },

    draw : function () {
        this._clear();
        for (var id in this._drawable) {
            this._drawable[id].draw();
        }
    },

    getHeight : function () {
        return this._canvas.height;
    },

    getWidth : function () {
        return this._canvas.width;
    },

    getContext : function () {
        return this._canvas.getContext('2d');
    },

    _clear : function () {
        var ctx = this.getContext();
        ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
        return this;
    }

});
