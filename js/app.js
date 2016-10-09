requirejs.config({
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require(
    [
        'model',
        'view',
        'controller',
        'jquery'
    ],
    function(Model, View, Controller, $) {
        var firstToDoList = ['Learn JavaScript', 'Learn ES6', 'Learn Angular'];
        var model = new Model(firstToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
    }
);
