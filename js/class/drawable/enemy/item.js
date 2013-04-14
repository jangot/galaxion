

Drawable.Abstract('Drawable.Enemy.Item', {

    _dead : null,

    init : function (area, id) {
        this._super(area, id);
        this._height = 16;
        this._width = 16;
        this._dead = false;

        this.setPosition(0, 0);
    },

    draw : function () {
        var ctx = this._context();
        ctx.fillStyle = '20b2aa';
        ctx .fillRect(
            this._position.x,
            this._position.y,
            this._width,
            this._height
        );
    },

    isDead : function () {
        return this._dead;
    },

    kill : function () {
        this._dead = true;
    }
});
