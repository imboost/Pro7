blockManager.add('navbar', {
    label: 'Navbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="title sliding">Title</div>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Navbar',
        open: false
    }
});

blockManager.add('navbar_icon', {
    label: 'Navbar Icon',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar Icon'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="title">Title</div>' +
        '       <div class="right">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">info</i>' +
        '           </a>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Navbar',
        open: false
    }
});

blockManager.add('navbar_icon_back', {
    label: 'Navbar Icon Back',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar Icon Back'
    },
    content: '<div class="navbar">' +
        '   <div class="navbar-inner">' +
        '       <div class="left">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">chevron_left</i>' +
        '           </a>' +
        '       </div>' +
        '       <div class="title">Title</div>' +
        '       <div class="right">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">info</i>' +
        '           </a>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Navbar',
        open: false
    }
});

blockManager.add('subnavbar_toolbar', {
    label: 'Navbar Toolbar',
    attributes: {
        class: 'fa fa-square',
        title: 'Navbar Toolbar'
    },
    content: '<div class="navbar">' +
        '    <div class="navbar-inner">' +
        '       <div class="left">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">chevron_left</i>' +
        '           </a>' +
        '       </div>' +
        '       <div class="title">Title</div>' +
        '       <div class="right">' +
        '           <a class="link icon-only">' +
        '               <i class="material-icons">info</i>' +
        '           </a>' +
        '       </div>' +
        '       <div class="subnavbar">' +
        '         <div class="subnavbar-inner">' +
        '           <div class="segmented">' +
        '             <a class="button button-active">Tab 1</a>' +
        '             <a class="button">Tab 2</a>' +
        '             <a class="button">Tab 3</a>' +
        '           </div>' +
        '         </div>' +
        '       </div>' +
        '    </div>' +
        '  </div>',
    category: {
        label: 'Navbar Sub',
        open: false
    }
});