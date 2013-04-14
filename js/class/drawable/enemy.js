Drawable.Abstract('Drawable.Enemy', {

    _items : null,

    init : function (area, id) {
        this._super(area, id);
        this._height = 100;
        this._width = area.getWidth() - 40;

        this._items = [];
        this
            .setPosition(17, 20)
            ._createItems()
        ;

    },

    draw : function () {
//        var ctx = this._context();
//        ctx.fillStyle = '20b2aa';
//        ctx .fillRect(
//            this._position.x,
//            this._position.y,
//            this._width,
//            this._height
//        );

        for (var i in this._items) {
            if (!this._items[i].isDead()) {
                var position = this._getItemPosition(i);
                this._items[i]
                    .setPosition(position.x, position.y)
                    .draw()
                ;
            }
        }
    },

    killItem : function (id) {
        for (var i in this._items) {
            var itemId = this._items[i].getId();
            if (itemId == id) {
                this._items[i].kill();
                return;
            }
        }
    },

    isCross : function (object) {
        if (!this._super(object)) {
            return false;
        }
        for (var i in this._items) {
            if (this._items[i].isCross(object) && !this._items[i].isDead()) {
                return this._items[i]._id;
            }
        }
    },

    _createItems : function () {
        for (var i = 0; i < 30; i++) {
            var id = CONST.ENEMY_ITEM_ID_PREFIX + i;
            var item = new Drawable.Enemy.Item(this._area, id);
            var position = this._getItemPosition(i);
            item.setPosition(position.x, position.y);

            this._items.push(item);
        }
        return this;
    },

    _getItemPosition : function (index) {
        var mainY = this._position.y;
        var x = this._position.x + Number(index) * Number(22);
        if (index > 9) {
            mainY += 22;
            x -= this._width + 10;
        } if (index > 19) {
            mainY += 22;
            x -= this._width + 10;
        }


        return {
            x : x,
            y : mainY
        }
    }
});

