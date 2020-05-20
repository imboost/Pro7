// 1. Text
blockManager.add('text_floating', {
    label: 'Text Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'Text Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">Text</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="text" placeholder="text">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 2. Password
blockManager.add('password_floating', {
    label: 'Password Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'Password Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">Password</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="password" placeholder="password">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 3. E-mail
blockManager.add('e-mail_floating', {
    label: 'E-mail Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'E-mail Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">E-mail</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="email" placeholder="e-mail">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 4. URL
blockManager.add('url_floating', {
    label: 'URL Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'URL Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">URL</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="url" placeholder="url">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 5. Number
blockManager.add('number_floating', {
    label: 'Number Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'Number Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">Number</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="text" placeholder="Enter number" required validate pattern="[0-9]*" data-error-message="Only numbers please!">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 6. Phone
blockManager.add('phone_floating', {
    label: 'Phone Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'Phone Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">Phone</div>' +
        '    <div class="item-input-wrap">' +
        '      <input type="tel" placeholder="Your phone number">' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});

// 7. Text Area
blockManager.add('text_area_floating', {
    label: 'Text Area Floating',
    attributes: {
        class: 'fa fa-square',
        title: 'Text Area Floating'
    },
    content: '  <div class="item-media">' +
        '    <i class="icon demo-list-icon"></i>' +
        '  </div>' +
        '  <div class="item-inner">' +
        '    <div class="item-title item-floating-label">Text Area</div>' +
        '    <div class="item-input-wrap">' +
        '      <textarea class="resizable" placeholder="text"></textarea>' +
        '      <span class="input-clear-button"></span>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Form Item Floating',
        open: false
    }
});