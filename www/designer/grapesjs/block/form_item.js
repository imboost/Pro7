// 1. Text
blockManager.add('text', {
    label: 'Text',
    attributes: {
        class: 'fa fa-square',
        title: 'Text'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Text</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="text" placeholder="text">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 2. Password
blockManager.add('password', {
    label: 'Password',
    attributes: {
        class: 'fa fa-square',
        title: 'Password'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Password</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="password" placeholder="password">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 3. E-mail
blockManager.add('e-mail', {
    label: 'E-mail',
    attributes: {
        class: 'fa fa-square',
        title: 'E-mail'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">E-mail</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="email" placeholder="e-mail">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 4. URL
blockManager.add('url', {
    label: 'URL',
    attributes: {
        class: 'fa fa-square',
        title: 'URL'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">URL</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="url" placeholder="url">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 5. Number
blockManager.add('number', {
    label: 'Number',
    attributes: {
        class: 'fa fa-square',
        title: 'Number'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Number</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="text" placeholder="Enter number" required validate pattern="[0-9]*" data-error-message="Only numbers please!">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 6. Phone
blockManager.add('phone', {
    label: 'Phone',
    attributes: {
        class: 'fa fa-square',
        title: 'Phone'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Phone</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="tel" placeholder="Your phone number">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 7. Date
blockManager.add('date', {
    label: 'Date',
    attributes: {
        class: 'fa fa-square',
        title: 'Date'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Date</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="date" value="2014-04-30" placeholder="Please choose...">' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 8. Date Time
blockManager.add('date_time', {
    label: 'Date Time',
    attributes: {
        class: 'fa fa-square',
        title: 'Date Time'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Date Time</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="datetime-local" placeholder="Please choose...">' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 9. Text Area
blockManager.add('text_area', {
    label: 'Text Area',
    attributes: {
        class: 'fa fa-square',
        title: 'Text Area'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Text Area</div>' +
        '    <div class="item-input-wrap">' +
        '      <textarea class="resizable" placeholder="text"></textarea>' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 10. Select
blockManager.add('select', {
    label: 'Select',
    attributes: {
        class: 'fa fa-square',
        title: 'Select'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Select</div>' +
        '    <div class="item-input-wrap">' +
        '       <select placeholder="Please choose...">' +
        '<option value="Male">Male</option>' +
        '<option value="Female">Female</option>' +
        '</select>' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});

// 11. Range Slider
blockManager.add('range_slider', {
    label: 'Range Slider',
    attributes: {
        class: 'fa fa-square',
        title: 'Range Slider'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon material-icons">info</i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-label">Range Slider</div>' +
        '    <div class="item-input-wrap">' +
        '<div class="range-slider">' +
        '<input type="range" min="0" max="100" step="0.1">' +
        '</div>' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item',
        open: false
    }
});