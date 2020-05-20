blockManager.add('default smart select', {
    label: 'default',
    attributes: {
        class: 'fa fa-square',
        title: 'default'
    },
    content: '<div class = "list" >' +
        '  <ul>' +
        '    <li>' +
        '      <a href="#" class="item-link smart-select">' +
        '        <select name="fruits">' +
        '          <option value="apple" selected>Apple</option>' +
        '          <option value="pineapple">Pineapple</option>' +
        '        </select>' +
        '        <div class="item-content">' +
        '          <div class="item-inner">' +
        '            <div class="item-title">Fruit</div>' +
        '            <div class="item-after">Apple</div>' +
        '          </div>' +
        '        </div>' +
        '      </a>' +
        '    </li>' +
        '  </ul>' +
        '</div>',
    category: {
        label: 'Smart Select',
        open: false
    }
});

blockManager.add('multiple select + optgroup', {
    label: 'multiple select + optgroup',
    attributes: {
        class: 'fa fa-square',
        title: 'multiple select + optgroup'
    },
    content: '<div class = "list" >' +
        '<ul>' +
        '<li>' +
        '  <a href="#" class="item-link smart-select">' +
        '    <select name="car" multiple>' +
        '      <optgroup label="Japanese">' +
        '        <option value="honda" selected>Honda</option>' +
        '        <option value="lexus">Lexus</option>' +
        '      </optgroup>' +
        '      <optgroup label="German">' +
        '        <option value="audi" selected>Audi</option>' +
        '        <option value="bmw">BMW</option>' +
        '      </optgroup>' +
        '      <optgroup label="American">' +
        '        <option value="cadillac">Cadillac</option>' +
        '        <option value="chrysler">Chrysler</option>' +
        '      </optgroup>' +
        '    </select>' +
        '    <div class="item-content">' +
        '      <div class="item-inner">' +
        '        <div class="item-title">Car</div>' +
        '      </div>' +
        '    </div>' +
        '  </a>' +
        '</li>' +
        '</ul>' +
        '</div>',
    category: {
        label: 'Smart Select',
        open: false
    }
});
blockManager.add('Different display value', {
    label: 'Different display value',
    attributes: {
        class: 'fa fa-square',
        title: 'Different display value'
    },
    content: '<div class = "list" >' +
        '<ul>' +
        '        <li>' +
        '  <a href="#" class="item-link smart-select">' +
        '    <select name="days">' +
        '      <option value="monday" selected data-display-as="Mon">Monday</option>' +
        '      <option value="tuesday" data-display-as="Tue">Tuesday</option>' +
        '      <option value="wednesday" data-display-as="Wed">Wednesday</option>' +
        '      <option value="thursday" data-display-as="Thu">Thursday</option>' +
        '      <option value="friday" data-display-as="Fri">Friday</option>' +
        '      <option value="saturday" data-display-as="Sat">Saturday</option>' +
        '      <option value="sunday" data-display-as="Sun">Sunday</option>' +
        '    </select>' +
        '    <div class="item-content">' +
        '      <div class="item-inner">' +
        '        <div class="item-title">Day</div>' +
        '      </div>' +
        '    </div>' +
        '  </a>' +
        '</li>' +
        '</ul>' +
        '</div>',
    category: {
        label: 'Smart Select',
        open: false
    }
});