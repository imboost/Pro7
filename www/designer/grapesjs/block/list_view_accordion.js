blockManager.add('list_view_accordion', {
    label: 'List View Accordion',
    attributes: {
        class: 'fa fa-square',
        title: 'List View Accordion'
    },
    content: '<div class="list accordion-list">' +
        '   <ul>' +
        '     <li class="accordion-item"><a href="#" class="item-content item-link">' +
        '         <div class="item-inner">' +
        '           <div class="item-title">Item 1</div>' +
        '         </div></a>' +
        '       <div class="accordion-item-content">' +
        '         <div class="block">' +
        '           <p>Item 1 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue.</p>' +
        '         </div>' +
        '       </div>' +
        '     </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: 'List View Accordion',
        open: false
    }
});

blockManager.add('list_view_accordion_separate_collapsible', {
    label: 'Separate Collapsibles',
    attributes: {
        class: 'fa fa-square',
        title: 'Separate Collapsibles'
    },
    content: '<div class="list">' +
        '   <ul>' +
        '     <li class="accordion-item"><a href="#" class="item-content item-link">' +
        '         <div class="item-inner">' +
        '           <div class="item-title">Item 1</div>' +
        '         </div></a>' +
        '       <div class="accordion-item-content">' +
        '         <div class="block">' +
        '           <p>Item 1 content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim viverra velit sed euismod. Mauris sed quam vehicula, dapibus ante a, aliquet augue</p>' +
        '         </div>' +
        '       </div>' +
        '     </li>' +
        '   </ul>' +
        '</div>',
    category: {
        label: 'List View Accordion',
        open: false
    }
});

blockManager.add('list_view_accordion_custom', {
    label: 'Custom Accordion',
    attributes: {
        class: 'fa fa-square',
        title: 'Custom Accordion'
    },
    content: '<div class="block-title">Custom Accordion</div>' +
        '<div class="block accordion-list custom-accordion">' +
        '  <div class="accordion-item">' +
        '    <div class="accordion-item-toggle">' +
        '      <i class="icon icon-plus">+</i>' +
        '      <i class="icon icon-minus">-</i>' +
        '      <span>Item 1</span>' +
        '    </div>' +
        '    <div class="accordion-item-content">' +
        '      <p>Item 1 content. Lorem ipsum dolor sit amet...</p>' +
        '    </div>' +
        '  </div>' +
        '  <div class="accordion-item">' +
        '    <div class="accordion-item-toggle">' +
        '      <i class="icon icon-plus">+</i>' +
        '      <i class="icon icon-minus">-</i>' +
        '      <span>Item 2</span>' +
        '    </div>' +
        '    <div class="accordion-item-content">' +
        '      <p>Item 2 content. Lorem ipsum dolor sit amet...</p>' +
        '    </div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'List View Accordion',
        open: false
    }
});