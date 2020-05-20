blockManager.add('single', {
    label: 'single',
    attributes: {
        class: 'fa fa-square',
        title: 'single'
    },
    content: '<div class="range-slider range-slider-init">' +
        '<input type="range" min="0" max="100" step="1" value="10">' +
        '</div>',
    category: {
        label: 'Range Slider',
        open: false
    }
});

blockManager.add('double', {
    label: 'double',
    attributes: {
        class: 'fa fa-square',
        title: 'double'
    },
    content: '<div class="range-slider"></div>',
    category: {
        label: 'Range Slider',
        open: false
    }
});