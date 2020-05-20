blockManager.add('template-1', {
    label: 'Template 1',
    attributes: {
        // style: 'background-image:url("f7/img/template_1.png");background-size: contain;background-repeat: no-repeat;background-position: center center;',
        class: 'fa fa-square',
        title: 'Page with Navbar'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <div class="fab fab-right-bottom">' +
        '       <a href="#">' +
        '           <!-- First icon is visible when Speed Dial actions are closed -->' +
        '           <i class="icon f7-icons">add</i>' +
        '           <!-- Second icon is visible when Speed Dial actions are opened -->' +
        '           <i class="icon f7-icons">close</i>' +
        '       </a>' +
        '       <!-- Speed Dial action buttons -->' +
        '       <div class="fab-buttons fab-buttons-left">' +
        '           <a><i class="icon material-icons">looks_one</i></a>' +
        '           <a><i class="icon material-icons">looks_two</i></a>' +
        '           <a><i class="icon material-icons">looks_3</i></a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-2', {
    label: 'Template 2',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Navbar Search Expandable'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <!-- Link to enable searchbar -->' +
        '               <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '                   <i class="icon material-icons">search</i>' +
        '               </a>' +
        '           </div>' +
        '           <!-- Searchbar is a direct child of "navbar-inner" -->' +
        '           <form id="searchbar-expandable" class="searchbar searchbar-expandable">' +
        '               <div class="searchbar-inner">' +
        '                   <div class="searchbar-input-wrap">' +
        '                       <input type="search" placeholder="Search">' +
        '                       <i class="searchbar-icon"></i>' +
        '                       <span class="input-clear-button"></span>' +
        '                   </div>' +
        '                   <span class="searchbar-disable-button">Cancel</span>' +
        '               </div>' +
        '           </form>' +
        '       </div>' +
        '   </div>' +
        '   <div class="fab fab-right-bottom">' +
        '       <a href="#">' +
        '           <!-- First icon is visible when Speed Dial actions are closed -->' +
        '           <i class="icon f7-icons">add</i>' +
        '           <!-- Second icon is visible when Speed Dial actions are opened -->' +
        '           <i class="icon f7-icons">close</i>' +
        '       </a>' +
        '       <!-- Speed Dial action buttons -->' +
        '       <div class="fab-buttons fab-buttons-left">' +
        '           <a><i class="icon material-icons">looks_one</i></a>' +
        '           <a><i class="icon material-icons">looks_two</i></a>' +
        '           <a><i class="icon material-icons">looks_3</i></a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>' +
        '<script>' +
        '   var searchbar = app.searchbar.create({' +
        "       el: '.searchbar'," +
        '   });' +
        '</script>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-3', {
    label: 'Template 3',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Searchbar'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <form class="searchbar">' +
        '      <div class="searchbar-inner">' +
        '          <div class="searchbar-input-wrap">' +
        '              <input type="search" placeholder="Search">' +
        '              <i class="searchbar-icon"></i>' +
        '              <span class="input-clear-button"></span>' +
        '          </div>' +
        '          <span class="searchbar-disable-button">Cancel</span>' +
        '      </div>' +
        '   </form>' +
        '   <div class="fab fab-right-bottom">' +
        '       <a href="#">' +
        '           <!-- First icon is visible when Speed Dial actions are closed -->' +
        '           <i class="icon f7-icons">add</i>' +
        '           <!-- Second icon is visible when Speed Dial actions are opened -->' +
        '           <i class="icon f7-icons">close</i>' +
        '       </a>' +
        '       <!-- Speed Dial action buttons -->' +
        '       <div class="fab-buttons fab-buttons-left">' +
        '           <a><i class="icon material-icons">looks_one</i></a>' +
        '           <a><i class="icon material-icons">looks_two</i></a>' +
        '           <a><i class="icon material-icons">looks_3</i></a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-4', {
    label: 'Template 4',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar tabbar">' +
        '       <div class="toolbar-inner">' +
        '           <a class="tab-link tab-link-active">Tab1</a>' +
        '           <a class="tab-link">Tab2</a>' +
        '           <a class="tab-link">Tab3</a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="fab fab-right-bottom">' +
        '       <a href="#">' +
        '           <!-- First icon is visible when Speed Dial actions are closed -->' +
        '           <i class="icon f7-icons">add</i>' +
        '           <!-- Second icon is visible when Speed Dial actions are opened -->' +
        '           <i class="icon f7-icons">close</i>' +
        '       </a>' +
        '       <!-- Speed Dial action buttons -->' +
        '       <div class="fab-buttons fab-buttons-left">' +
        '           <a><i class="icon material-icons">looks_one</i></a>' +
        '           <a><i class="icon material-icons">looks_two</i></a>' +
        '           <a><i class="icon material-icons">looks_3</i></a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-5', {
    label: 'Template 5',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar & Search Expandable'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <!-- Link to enable searchbar -->' +
        '               <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '                   <i class="icon material-icons">search</i>' +
        '               </a>' +
        '           </div>' +
        '           <!-- Searchbar is a direct child of "navbar-inner" -->' +
        '           <form id="searchbar-expandable" class="searchbar searchbar-expandable">' +
        '               <div class="searchbar-inner">' +
        '                   <div class="searchbar-input-wrap">' +
        '                       <input type="search" placeholder="Search"/>' +
        '                       <i class="searchbar-icon"></i>' +
        '                       <span class="input-clear-button"></span>' +
        '                   </div>' +
        '                   <span class="searchbar-disable-button">Cancel</span>' +
        '               </div>' +
        '           </form>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar tabbar">' +
        '       <div class="toolbar-inner">' +
        '           <a class="tab-link tab-link-active">Tab1</a>' +
        '           <a class="tab-link">Tab2</a>' +
        '           <a class="tab-link">Tab3</a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="fab fab-right-bottom">' +
        '       <a href="#">' +
        '           <!-- First icon is visible when Speed Dial actions are closed -->' +
        '           <i class="icon f7-icons">add</i>' +
        '           <!-- Second icon is visible when Speed Dial actions are opened -->' +
        '           <i class="icon f7-icons">close</i>' +
        '       </a>' +
        '       <!-- Speed Dial action buttons -->' +
        '       <div class="fab-buttons fab-buttons-left">' +
        '           <a><i class="icon material-icons">looks_one</i></a>' +
        '           <a><i class="icon material-icons">looks_two</i></a>' +
        '           <a><i class="icon material-icons">looks_3</i></a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>' +
        '<script>' +
        '   var searchbar = app.searchbar.create({' +
        "       el: '.searchbar'," +
        '   });' +
        '</script>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-6', {
    label: 'Template 6',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar Bottom'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '      <div class="toolbar-inner">' +
        '          <a class="tab-link tab-link-active">' +
        '              <i class="icon material-icons">email</i>' +
        '              <span class="tabbar-label">Inbox</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">today<span class="badge color-red">5</span></i>' +
        '              <span class="tabbar-label">Calendar</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">file_upload</i>' +
        '              <span class="tabbar-label">Upload</span>' +
        '          </a>' +
        '      </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-7', {
    label: 'Template 7',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar Bottom & Search Expandable'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <!-- Link to enable searchbar -->' +
        '               <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '                   <i class="icon material-icons">search</i>' +
        '               </a>' +
        '           </div>' +
        '           <!-- Searchbar is a direct child of "navbar-inner" -->' +
        '           <form id="searchbar-expandable" class="searchbar searchbar-expandable">' +
        '               <div class="searchbar-inner">' +
        '                   <div class="searchbar-input-wrap">' +
        '                       <input type="search" placeholder="Search"/>' +
        '                       <i class="searchbar-icon"></i>' +
        '                       <span class="input-clear-button"></span>' +
        '                   </div>' +
        '                   <span class="searchbar-disable-button">Cancel</span>' +
        '               </div>' +
        '           </form>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '      <div class="toolbar-inner">' +
        '          <a class="tab-link tab-link-active">' +
        '              <i class="icon material-icons">email</i>' +
        '              <span class="tabbar-label">Inbox</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">today<span class="badge color-red">5</span></i>' +
        '              <span class="tabbar-label">Calendar</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">file_upload</i>' +
        '              <span class="tabbar-label">Upload</span>' +
        '          </a>' +
        '      </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>' +
        '<script>' +
        '   var searchbar = app.searchbar.create({' +
        "       el: '.searchbar'," +
        '   });' +
        '</script>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-8', {
    label: 'Template 8',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Searchbar & Toolbar Bottom'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <form class="searchbar">' +
        '      <div class="searchbar-inner">' +
        '          <div class="searchbar-input-wrap">' +
        '              <input type="search" placeholder="Search">' +
        '              <i class="searchbar-icon"></i>' +
        '              <span class="input-clear-button"></span>' +
        '          </div>' +
        '          <span class="searchbar-disable-button">Cancel</span>' +
        '      </div>' +
        '   </form>' +
        '   <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '      <div class="toolbar-inner">' +
        '          <a class="tab-link tab-link-active">' +
        '              <i class="icon material-icons">email</i>' +
        '              <span class="tabbar-label">Inbox</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">today<span class="badge color-red">5</span></i>' +
        '              <span class="tabbar-label">Calendar</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">file_upload</i>' +
        '              <span class="tabbar-label">Upload</span>' +
        '          </a>' +
        '      </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-9', {
    label: 'Template 9',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar Top & Bottom'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">info</i>' +
        '               </a>' +
        '           </div>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar tabbar">' +
        '       <div class="toolbar-inner">' +
        '           <a class="tab-link tab-link-active">Tab1</a>' +
        '           <a class="tab-link">Tab2</a>' +
        '           <a class="tab-link">Tab3</a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '      <div class="toolbar-inner">' +
        '          <a class="tab-link tab-link-active">' +
        '              <i class="icon material-icons">email</i>' +
        '              <span class="tabbar-label">Inbox</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">today<span class="badge color-red">5</span></i>' +
        '              <span class="tabbar-label">Calendar</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">file_upload</i>' +
        '              <span class="tabbar-label">Upload</span>' +
        '          </a>' +
        '      </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>',
    category: {
        label: 'Page Template',
        open: false
    }
});

blockManager.add('template-10', {
    label: 'Template 10',
    attributes: {
        class: 'fa fa-square',
        title: 'Page with Toolbar Top/Bottom & Search Expandable'
    },
    content: '<div class="page">' +
        '   <div class="navbar">' +
        '       <div class="navbar-inner">' +
        '           <div class="left">' +
        '               <a class="link icon-only">' +
        '                   <i class="icon material-icons">chevron_left</i>' +
        '               </a>' +
        '           </div>' +
        '           <div class="title">Title</div>' +
        '           <div class="right">' +
        '               <!-- Link to enable searchbar -->' +
        '               <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '                   <i class="icon material-icons">search</i>' +
        '               </a>' +
        '           </div>' +
        '           <!-- Searchbar is a direct child of "navbar-inner" -->' +
        '           <form id="searchbar-expandable" class="searchbar searchbar-expandable">' +
        '               <div class="searchbar-inner">' +
        '                   <div class="searchbar-input-wrap">' +
        '                       <input type="search" placeholder="Search"/>' +
        '                       <i class="searchbar-icon"></i>' +
        '                       <span class="input-clear-button"></span>' +
        '                   </div>' +
        '                   <span class="searchbar-disable-button">Cancel</span>' +
        '               </div>' +
        '           </form>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar tabbar">' +
        '       <div class="toolbar-inner">' +
        '           <a class="tab-link tab-link-active">Tab1</a>' +
        '           <a class="tab-link">Tab2</a>' +
        '           <a class="tab-link">Tab3</a>' +
        '       </div>' +
        '   </div>' +
        '   <div class="toolbar toolbar-bottom-md tabbar-labels">' +
        '      <div class="toolbar-inner">' +
        '          <a class="tab-link tab-link-active">' +
        '              <i class="icon material-icons">email</i>' +
        '              <span class="tabbar-label">Inbox</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">today<span class="badge color-red">5</span></i>' +
        '              <span class="tabbar-label">Calendar</span>' +
        '          </a>' +
        '          <a class="tab-link">' +
        '              <i class="icon material-icons">file_upload</i>' +
        '              <span class="tabbar-label">Upload</span>' +
        '          </a>' +
        '      </div>' +
        '   </div>' +
        '   <div class="page-content"></div>' +
        '</div>' +
        '<script>' +
        '   var searchbar = app.searchbar.create({' +
        "       el: '.searchbar'," +
        '   });' +
        '</script>',
    category: {
        label: 'Page Template',
        open: false
    }
});