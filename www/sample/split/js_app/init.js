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
    panel: {
        resizable: true,
        leftBreakpoint: 700,
        visibleBreakpoint: 700,
        collapsedBreakpoint: 700,
    }
});

var view_main = app.views.create('#view-main', {
    url: '/'
});