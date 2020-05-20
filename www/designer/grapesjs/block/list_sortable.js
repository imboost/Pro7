blockManager.add('list_sortable', {
    label: 'List Sortable',
    attributes: {
        class: 'fa fa-square',
        title: 'List Sortable'
    },
    content: '<div class="list sortable" data-sortable=".sortable">' +
        '<ul>' +
        '<a class="link sortable-toggle" data-sortable=".sortable">Toggle</a>' +
        '  <li>' +
        '    <div class="item-content">' +
        '      <div class="item-media"><i class="icon icon-f7"></i></div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title">1 Jenna Smith</div>' +
        '        <div class="item-after">CEO</div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="sortable-handler"></div>' +
        '  </li>' +
        '  <li>' +
        '    <div class="item-content">' +
        '      <div class="item-media"><i class="icon icon-f7"></i></div>' +
        '      <div class="item-inner">' +
        '        <div class="item-title">2 John Doe</div>' +
        '        <div class="item-after">Director</div>' +
        '      </div>' +
        '    </div>' +
        '    <div class="sortable-handler"></div>' +
        '  </li>' +
        '</ul>' +
        '</div>',
    category: {
        label: 'List Sortable',
        open: false
    }
});