let localStorage = window.localStorage;

/**
 * Put global variables here.
 */

var panel_left_morph = function() {
    panel_left = app.panel;

    if (window.innerWidth >= 700) {
        panel_left.open();
        $$(document).find('#btn-panel-left').hide();
    } else if (window.innerWidth < 700) {
        panel_left.close();
        $$(document).find('#btn-panel-left').show();
    }
}

window.onresize = function() {
    panel_left_morph();
}