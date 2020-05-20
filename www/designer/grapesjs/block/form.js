blockManager.add('form_inline', {
    label: 'Form Inline',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Inline'
    },
    content: '<div class="list inline-labels no-hairlines-md">' +
        '  <ul>' +
        '  <li class="item-content item-input"></li>' +
        '  <li class="item-content item-input"></li>',

    category: {
        label: 'Form',
        open: false
    }
});

blockManager.add('form_stacked', {
    label: 'Form Stacked',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Stacked'
    },
    content: '<div class="list no-hairlines-md">' +
        '  <ul>' +
        '    <li class="item-content item-input"></li>' +
        '    <li class="item-content item-input"></li>',
    category: {
        label: 'Form',
        open: false
    }
});

blockManager.add('form_only_input', {
    label: 'Form Only Input',
    attributes: {
        class: 'fa fa-square',
        title: 'Form Only Input'
    },
    content: '<div class="block-title">Only Inputs Inset</div>' +
        '<div class="list inset">' +
        '  <ul>' +
        '    <li class="item-content item-input"></li>' +
        '    <li class="item-content item-input"></li>',
    category: {
        label: 'Form',
        open: false
    }
});