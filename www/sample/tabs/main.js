var deferredPrompt;

/**
 * Prompt install on addressbar 
 */
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});

/**
 * Load and prevent back button
 */
window.addEventListener('load', function() {
    window.history.pushState({}, '');
});

/**
 * Popstate page history and back button handler using framework7 
 */
window.addEventListener('popstate', function() {
    window.history.pushState({}, '');

    page_history = app.views.main.history;
    page_count = page_history.length;
    page_current = page_history[page_count - 1];
    page_previous = page_history[page_count - 2];

    console.log(page_history);
    console.log(page_count);
    console.log(page_current);
    console.log(page_previous);

    if (page_current === '/') {
        app.dialog.alert('Close Application ?');
    } else {
        app.views.main.router.back();
    }
});