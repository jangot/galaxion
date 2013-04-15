Drawable.Abstract('Drawable.User', {

    init : function (area, id) {
        this._super(area, id);
        this._height = 11;
        this._width = 11;

        var y = this._area.getHeight() - this._height;
        var x = area.getWidth() / 2 - 5;
        this.setPosition(x, y);
    },

    draw : function () {
        var context = this._context();
        var x = this._position.x;
        var y = this._position.y;

        context.beginPath();
        context.fillStyle = 'ff9066';
        context.fillRect(x, y + 2, 2, 6);
        context.fillRect(x + 9, y + 2, 2, 6);
        context.fillRect(x + 2, y + 4, 7, 3);
        context.fillRect(x + 5, y, 1, 4);

        context.fillStyle = 'fffd68';
        context.fillRect(x, y + 8, 2, 2);
        context.fillRect(x + 9, y + 8, 2, 2);
    },

    toRight : function () {
        this._position.x = this._position.x + 2;
        this._checkPosition();
        return this;
    },

    toLeft : function () {
        this._position.x = this._position.x - 2;
        this._checkPosition()
        return this;
    },

    getGunPosition : function () {
        var x = Math.round(this._width / 2) + this._position.x - 2;
        var y = this._position.y + 1;
        return {
            x : x,
            y : y
        }
    },

    _checkPosition : function () {
        if(this._position.x < 0) {
            this._position.x = 0;
        }
        var areaWidth = this._area.getWidth();
        if ((this._position.x + this._width) > areaWidth) {
            this._position.x = (areaWidth - this._width);
        }
        return this;
    }

});
