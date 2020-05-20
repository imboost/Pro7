blockManager.add('list_media', {
    label: 'List Media',
    attributes: {
        class: 'fa fa-square',
        title: 'List'
    },
    content: '<div class="list media-list">' +
        '   <ul>' +
        '       <li>' +
        '         <div class="item-content">' +
        '           <div class="item-media"><img src="http://lorempixel.com/88/88/fashion/1" width="44"/></div>' +
        '           <div class="item-inner">' +
        '             <div class="item-title-row">' +
        '               <div class="item-title">Title</div>' +
        '             </div>' +
        '             <div class="item-subtitle">Sub Title</div>' +
        '           </div>' +
        '         </div>' +
        '       </li>' +
        '       <li>' +
        '         <a href="#" class="item-link item-content">' +
        '           <div class="item-media"><img src="http://lorempixel.com/88/88/fashion/2" width="44"/></div>' +
        '           <div class="item-inner">' +
        '             <div class="item-title-row">' +
        '               <div class="item-title">Title</div>' +
        '             </div>' +
        '             <div class="item-subtitle">Sub Title</div>' +
        '           </div>' +
        '         </a>' +
        '       </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('list_media_inset', {
    label: 'List Media Inset',
    attributes: {
        class: 'fa fa-square',
        title: 'List Media Inset'
    },
    content: '<div class="list media-list inset">' +
        '   <ul>' +
        '       <li>' +
        '         <div class="item-content">' +
        '           <div class="item-media"><img src="http://lorempixel.com/88/88/fashion/1" width="44"/></div>' +
        '           <div class="item-inner">' +
        '             <div class="item-title-row">' +
        '               <div class="item-title">Title</div>' +
        '             </div>' +
        '             <div class="item-subtitle">Sub Title</div>' +
        '           </div>' +
        '         </div>' +
        '       </li>' +
        '       <li>' +
        '         <a href="#" class="item-link item-content">' +
        '           <div class="item-media"><img src="http://lorempixel.com/88/88/fashion/2" width="44"/></div>' +
        '           <div class="item-inner">' +
        '             <div class="item-title-row">' +
        '               <div class="item-title">Title</div>' +
        '             </div>' +
        '             <div class="item-subtitle">Sub Title</div>' +
        '           </div>' +
        '         </a>' +
        '       </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_cover', {
    label: 'Item Cover',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after">$15</div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></div></li>' +
        '<li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_cover_badge', {
    label: 'Item Cover Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover Badge'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after"><span class="badge">1</span></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></div></li>' +
        '<li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_cover_blank', {
    label: 'Item Cover Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover Blank'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></div></li>' +
        '<li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_mail', {
    label: 'Item Mail',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Main Info</div>' +
        '        <div class="item-after">17:14</div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_mail_badge', {
    label: 'Item Mail Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail Badge'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Mail Info</div>' +
        '        <div class="item-after"><span class="badge">1</span></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_mail_blank', {
    label: 'Item Mail Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail Blank'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Mail Info</div>' +
        '        <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('list_media_chevron_center', {
    label: 'List Media Chevron Center',
    attributes: {
        class: 'fa fa-square',
        title: ''
    },
    content: '<div class="list media-list chevron-center">' +
        '   <ul>' +
        '       <li>' +
        '         <a href="#" class="item-link item-content">' +
        '           <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '           <div class="item-inner">' +
        '             <div class="item-title-row">' +
        '               <div class="item-title">Item Title</div>' +
        '               <div class="item-after">$15</div>' +
        '             </div>' +
        '             <div class="item-subtitle">Category</div>' +
        '             <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '           </div></a></li>' +
        '       <li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: 'List Media Link',
        open: false
    }
});

blockManager.add('item_media_cover_link', {
    label: 'Item Cover',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after">$15</div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></a></li>' +
        '<li>',
    category: {
        label: "List Media Link",
        open: false
    }
});

blockManager.add('item_media_cover_link_badge', {
    label: 'Item Cover Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover Badge'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after"><span class="badge">1</span></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></a></li>' +
        '<li>',
    category: {
        label: "List Media Link",
        open: false
    }
});

blockManager.add('item_media_cover_link_blank', {
    label: 'Item Cover Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Cover Blank'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><img src="http://lorempixel.com/160/160/people/1" width="80"/></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Item Title</div>' +
        '        <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Category</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div></a></li>' +
        '<li>',
    category: {
        label: "List Media Link",
        open: false
    }
});

blockManager.add('item_media_link_mail', {
    label: 'Item Mail',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Main Info</div>' +
        '        <div class="item-after">17:14</div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: "List Media",
        open: false
    }
});

blockManager.add('item_media_mail_link_badge', {
    label: 'Item Mail Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail Badge'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Mail Info</div>' +
        '        <div class="item-after"><span class="badge">1</span></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: "List Media Link",
        open: false
    }
});

blockManager.add('item_media_mail_link_blank', {
    label: 'Item Mail Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Mail Blank'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title-row">' +
        '        <div class="item-title">Mail Info</div>' +
        '        <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '      </div>' +
        '      <div class="item-subtitle">Sender Information</div>' +
        '      <div class="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: "List Media Link",
        open: false
    }
});