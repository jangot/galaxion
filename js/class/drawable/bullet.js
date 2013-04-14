

Drawable.Abstract('Drawable.Bullet', {

    _interval : null,
    _step : null,

    init : function (area, id) {
        this._super(area, id);

        this._height = 5;
        this._width = 2;
        this._step = 10;
    },

    draw : function () {
        var ctx = this._context();
        ctx.fillRect(
            this._position.x,
            this._position.y,
            this._width,
            this._height
        );
    },

    destroy : function () {
        this._super();
    },

    move : function () {
        this._position.y = this._position.y - this._step;
        if (this._position.y < 0) {
            this.destroy();
        }
    }

});
