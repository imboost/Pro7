var $$ = Dom7;

var app = new Framework7({
    root: '#app',
    id: 'com.app.myapp',
    name: 'MyApp',
    theme: 'auto',
    routes: routes,
    pushState: false,
    touch: {
        fastclick: true,
        materialRipple: false
    },
});

var view_main = app.views.create('#view-main', {
    url: '/'
});