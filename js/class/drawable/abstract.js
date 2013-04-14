$.Class('Drawable.Abstract', {

    _area : null,
    _height : null,
    _width : null,
    _position : null,
    _id : null,
    _onDestroy : null,

    init : function (area, id) {
        this._id = id;
        this._area = area;
        this._position = {
            x : 10,
            y : 10
        }
        this._height = 0;
        this._width = 0;
        this._onDestroy = [];
    },

    getId : function () {
        return this._id;
    },

    draw : function () {},

    getHeight : function () {
        return this._height;
    },

    getWidth : function () {
        return this._width;
    },

    setPosition : function (x, y) {
        this._position = {
            x : x,
            y : y
        }
        return this;
    },

    getPosition : function () {
        return this._position;
    },

    move : function (x, y) {
        var newX = this._position.x + x;
        var newY = this._position.y + y;
        this.setPosition(newX, newY);
        return this;
    },

    onDestroy : function (cb) {
        if ($.type(cb) !== 'function') {
            return;
        }
        this._onDestroy.push(cb);
    },

    destroy : function () {
        for (var i in this._onDestroy) {
            try {
                this._onDestroy[i](this._id);
            } catch (e) {
                console.log(e);
            }

        }
    },

    isCross : function (object) {
        var XColl=false;
        var YColl=false;

        var position1 = this.getPosition();
        var position2 = object.getPosition();

        if (
            (position1.x + this.getWidth() >= position2.x)
                && (position1.x <= position2.x + object.getWidth())
            ) XColl = true;
        if (
            (position1.y + this.getHeight() >= position2.y)
                && (position1.y <= position2.y + object.getHeight())
            ) YColl = true;

        return (XColl&YColl);
    },

    _context : function () {
        var ctx = this._area.getContext();
        ctx.fillStyle = '000000';
        return ctx;
    }
    
});
