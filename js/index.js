function sc(src) {
    document.write('<script  type="text/javascript" src="js/'+ src +'.js"></script>');
}

sc('libs/jquery-1.9.1');
sc('libs/jquerymx-3.2.custom.min');

sc('constants');

//class
sc('class/keyboard');

sc('class/drawable/abstract');
sc('class/drawable/user');
sc('class/drawable/enemy');
sc('class/drawable/enemy/item');
sc('class/drawable/bullet');
sc('class/drawable/alert');


sc('class/area');




sc('class/application')

sc('app');
