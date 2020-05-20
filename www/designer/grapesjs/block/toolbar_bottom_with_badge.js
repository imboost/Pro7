blockManager.add('toolbar_bottom_with_badge', {
    label: 'Toolbar Bottom with Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Toolbar Bottom with Badge'
    },
    content: '<div class="toolbar toolbar-bottom-md tabbar tabbar-labels">' +
        '<div class="toolbar-inner">' +
        '<a href="#tab-1" class="tab-link tab-link-active">' +
        '  <i class="icon icon-fill f7-icons ios-only">email_fill<span class="badge color-green">5</span></i>' +
        '  <i class="icon material-icons md-only">email<span class="badge color-green">5</span></i>' +
        '  <span class="tabbar-label">Inbox</span>' +
        '</a>' +
        '<a href="#tab-2" class="tab-link">' +
        '  <i class="icon f7-icons ios-only">today<span class="badge color-red">7</span></i>' +
        '  <i class="icon material-icons md-only">today<span class="badge color-red">7</span></i>' +
        '  <span class="tabbar-label">Calendar</span>' +
        '</a>' +
        '<a href="#tab-3" class="tab-link">' +
        '  <i class="icon f7-icons ios-only">cloud<span class="badge color-red">1</span></i>' +
        '  <i class="icon material-icons md-only">file_upload<span class="badge color-red">1</span></i>' +
        '  <span class="tabbar-label">Upload</span>' +
        '</a>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Toolbar',
        open: false
    }
});