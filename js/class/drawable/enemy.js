Drawable.Abstract('Drawable.Enemy',{

    SECOND_LINE_ITEM_INDEX : 9,
    THIRD_LINE_ITEM_INDEX : 19,
    ROUTE_LEFT : 'left',
    ROUTE_RIGHT : 'right'

}, {

    _items : null,
    _route : null,

    init : function (area, id) {
        this._super(area, id);
        this._height = 100;
        this._width = area.getWidth() - 30;

        this._items = [];
        this
            .setPosition(17, 20)
            ._createItems()
        ;

        this._route = this.constructor.ROUTE_LEFT;
    },

    draw : function () {
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

    getHeight : function () {
        var result = 0;
        var lastIndexItemIsLive = this._getLastLiveItemIndex();
        if ($.type(lastIndexItemIsLive) !== 'null') {
            result += 22;
        }
        if (lastIndexItemIsLive > this.constructor.SECOND_LINE_ITEM_INDEX) {
            result += 28;
        }
        if (lastIndexItemIsLive > this.constructor.THIRD_LINE_ITEM_INDEX) {
            result += 16;
        }

        return result;
    },

    move : function () {
        var stepVertical = 3;
        var stepHorizontally = 3
        switch (this._route) {
            case this.constructor.ROUTE_LEFT:
                this._position.x -= stepHorizontally;
                if (this._position.x < 4) {
                    this._route = this.constructor.ROUTE_RIGHT;
                    this._position.x = 4;
                    this._position.y += stepVertical;
                }
                break;
            case this.constructor.ROUTE_RIGHT:
                this._position.x += stepHorizontally;
                var maxRightPosition = this._area.getWidth() - this.getWidth();
                if (this._position.x > maxRightPosition) {
                    this._route = this.constructor.ROUTE_LEFT;
                    this._position.x = maxRightPosition;
                    this._position.y += stepVertical;
                }
                break;
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
        if (index > this.constructor.SECOND_LINE_ITEM_INDEX) {
            mainY += 22;
            x -= this._width;// + 10;
        } if (index > this.constructor.THIRD_LINE_ITEM_INDEX) {
            mainY += 22;
            x -= this._width;// + 10;
        }

        return {
            x : x,
            y : mainY
        }
    },

    _getLastLiveItemIndex : function () {
        for (var i = this._items.length -1; i >= 0; i--) {
            if (!this._items[i].isDead()) {
                return i;
            }
        }
        return null;
    }
});

