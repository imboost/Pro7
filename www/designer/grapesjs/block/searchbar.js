blockManager.add('searchbar_expand', {
    label: 'Searchbar Expand',
    attributes: {
        class: 'fa fa-square',
        title: 'Searchbar Expand'
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
        '         <!-- Link to enable searchbar -->' +
        '         <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '           <i class="icon material-icons md-only">search</i>' +
        '         </a>' +
        '       </div>' +
        '       <!-- Searchbar is a direct child of "navbar-inner" -->' +
        '       <form class="searchbar searchbar-expandable">' +
        '         <div class="searchbar-inner">' +
        '           <div class="searchbar-input-wrap">' +
        '             <input type="search" placeholder="Search"/>' +
        '             <i class="searchbar-icon"></i>' +
        '             <span class="input-clear-button"></span>' +
        '           </div>' +
        '           <span class="searchbar-disable-button">Cancel</span>' +
        '         </div>' +
        '       </form>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Searchbar',
        open: false
    }
});

blockManager.add('searchbar_static', {
    label: 'Searchbar Static',
    attributes: {
        class: 'fa fa-square',
        title: 'Searchbar Static'
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
        '         <!-- Link to enable searchbar -->' +
        '         <a class="link icon-only searchbar-enable" data-searchbar=".searchbar">' +
        '           <i class="icon material-icons md-only">search</i>' +
        '         </a>' +
        '       </div>' +
        '       <div class="subnavbar">' +
        '         <!-- Searchbar inside of Subnavbar -->' +
        '         <form class="searchbar">' +
        '           <div class="searchbar-inner">' +
        '             <div class="searchbar-input-wrap">' +
        '               <input type="search" placeholder="Search"/>' +
        '               <i class="searchbar-icon"></i>' +
        '               <span class="input-clear-button"></span>' +
        '             </div>' +
        '             <span class="searchbar-disable-button">Cancel</span>' +
        '           </div>' +
        '         </form>' +
        '       </div>' +
        '   </div>' +
        '</div>',
    category: {
        label: 'Searchbar',
        open: false
    }
});