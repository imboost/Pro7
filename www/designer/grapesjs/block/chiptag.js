blockManager.add('chip_layout', {
    label: 'Layout',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="block-title">Chips Tags</div>' +
        '<div class="block block-strong">' +
        '   <div class="chip">' +
        '       <div class="chip-label">Default Chip</div>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});

blockManager.add('chip_text', {
    label: 'Text',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="chip">' +
        '   <div class="chip-label">Default Chip</div>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});

blockManager.add('chip_icon', {
    label: 'Icon',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="chip">' +
        '   <div class="chip-media bg-color-blue">' +
        '       <i class="material-icons">add_circle</i>' +
        '   </div>' +
        '   <div class="chip-label">Add Contact</div>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});

blockManager.add('chip_contact', {
    label: 'Contact',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="chip">' +
        '   <div class="chip-media"><img src="http://lorempixel.com/64/64/people/9/"/></div>' +
        '   <div class="chip-label">Adam Smith</div>' +
        '</div>' +
        '<div class="chip">' +
        '   <div class="chip-media bg-color-pink">J</div>' +
        '   <div class="chip-label">Jennifer</div>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});

blockManager.add('chip_deleteable', {
    label: 'Deleteable',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="chip">' +
        '   <div class="chip-label">Example Chip</div><a href="#" class="chip-delete"></a>' +
        '</div>' +
        '<div class="chip">' +
        '   <div class="chip-media bg-color-pink">J</div>' +
        '   <div class="chip-label">Jennifer</div><a href="#" class="chip-delete"></a>' +
        '</div>' +
        '<div class="chip">' +
        '   <div class="chip-media"><img src="http://lorempixel.com/64/64/people/9/"/></div>' +
        '   <div class="chip-label">Adam Smith</div><a href="#" class="chip-delete"></a>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});

blockManager.add('chip_color', {
    label: 'Color',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="chip color-green">' +
        '   <div class="chip-label">Green Chip</div>' +
        '</div>',
    category: {
        label: 'Chips/Tags',
        open: false
    }
});