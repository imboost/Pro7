$$(document).on('page:afterin', '.page[data-name="home"]', function(callback) {
    if (navigator.standalone) {
        $$(document).find('#btn-install').hide();
    } else if (matchMedia('(display-mode: standalone)').matches) {
        $$(document).find('#btn-install').hide();
    } else {
        $$(document).find('#btn-install').show();
    }
});

$$(document).on('page:afterin', '.page[data-name="about"]', function(callback) {
    console.log('about');
});

$$(document).on('tab:show', '#tab-home', function() {
    $$(document).find('#page-title').html('Home');
});

$$(document).on('tab:show', '#tab-info', function() {
    $$(document).find('#page-title').html('Info');
});

$$(document).on('click', '#btn-install', function() {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            $$(document).find('#btn-install').hide();

            window.location.reload();
        } else {
            $$(document).find('#btn-install').show();
        }
    });
});