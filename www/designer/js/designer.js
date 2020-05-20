$$(document).on('click', '#btn-design-html', function() {
    var project = $$(this).attr('data-project');
    var fileName = $$(this).attr('data-file');

    navigate_main_to('/designer/' + project + '/' + fileName + '/', false, false, false, false, false, false);
});

$$(document).on('page:afterin', '.page[data-name="designer"]', function(callback) {
    panel_left_morph();

    window.localStorage.clear();

    var project = callback.detail.route.params.project;
    var filename = callback.detail.route.params.filename;
    file_open_active = filename;

    var dir_pro7 = path.join(os.homedir(), 'Pro7/');
    var dir_project = path.join(dir_pro7, project);
    var dir_project_www = path.join(dir_project, 'www/');

    $$(document).find('#page-title').html(filename);

    app.preloader.show();

    editor = grapesjs.init({
        container: '#gjs',
        height: '100%',
        canvas: {
            styles: [path.join(__dirname, 'css/framework7.bundle.css'), path.join(__dirname, 'css/framework7-icons.css'), path.join(__dirname, 'fonts/material-icons.css'), path.join(dir_project_www, 'css/custom.css')],
            scripts: [path.join(__dirname, 'js/framework7.bundle.min.js'), path.join(__dirname, 'designer/js/init_designer.js')]
        },
        allowScripts: 1
    });

    var config = editor.getConfig();

    config.showDevices = 0;

    editor.setDevice('Mobile portrait');

    var panel = editor.Panels;
    panel.getPanels().reset([{
        id: 'views',
        buttons: [{
            id: 'open-blocks',
            command: 'open-blocks',
            active: true,
            className: 'fa fa-th-large',
            attributes: {
                title: 'Components'
            }
        }, {
            id: 'open-layers',
            command: 'open-layers',
            className: 'fa fa-bars',
            attributes: {
                title: 'Layers'
            }
        }, {
            id: 'open-sm',
            command: 'open-sm',
            className: 'fa fa-paint-brush',
            attributes: {
                title: 'Styles'
            }
        }, {
            id: 'open-tm',
            command: 'open-tm',
            className: 'fa fa-cog',
            attributes: {
                title: 'Configuration'
            }
        }]
    }]);

    blockManager = editor.BlockManager;
    require('./designer/grapesjs/block/button.js');
    require('./designer/grapesjs/block/card.js');
    require('./designer/grapesjs/block/chiptag.js');
    require('./designer/grapesjs/block/fab.js');
    require('./designer/grapesjs/block/form.js');
    require('./designer/grapesjs/block/form_item.js');
    require('./designer/grapesjs/block/form_item_float.js');
    require('./designer/grapesjs/block/grid.js');
    require('./designer/grapesjs/block/grid_no_gap.js');
    require('./designer/grapesjs/block/grid_responsive.js');
    require('./designer/grapesjs/block/layout.js');
    require('./designer/grapesjs/block/list.js');
    require('./designer/grapesjs/block/list_media.js');
    require('./designer/grapesjs/block/list_sortable.js');
    require('./designer/grapesjs/block/list_view_accordion.js');
    require('./designer/grapesjs/block/messages.js');
    require('./designer/grapesjs/block/navbar.js');
    require('./designer/grapesjs/block/popover.js');
    require('./designer/grapesjs/block/progress_bar.js');
    require('./designer/grapesjs/block/range_slider.js');
    // require('./designer/grapesjs/block/screen.js');
    require('./designer/grapesjs/block/searchbar.js');
    require('./designer/grapesjs/block/smart_select.js');
    require('./designer/grapesjs/block/stepper.js');
    require('./designer/grapesjs/block/swipeout.js');
    require('./designer/grapesjs/block/swiper.js');
    require('./designer/grapesjs/block/table.js');
    require('./designer/grapesjs/block/table_card.js');
    require('./designer/grapesjs/block/timeline.js');
    require('./designer/grapesjs/block/toolbar.js');
    require('./designer/grapesjs/block/toolbar_bottom_with_badge.js');

    fs.readFile(path.join(dir_project_www, 'pages/' + filename), 'utf-8', (err, cb_data) => {
        if (err) {
            console.log(err);
            return;
        }

        app.preloader.hide();

        editor.setComponents(cb_data);
    });

    delete require.cache[require.resolve('./designer/grapesjs/block/button.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/card.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/chiptag.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/fab.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/form.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/form_item.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/form_item_float.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/grid.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/grid_no_gap.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/grid_responsive.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/layout.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/list.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/list_media.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/list_sortable.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/list_view_accordion.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/messages.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/navbar.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/popover.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/progress_bar.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/range_slider.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/screen.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/searchbar.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/smart_select.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/stepper.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/swipeout.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/swiper.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/table.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/table_card.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/timeline.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/toolbar.js')];
    delete require.cache[require.resolve('./designer/grapesjs/block/toolbar_bottom_with_badge.js')];
});

// $$(document).on('click', '#btn-save-design', function() {
//     editor_value = editor.getHtml();
//     editor_value = pretty(editor_value, { ocd: true });

//     var dir_pro7 = path.join(os.homedir(), 'Pro7/');
//     var dir_project = path.join(dir_pro7, project_open_active);
//     var dir_project_www = path.join(dir_project, 'www/');

//     fs.writeFileSync(path.join(dir_project_www, 'pages/' + file_open_active), editor_value, 'utf-8');

//     code_editor(project_open_active, file_open_active);

//     app.toast.create({
//         text: 'File Saved',
//         position: 'center',
//         closeTimeout: 2000
//     }).open();
// });

$$(document).on('click', '#btn-design-undo', function() {
    editor.UndoManager.undo(1);
});

$$(document).on('click', '#btn-design-redo', function() {
    editor.UndoManager.redo(1);
});

$$(document).on('click', '#btn-design-clear', function() {
    app.dialog.create({
        title: 'Information',
        text: 'Do you want to clear all design?',
        buttons: [{
            text: '<span>Cancel</span>'
        }, {
            text: '<span>Ok</span>',
            onClick: function() {
                editor.DomComponents.clear();

                window.localStorage.clear();
            }
        }],
        verticalButtons: false,
        animate: false
    }).open();
});

$$(document).on('click', '#btn-design-preview', function() {
    editor.runCommand('preview');
});

$$(document).on('click', '#btn-design-code', function() {
    editor.runCommand('export-template');
});

$$(document).on('click', '#btn-design-computer', function() {
    editor.setDevice('Desktop');
});

$$(document).on('click', '#btn-design-tablet', function() {
    editor.setDevice('Tablet');
});

$$(document).on('click', '#btn-design-smartphone', function() {
    editor.setDevice('Mobile portrait');
});

$$(document).on('click', '#btn-design-outline', function() {
    editor.runCommand('sw-visibility');
    $$(document).find('#btn-design-unoutline').show();
    $$(document).find('#btn-design-outline').hide();
});

$$(document).on('click', '#btn-design-unoutline', function() {
    editor.stopCommand('sw-visibility');
    $$(document).find('#btn-design-unoutline').hide();
    $$(document).find('#btn-design-outline').show();
});