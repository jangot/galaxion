Drawable.Abstract('Drawable.User', {

    init : function (area, id) {
        this._super(area, id);
        this._height = 11;
        this._width = 11;

        var y = this._area.getHeight() - this._height;
        this.setPosition(0, y);
    },

    draw : function () {
        var context = this._context();

        context.beginPath();
        context.fillStyle = 'ff9066';
        context.fillRect(
            this._position.x,
            this._position.y + 2,
            2,
            6
        );
        context.fillRect(
            this._position.x + 9,
            this._position.y + 2,
            2,
            6
        );
        context.fillRect(
            this._position.x + 2,
            this._position.y + 4,
            7,
            3
        );
        context.fillRect(
            this._position.x + 5,
            this._position.y,
            1,
            4
        );

        context.fillStyle = 'fffd68';
        context.fillRect(
            this._position.x,
            this._position.y + 8,
            2,
            2
        );
        context.fillRect(
            this._position.x + 9,
            this._position.y + 8,
            2,
            2
        );
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
