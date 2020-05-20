blockManager.add('screen', {
    label: 'Screen',
    attributes: {
        class: 'fa fa-square',
        title: 'Screen'
    },
    content: '<div class="page">' +
        '  <div class="navbar">' +
        '    <div class="navbar-inner">' +
        '      <div class="left">' +
        '        <a class="link"><i class="material-icons">chevron_left' +
        '          </i><span>Back</span></a>' +
        '      </div>' +
        '      <div class="title">Your Title Here' +
        '      </div>' +
        '      <div class="right">' +
        '        <a class="link"><span>More</span><i class="material-icons">more_vert' +
        '          </i></a>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '    <div class="toolbar-inner">' +
        '    </div>' +
        '    <div class="toolbar-inner">' +
        '      <a class="tab-link"><i class="material-icons">home' +
        '        </i><span class="tabbar-label">HOME</span></a>' +
        '      <a class="tab-link"><i class="material-icons">list' +
        '        </i><span class="tabbar-label">MENU</span></a>' +
        '      <a class="tab-link"><i class="material-icons">settings' +
        '        </i><span class="tabbar-label">SETTINGS</span></a>' +
        '    </div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Screen',
        open: false
    }
});