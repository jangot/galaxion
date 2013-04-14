$.Class('Application', {

    _canvas : null,
    _area : null,
    _userUnit : null,
    _enemy : null,
    _keyboard : null,
    _bullets : null,
    _maxBullets : null,
    _shots : null,

    init : function () {
        this._canvas = $('<canvas width="250" height="400"></canvas>')[0];
        this._keyboard = new Keyboard();
        $('body').append(this._canvas);
        this._maxBullets = 5;
        this._shots = 0;
        this._bullets = {};
    },

    start : function () {
        var self = this;
        this._area = new Area(this._canvas);
        this
            ._createUserUnit()
            ._createEnemy()
            ._setListeners()
        ;
        this._area.draw();
        setInterval(function () {
            self._tik();
        }, 100);
    },

    shot : function () {
        var numBullets = Object.keys(this._bullets).length;
        if (this._maxBullets <= numBullets) {
            return;
        }
        this._shots++;
        var id = this._shots + '_bullet';
        var bullet = new Drawable.Bullet(this._area, id);
        bullet.onDestroy(function () {
            delete this._bullets[id];
        }.bind(this));

        var bulletPosition = this._userUnit.getGunPosition();
        bullet.setPosition(bulletPosition.x, bulletPosition.y);
        this._area.add(id, bullet);
        this._bullets[id] = bullet;
    },

    _tik : function () {
        for (var id in this._bullets) {
            var cross = this._enemy.isCross(this._bullets[id]);
            if (cross) {
                this._enemy.killItem(cross);
                this._bullets[id].destroy();
            } else {
                this._bullets[id].move();
            }
        }
        //this._enemy.move();
        this._area.draw();
    },

    _createUserUnit : function () {
        this._userUnit = new Drawable.User(this._area, CONST.USER_ID);
        this._area.add(CONST.USER_ID, this._userUnit);
        return this;
    },

    _createEnemy : function () {
        this._enemy = new Drawable.Enemy(this._area, CONST.ENEMY_ID);
        this._area.add(CONST.ENEMY_ID, this._enemy);
        return this;
    },

    _setListeners : function () {
        var self = this;
        this._keyboard.onPress(CONST.KEY_LEFT, function () {
            self._userUnit.toLeft()
        });
        this._keyboard.onPress(CONST.KEY_RIGHT, function () {
            self._userUnit.toRight()
        });
        this._keyboard.onPress(CONST.KEY_TOP, function () {
            self.shot();
        });
        return this;
    }

})
