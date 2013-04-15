Drawable.Abstract('Drawable.Alert', {

    _messege : null,

    init : function (area, id, messege) {
        this._super(area, id);
        this._messege = messege;

        this._height = 11;
        this._width = 11;

        var y = this._area.getHeight()/2;
        var x = this._area.getWidth() / 2 - 40;
        this.setPosition(x, y);
    },

    draw : function (messege) {
        var ctx = this._context();
        ctx.fillStyle = 'dc143c';
        ctx.font = "normal 16px sans-serif";

        ctx.fillText(this._messege, this._position.x, this._position.y);
    }
});
