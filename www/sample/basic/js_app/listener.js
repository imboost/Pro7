$$(document).on('click', '#btn-close', function() {
    var window = remote.getCurrentWindow();
    window.close();
});

$$(document).on('click', '#btn-minimize', function() {
    var window = remote.getCurrentWindow();
    window.minimize();
});