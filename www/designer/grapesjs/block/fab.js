blockManager.add('fab_single', {
    label: 'Single',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="fab fab-right-bottom color-pink">' +
        '  <a href="#">' +
        '    <i class="icon material-icons">add</i>' +
        '  </a>' +
        '</div>',
    category: {
        label: 'FAB',
        open: false
    }
});

blockManager.add('fab_link', {
    label: 'Link',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="fab fab-right-bottom color-pink">' +
        '  <a href="#">' +
        '    <i class="icon material-icons">add</i>' +
        '    <i class="icon material-icons">close</i>' +
        '  </a>' +
        '  <div class="fab-buttons fab-buttons-top">' +
        '    <a href="">1</a>' +
        '    <a href="">2</a>' +
        '    <a href="">3</a>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'FAB',
        open: false
    }
});

blockManager.add('fab_link_center', {
    label: 'Link Center',
    attributes: {
        class: 'fa fa-square'
    },
    content: '<div class="fab fab-center-center color-pink">' +
        '  <a href="#">' +
        '    <i class="icon material-icons">add</i>' +
        '    <i class="icon material-icons">close</i>' +
        '  </a>' +
        '  <div class="fab-buttons fab-buttons-center">' +
        '    <a href="">1</a>' +
        '    <a href="">2</a>' +
        '    <a href="">3</a>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'FAB',
        open: false
    }
});

blockManager.add('fab_text', {
    label: 'Text',
    attributes: {
        class: 'fa fa-square'
    },
    content: ' <div class="fab fab-extended fab-center-bottom color-red">' +
        '   <a href="#">' +
        '       <i class="icon f7-icons">plus</i>' +
        '       <i class="icon material-icons md-only">add</i>' +
        '       <div class="fab-text">Create</div>' +
        '   </a>' +
        '</div>',
    category: {
        label: 'FAB',
        open: false
    }
});