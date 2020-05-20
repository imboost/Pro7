blockManager.add('timeline_vertical', {
    label: 'Vertical Default',
    attributes: {
        class: 'fa fa-square',
        title: 'Vertical Default'
    },
    content: '<div id="vertical-timeline" class="timeline">' +
        '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_vertical_side', {
    label: 'Vertical Side',
    attributes: {
        class: 'fa fa-square',
        title: 'Vertical Side by Side'
    },
    content: '<div class="timeline timeline-sides">' +
        '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>' +
        '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_vertical_tablet_side', {
    label: 'Vertical Tablet Side',
    attributes: {
        class: 'fa fa-square',
        title: 'Vertical Tablet Side by Side'
    },
    content: '<div class="timeline tablet-sides">' +
        '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>' +
        '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item', {
    label: 'Item',
    attributes: {
        class: 'fa fa-square',
        title: 'Item'
    },
    content: '<div class="timeline-item">' +
        '  <div class="timeline-item-date">21 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">Plain text item</div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item_inner', {
    label: 'Item Inner',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Inner'
    },
    content: '<div class="timeline-item">' +
        '  <div class="timeline-item-date">22 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">' +
        '    <div class="timeline-item-inner">Another text goes here</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item_special', {
    label: 'Item Special',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Special'
    },
    content: '<div class="timeline-item">' +
        '  <div class="timeline-item-date">23 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">' +
        '    <div class="timeline-item-time">12:33</div>' +
        '    <div class="timeline-item-title">Item Title</div>' +
        '    <div class="timeline-item-subtitle">Item Subtitle</div>' +
        '    <div class="timeline-item-text">Item Text</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item_special_additional', {
    label: 'Item Special Additional',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Special Additional'
    },
    content: '<div class="timeline-item-time">12:33</div>' +
        '    <div class="timeline-item-title">Item Title</div>' +
        '    <div class="timeline-item-subtitle">Item Subtitle</div>' +
        '    <div class="timeline-item-text">Item Text</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item_special_inner', {
    label: 'Item Special Inner',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Special Inner'
    },
    content: '<div class="timeline-item">' +
        '  <div class="timeline-item-date">23 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content">' +
        '   <div class="timeline-item-inner">' +
        '       <div class="timeline-item-time">12:33</div>' +
        '       <div class="timeline-item-title">Item Title</div>' +
        '       <div class="timeline-item-subtitle">Item Subtitle</div>' +
        '       <div class="timeline-item-text">Item Text</div>' +
        '   </div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});

blockManager.add('timeline_item_card', {
    label: 'Item Card',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Card'
    },
    content: '<div class="timeline-item">' +
        '  <div class="timeline-item-date">27 <small>DEC</small></div>' +
        '  <div class="timeline-item-divider"></div>' +
        '  <div class="timeline-item-content card">' +
        '    <div class="card-header">Card header</div>' +
        '    <div class="card-content card-content-padding">Card content</div>' +
        '    <div class="card-footer">Card footer</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Timeline',
        open: false
    }
});