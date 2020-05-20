var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    id: 'com.app.myproject',
    name: 'MyProject',
    theme: 'md',
    routes: routes,
    touch: {
        fastclick: true,
        materialRipple: false
    }
});

var view_main = app.views.create('#view-main', {
    url: '/'
});