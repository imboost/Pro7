blockManager.add('default', {
    label: 'default',
    attributes: {
        class: 'fa fa-square',
        title: 'default'
    },
    content: '<div class="swiper-container swiper-init demo-swiper">' +
        '<div class="swiper-wrapper">' +
        '<div class="swiper-slide">Slide 1</div>' +
        '<div class="swiper-slide">Slide 2</div>' +
        '<div class="swiper-slide">Slide 3</div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});

blockManager.add('1 slide per view', {
    label: '1 slide per view',
    attributes: {
        class: 'fa fa-square',
        title: '1 slide per view'
    },
    content: '<div data-pagination="{ "el": ".swiper-pagination" }"data-space-between="50" class="swiper-container swiper-init demo-swiper">' +
        '  <div class="swiper-pagination"></div>' +
        '  <div class="swiper-wrapper">' +
        '    <div class="swiper-slide">Slide 1</div>' +
        '    <div class="swiper-slide">Slide 2</div>' +
        '    <div class="swiper-slide">Slide 3</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});

blockManager.add('2 Slides Per View', {
    label: '2 slide per view',
    attributes: {
        class: 'fa fa-square',
        title: '2 slide per view'
    },
    content: '    <div data-pagination="{"el": ".swiper-pagination"}" data-space-between="20" data-slides-per-view="2" class="swiper-container swiper-init demo-swiper">' +
        '  <div class="swiper-pagination"></div>' +
        '  <div class="swiper-wrapper">' +
        '    <div class="swiper-slide">Slide 1</div>' +
        '    <div class="swiper-slide">Slide 2</div>' +
        '    <div class="swiper-slide">Slide 3</div>' +
        '    </div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});

blockManager.add('3 Slides Per View', {
    label: '3 Slides Per View',
    attributes: {
        class: 'fa fa-square',
        title: '3 Slides Per View'
    },
    content: '    <div data-pagination="{"el": ".swiper-pagination"}" data-space-between="10" data-slides-per-view="3" class="swiper-container swiper-init demo-swiper">' +
        '  <div class="swiper-pagination"></div>' +
        '  <div class="swiper-wrapper">' +
        '    <div class="swiper-slide">Slide 1</div>' +
        '    <div class="swiper-slide">Slide 2</div>' +
        '    <div class="swiper-slide">Slide 3</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});

blockManager.add('Auto Slides Per View', {
    label: 'Auto Slides Per View',
    attributes: {
        class: 'fa fa-square',
        title: 'Auto Slides Per View'
    },
    content: '<div data-pagination="{"el": ".swiper-pagination"}" data-space-between="10" data-slides-per-view="auto" data-centered-slides="true" class="swiper-container swiper-init demo-swiper demo-swiper-auto">' +
        '  <div class="swiper-pagination"></div>' +
        '  <div class="swiper-wrapper">' +
        '    <div class="swiper-slide">Slide 1</div>' +
        '    <div class="swiper-slide">Slide 2</div>' +
        '    <div class="swiper-slide">Slide 3</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});

blockManager.add('Vertical', {
    label: 'Vertical',
    attributes: {
        class: 'fa fa-square',
        title: 'Vertical'
    },
    content: '<div data-pagination="{"el": ".swiper-pagination"}" data-space-between="10" data-direction="vertical" class="swiper-container swiper-init demo-swiper">' +
        '<div class="swiper-pagination"></div>' +
        '<div class="swiper-wrapper">' +
        '  <div class="swiper-slide">Slide 1</div>' +
        '  <div class="swiper-slide">Slide 2</div>' +
        '  <div class="swiper-slide">Slide 3</div>' +
        '  <div class="swiper-slide">Slide 4</div>' +
        '  <div class="swiper-slide">Slide 5</div>' +
        '</div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});


blockManager.add('Slow Speed', {
    label: 'Slow Speed',
    attributes: {
        class: 'fa fa-square',
        title: 'Slow Speed'
    },
    content: '    <div data-speed="900" data-pagination="{"el": ".swiper-pagination"}" data-space-between="50" class="swiper-container swiper-init demo-swiper">' +
        '  <div class="swiper-pagination"></div>' +
        '  <div class="swiper-wrapper">' +
        '    <div class="swiper-slide">Slide 1</div>' +
        '    <div class="swiper-slide">Slide 2</div>' +
        '    <div class="swiper-slide">Slide 3</div>' +
        '  </div>' +
        '</div>',
    category: {
        label: 'Swiper',
        open: false
    }
});