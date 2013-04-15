

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
        var x = this._position.x;
        var y = this._position.y;
        var context = this._context();

        context.fillStyle = '68a8ff';
        context.fillRect(x, y, this._width, this._height);

        context.fillStyle = 'fffd68';
        context.fillRect(x + 3, y + 9, 1, 3);
        context.fillRect(x + 5, y + 9, 1, 3);
        context.fillRect(x + 7, y + 9, 2, 3);
        context.fillRect(x + 10, y + 9, 1, 3);
        context.fillRect(x + 12, y + 9, 1, 3);

        context.fillStyle = '000000';
        context.fillRect(x, y, 1, 4);
        context.fillRect(x + 4, y, 8, 4);
        context.fillRect(x + 15, y, 1, 4);
        context.fillRect(x, y + 9, 2, 3);
        context.fillRect(x + 14, y + 9, 2, 3);
        context.fillRect(x + 2, y + 13, 1, 3);
        context.fillRect(x + 4, y + 13, 1, 3);
        context.fillRect(x + 6, y + 13, 1, 3);
        context.fillRect(x + 9, y + 13, 1, 3);
        context.fillRect(x + 11, y + 13, 1, 3);
        context.fillRect(x + 13, y + 13, 1, 3);
    },

    isDead : function () {
        return this._dead;
    },

    kill : function () {
        this._dead = true;
    }
});
