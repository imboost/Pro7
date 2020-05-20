blockManager.add('Determinate', {
    label: 'Determinate',
    attributes: {
        class: 'fa fa-square',
        title: 'Determinate'
    },
    content: '  <div class="progressbar" data-progress="20">' +
        '  <span></span>' +
        '</div>',
    category: {
        label: 'Progress Bar',
        open: false
    }
});

blockManager.add('Infinite', {
    label: 'Infinite',
    attributes: {
        class: 'fa fa-square',
        title: 'Infinite'
    },
    content: '<div class="progressbar-infinite"></div>',
    category: {
        label: 'Progress Bar',
        open: false
    }
});