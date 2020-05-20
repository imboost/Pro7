blockManager.add('list_simple', {
    label: 'List',
    attributes: {
        class: 'fa fa-square',
        title: 'List'
    },
    content: '<div class="list" style="width:100%">' +
        '   <ul>' +
        '       <li>' +
        '           <div class="item-content">' +
        '               <div class="item-inner">' +
        '                   <div class="item-title">Item</div>' +
        '               </div>' +
        '           </div>' +
        '       </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('list_simple_inset', {
    label: 'List Inset',
    attributes: {
        class: 'fa fa-square',
        title: 'List Inset'
    },
    content: '<div class="list inset">' +
        '   <ul>' +
        '       <li>' +
        '           <div class="item-content">' +
        '               <div class="item-inner">' +
        '                   <div class="item-title">Item</div>' +
        '               </div>' +
        '           </div>' +
        '       </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list', {
    label: 'Item Icon Text',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Icon Text'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after">ON</div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_badge', {
    label: 'Item Icon Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Icon Badge'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after"><span class="badge">1</span></div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_blank', {
    label: 'Item Icon Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Icon Badge'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_complete', {
    label: 'Item Complete',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Complete'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after">Action</div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_complete_badge', {
    label: 'Item Complete Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Complete Badge'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after"><span class="badge">1</span></div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_complete_blank', {
    label: 'Item Complete Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item List Complete Blank'
    },
    content: '<li>' +
        '  <div class="item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '    </div>' +
        '  </div>' +
        '</li>',
    category: {
        label: 'List Simple',
        open: false
    }
});

blockManager.add('item_list_link_text', {
    label: 'Item Text',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Text'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }
});

blockManager.add('item_list_link', {
    label: 'Item Icon Text',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Icon Text'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after">CEO</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});

blockManager.add('item_list_link_badge', {
    label: 'Item Icon Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Icon Badge'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after"><span class="badge">1</span></div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});

blockManager.add('item_list_link_blank', {
    label: 'Item Icon Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Icon Blank'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">Item</div>' +
        '      <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});

blockManager.add('item_list_link_complete', {
    label: 'Item Complete',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Complete'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after">Action</div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});

blockManager.add('item_list_link_complete_badge', {
    label: 'Item Complete Badge',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Complete Badge'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after"><span class="badge">1</span></div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});

blockManager.add('item_list_link_complete_blank', {
    label: 'Item Complete Blank',
    attributes: {
        class: 'fa fa-square',
        title: 'Item Complete Blank'
    },
    content: '<li>' +
        '  <a href="#" class="item-link item-content">' +
        '    <div class="item-media"><i class="material-icons">face</i></div>' +
        '    <div class="item-inner">' +
        '      <div class="item-title">' +
        '        <div class="item-header">Information</div>' +
        '        Title' +
        '        <div class="item-footer">Other Info</div>' +
        '      </div>' +
        '      <div class="item-after" style="min-height:25px;min-width:25px;"></div>' +
        '    </div>' +
        '  </a>' +
        '</li>',
    category: {
        label: 'List Link',
        open: false
    }

});