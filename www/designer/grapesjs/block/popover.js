blockManager.add('static', {
    label: 'static',
    attributes: {
        class: 'fa fa-square',
        title: 'static'
    },
    content: '  <div class="popover">' +
        '  <div class="popover-angle"></div>' +
        '  <!-- Popover content -->' +
        '  <div class="popover-inner"></div>' +
        '</div>',
    category: {
        label: 'Popover',
        open: false
    }
});

blockManager.add('dynamic', {
    label: 'dynamic',
    attributes: {
        class: 'fa fa-square',
        title: 'dynamic'
    },
    content: '<p>' +
        '<a class="link dynamic-popover" href="#"></a>' +
        '</p>',
    category: {
        label: 'Popover',
        open: false
    }
});