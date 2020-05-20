/**
 * Welcome
 */

$$(document).on('click', '#btn-dev', function() {
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('devtool');
});

panel_left_morph();

var terminal_home = function() {
    term = new Terminal({
        fontFamily: 'Fira Code, Iosevka, monospace',
        fontSize: 12,
        experimentalCharAtlas: 'dynamic'
    });

    term.setOption('theme', { background: '#1e1e1e' });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    const terminalElem = document.getElementById('term');
    term.open(terminalElem);

    fitAddon.fit();

    const shell = process.env[os.platform() === 'win32' ? 'COMSPEC' : 'SHELL'];
    ptyProcess = pty.spawn(shell, [], {
        name: 'xterm-color',
        cols: term.cols,
        rows: term.rows,
        cwd: process.cwd(),
        env: process.env
    });

    term.onData(function(data) {
        ptyProcess.write(data);
    });

    term.onResize(function(size) {
        ptyProcess.resize(
            Math.max(size ? size.cols : term.cols, 1),
            Math.max(size ? size.rows : term.rows, 1)
        );
    });

    ptyProcess.on('data', function(data) {
        term.write(data);
    });
}

$$(document).on('click', '#btn-reload', function() {
    app.preloader.show();

    window.location.reload();
});

app.sheet.open('.sheet-terminal');

terminal_home();

if (os.platform() === "darwin") {
    ptyProcess.write('cd ~\r');
    ptyProcess.write('cd Visual7\r');
    ptyProcess.write('cd ' + active_project + '\r');
    ptyProcess.write('clear\r');
} else if (os.platform() === "linux") {
    ptyProcess.write('cd ~\r');
    ptyProcess.write('cd Visual7\r');
    ptyProcess.write('cd ' + active_project + '\r');
    ptyProcess.write('clear\r');
} else {
    ptyProcess.write('cd %homepath%\r');
    ptyProcess.write('cd Visual7\r');
    ptyProcess.write('cd ' + active_project + '\r');
    ptyProcess.write('cls\r');
}

$$(document).on('page:afterin', '.page[data-name="home"]', function(e) {
    panel_left_morph();

    var page_height = $$(document).find('.page-content').height();
    $$(document).find('#page-welcome').height(parseInt(page_height));
});

/**
 * Project
 */

$$(document).on('click', '#btn-application-new-electron', function() {
    app.sheet.open('.sheet-terminal');

    app.dialog.prompt('Name', 'Create New Project', function(fileName) {
        navigate_main_to('/');

        app.progressbar.show('multi');

        var fileName = fileName.replace(/\s+/g, '_');

        var dir_project = path.join(active_visual7, fileName);
        var dir_project_www = path.join(dir_project, 'www/');

        fs.readdir(active_visual7, (err, dir) => {
            if (err) {
                fs.mkdirSync(active_visual7);
                create_app();
            } else {
                create_app();
            }
        });

        function create_app() {
            fs.readdir(dir_project, (err, dir) => {
                if (err) {
                    mkdir(dir_project);
                    mkdir(dir_project_www);
                    mkdir(path.join(dir_project_www, 'file/'));

                    // Depedencies (F7 and Other)
                    copyDir(path.join(__dirname, 'css/'), path.join(dir_project_www, 'css/'));
                    copyDir(path.join(__dirname, 'fonts/'), path.join(dir_project_www, 'fonts/'));
                    copyDir(path.join(__dirname, 'img/'), path.join(dir_project_www, 'img/'));
                    copyDir(path.join(__dirname, 'js/'), path.join(dir_project_www, 'js/'));
                    copy(path.join(__dirname, 'LICENSE'), path.join(dir_project_www, 'LICENSE'));

                    if (os.platform() === "darwin") {
                        copyDir(path.join(__dirname, '../build/'), path.join(dir_project, 'build/'));
                    }

                    // Template
                    copy(path.join(path.join(path.join(__dirname, 'sample/'), 'basic/'), 'index.html'), path.join(dir_project_www, 'index.html'));
                    copy(path.join(path.join(path.join(__dirname, 'sample/'), 'basic/'), 'main.js'), path.join(dir_project, 'main.js'));
                    copy(path.join(path.join(path.join(__dirname, 'sample/'), 'basic/'), 'package.json'), path.join(dir_project, 'package.json'));
                    copyDir(path.join(path.join(path.join(__dirname, 'sample/'), 'basic/'), 'js_app/'), path.join(dir_project_www, 'js_app/'));
                    copyDir(path.join(path.join(path.join(__dirname, 'sample/'), 'basic/'), 'pages/'), path.join(dir_project_www, 'pages/'));

                    // Finilization
                    list_project();

                    if (os.platform() === "darwin") {
                        app.progressbar.hide();

                        ptyProcess.write('cd ~\r');
                        ptyProcess.write('cd Visual7\r');
                        ptyProcess.write('cd ' + fileName + '\r');
                        ptyProcess.write('npm install -D electron@latest\r');
                        ptyProcess.write('npm install\r');
                        ptyProcess.write('cd ..');
                        ptyProcess.write('clear\r');
                    } else if (os.platform() === "linux") {
                        app.progressbar.hide();

                        ptyProcess.write('cd ~\r');
                        ptyProcess.write('cd Visual7\r');
                        ptyProcess.write('cd ' + fileName + '\r');
                        ptyProcess.write('npm install -D electron@latest\r');
                        ptyProcess.write('npm install\r');
                        ptyProcess.write('cd ..\r');
                        ptyProcess.write('clear\r');
                    } else {
                        app.progressbar.hide();

                        ptyProcess.write('cd %homepath%\r');
                        ptyProcess.write('cd Visual7\r');
                        ptyProcess.write('cd ' + fileName + '\r');
                        ptyProcess.write('npm install -D electron@latest\r');
                        ptyProcess.write('npm install\r');
                        ptyProcess.write('cd ..\r');
                        ptyProcess.write('cls\r');
                    }
                } else {
                    app.progressbar.hide();
                    app.sheet.close('.sheet-terminal');

                    app.dialog.create({
                        title: '<span>Failed</span>',
                        text: 'Project Exist',
                        buttons: [{
                            text: '<span>Ok</span>'
                        }],
                        verticalButtons: false,
                        animate: false
                    }).open();
                }
            });
        }
    });
});

list_project();

function list_project() {
    fs.readdir(active_visual7, (err, dir) => {
        if (err) {
            var dir = active_visual7;
            fs.mkdirSync(dir);
        } else {
            if (dir.length === 0) {
                //Do Nothing
            } else {
                $$(document).find('#list-file-project').empty();
                for (var i = 0; i < dir.length; i++) {
                    if (dir[i] === "NowDB Data Manager 1.1.0.exe" || dir[i] === "NowDB Data Manager Setup 1.1.0.exe" || dir[i] === "NowDB Data Manager-1.1.0.AppImage" || dir[i] === "NowDB Data Manager-1.1.0.dmg" || dir[i] === ".DS_Store") {
                        // Do Nothing
                    } else {
                        $$(document).find('#list-file-project').append(
                            '<li>' +
                            '   <div class="item-content item-link">' +
                            '       <div class="item-inner" id="btn-project-open" data-project="' + dir[i] + '">' +
                            '           <div class="item-title">' + dir[i] + '</div>' +
                            '       </div>' +
                            '   </div>' +
                            '</li>');
                    }
                }
            }
        }
    });
}

$$(document).on('click', '#btn-project-open', function() {
    active_project = $$(this).attr('data-project');
    active_dir_project = path.join(active_visual7, active_project);
    active_dir_project_www = path.join(active_dir_project, 'www/');

    app.sheet.close('.sheet-terminal');

    if (os.platform() === "darwin") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
    } else if (os.platform() === "linux") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
    } else {
        ptyProcess.write('cd %homepath%\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
    }

    navigate_left_to('/project/' + active_project + '/');
    navigate_main_to('/editor/' + active_project + '/index.html/');
});

$$(document).on('click', '#btn-project-folder-open', function() {
    if (os.platform() === "darwin") {
        const { spawn } = require('child_process');
        let openTerminal = spawn('open', [active_visual7]);
        openTerminal.on('error', (err) => { console.log(err); });
    } else if (os.platform() === "linux") {
        const { spawn } = require('child_process');
        let openTerminal = spawn('nautilus', [active_visual7]);
        openTerminal.on('error', (err) => { console.log(err); });
    } else {
        const openExplorer = require('open-file-explorer');
        openExplorer(active_visual7, err => {
            if (err) {
                console.log(err);
            }
        });
    }
});

$$(document).on('page:afterin', '.page[data-name="project"]', function(callback) {
    $$(document).find('#project-name').html(active_project);
    $$(document).find('#btn-code-editor').attr('data-project', active_project);

    list_html();
    list_js();
    list_css();
    list_other();
    list_img();
});

$$(document).on('click', '#btn-app-run', function() {
    app.sheet.open('.sheet-terminal');

    if (os.platform() === "darwin") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('electron .\r');
    } else if (os.platform() === "linux") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('electron .\r');
    } else {
        ptyProcess.write('cd %homepath%\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('electron .\r');
    }
});

$$(document).on('click', '#btn-app-distribute', function() {
    app.sheet.open('.sheet-terminal');

    if (os.platform() === "darwin") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('npm run dist\r');
        ptyProcess.write('cd dist\r');
        ptyProcess.write('open .\r');
    } else if (os.platform() === "linux") {
        ptyProcess.write('cd ~\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('npm run dist\r');
        ptyProcess.write('nautilus ~/Visual7/' + active_project + '/dist\r');
    } else {
        ptyProcess.write('cd %homepath%\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('npm run dist\r');
        ptyProcess.write('cd dist\r');
        ptyProcess.write('explorer .\r');
    }
});

$$(document).on('click', '#btn-app-dir', function() {
    if (os.platform() === "darwin") {
        ptyProcess.write('cd ~/Visual/' + active_project + '\r');
        ptyProcess.write('open .\r');
    } else if (os.platform() === "linux") {
        ptyProcess.write('nautilus ~/Visual7/' + active_project + '\r');
    } else {
        ptyProcess.write('cd %homepath%\r');
        ptyProcess.write('cd Visual7\r');
        ptyProcess.write('cd ' + active_project + '\r');
        ptyProcess.write('explorer .\r');
    }
});

/**
 * List Project File
 */

function list_html() {
    fs.readdir(path.join(active_dir_project_www, 'pages/'), (err, dir) => {
        $$(document).find('#list-file-html-new').empty();
        if (dir.length === 0) {
            //Do Nothing
        } else {
            for (var i = 0; i < dir.length; i++) {
                let fileName = dir[i];
                if (fileName === '404.html' || fileName === 'about.html' || fileName === 'home.html') {
                    $$(document).find('#list-file-html-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="pages" data-type="html">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                } else {
                    $$(document).find('#list-file-html-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="pages" data-type="html">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                }
            }
        }
    });
}

function list_js() {
    fs.readdir(path.join(active_dir_project_www, 'js_app/'), (err, dir) => {
        $$(document).find('#list-file-js-new').empty();
        if (dir.length === 0) {
            //Do Nothing
        } else {
            for (var i = 0; i < dir.length; i++) {
                let fileName = dir[i];
                if (fileName === 'constant.js' || fileName === 'init.js' || fileName === 'listener.js' || fileName === 'routes.js') {
                    $$(document).find('#list-file-js-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="js_app" data-type="javascript">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                } else {
                    $$(document).find('#list-file-js-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="js_app" data-type="javascript">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                }
            }
        }
    });
}

function list_css() {
    fs.readdir(path.join(active_dir_project_www, 'css/'), (err, dir) => {
        $$(document).find('#list-file-css-new').empty();
        if (dir.length === 0) {
            //Do Nothing
        } else {
            for (var i = 0; i < dir.length; i++) {
                let fileName = dir[i];
                if (fileName === 'framework7-icons.css' || fileName === 'framework7.bundle.css' || fileName === 'framework7.bundle.min.css' || fileName === 'framework7.bundle.rtl.css' || fileName === 'framework7.bundle.rtl.min.css' || fileName === 'framework7.css' || fileName === 'framework7.min.css' || fileName === 'framework7.rtl.css' || fileName === 'framework7.rtl.min.css' || fileName === 'custom.css') {
                    $$(document).find('#list-file-css-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="css" data-type="css">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                } else {
                    $$(document).find('#list-file-css-new').append(
                        '<div class="treeview-item" id="btn-code-editor" data-project="' + active_project + '" data-file="' + fileName + '" style="cursor: pointer;" data-dir="css" data-type="css">' +
                        '    <div class="treeview-item-root">' +
                        '        <div class="treeview-item-content">' +
                        '            <i class="icon f7-icons">document_text_fill</i>' +
                        '            <div class="treeview-item-label">' + fileName + '</div>' +
                        '        </div>' +
                        '    </div>' +
                        '</div>');
                }
            }
        }
    });
}

function list_other() {
    fs.readdir(path.join(active_dir_project_www, 'file/'), (err, dir) => {
        $$(document).find('#list-file-other-new').empty();
        if (dir.length === 0) {
            //Do Nothing
        } else {
            for (var i = 0; i < dir.length; i++) {
                let fileName = dir[i];
                $$(document).find('#list-file-other').append(
                    '<li>' +
                    '    <div class="item-content">' +
                    '       <div class="item-media"><i class="material-icons text-color-red" id="btn-remove-other" data-file="' + fileName + '" style="cursor: pointer;">delete</i></div>' +
                    '       <div class="item-inner">' +
                    '       <div class="item-title">' + fileName + '</div>' +
                    '       </div>' +
                    '    </div>' +
                    '</li>');
                $$(document).find('#list-file-other-new').append(
                    '<div class="treeview-item">' +
                    '    <div class="treeview-item-root">' +
                    '        <div class="treeview-item-content">' +
                    '            <i class="icon f7-icons">document_text_fill</i>' +
                    '            <div class="treeview-item-label">' + fileName + '</div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>');
            }
        }
    });
}

function list_img() {
    fs.readdir(path.join(active_dir_project_www, 'img/'), (err, dir) => {
        $$(document).find('#list-file-other-new').empty();
        if (dir.length === 0) {
            //Do Nothing
        } else {
            for (var i = 0; i < dir.length; i++) {
                let fileName = dir[i];
                $$(document).find('#list-file-img').append(
                    '<li>' +
                    '    <div class="item-content">' +
                    '       <div class="item-media"><i class="material-icons text-color-red" id="btn-remove-other" data-file="' + fileName + '" style="cursor: pointer;">delete</i></div>' +
                    '       <div class="item-inner">' +
                    '       <div class="item-title">' + fileName + '</div>' +
                    '       </div>' +
                    '    </div>' +
                    '</li>');
                $$(document).find('#list-file-img-new').append(
                    '<div class="treeview-item">' +
                    '    <div class="treeview-item-root">' +
                    '        <div class="treeview-item-content">' +
                    '            <i class="icon f7-icons">document_text_fill</i>' +
                    '            <div class="treeview-item-label">' + fileName + '</div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>');
            }
        }
    });
}

/**
 * Create File 
 */

$$(document).on('click', '#btn-create-html', function() {
    app.popover.close();

    app.dialog.prompt('Filename (.html)', 'New HTML File', function(fileName) {
        fs.readFile(path.join(active_dir_project_www, 'pages/' + fileName), function(err, data) {
            if (err) {
                fileType = fileName.split('.');
                if (fileType[1] !== 'html') {
                    app.dialog.alert('Allow .html only', 'Information');
                } else if (fileType === null) {
                    fs.writeFileSync(path.join(active_dir_project_www, 'pages/' + fileName + '.html'), '', 'utf-8');
                } else {
                    fs.writeFileSync(path.join(active_dir_project_www, 'pages/' + fileName), '', 'utf-8');
                }
                list_html();
                func_code_open(fileName, 'pages', 'html');
            } else {
                app.dialog.alert('File Exist');
            }
        });
    });
});

$$(document).on('click', '#btn-create-js', function() {
    app.popover.close();

    app.dialog.prompt('Filename (.js)', 'New Javascript File', function(fileName) {
        fs.readFile(path.join(active_dir_project_www, 'js_app/' + fileName), function(err, data) {
            if (err) {
                fileType = fileName.split('.');
                if (fileType[1] !== 'js') {
                    app.dialog.alert('Allow .js only', 'Information');
                } else if (fileType === null) {
                    fs.writeFileSync(path.join(active_dir_project_www, 'js_app/' + fileName + '.js'), '', 'utf-8');
                } else {
                    fs.writeFileSync(path.join(active_dir_project_www, 'js_app/' + fileName), '', 'utf-8');
                }
                list_js();
                func_code_open(fileName, 'js_app', 'javascript');
            } else {
                app.dialog.alert('File Exist');
            }
        });
    });
});

$$(document).on('click', '#btn-create-css', function() {
    app.popover.close();

    app.dialog.prompt('Filename (.css)', 'New CSS File', function(fileName) {
        fs.readFile(path.join(active_dir_project_www, 'css/' + fileName), function(err, data) {
            if (err) {
                fileType = fileName.split('.');
                if (fileType[1] !== 'css') {
                    app.dialog.alert('Allow .css only', 'Information');
                } else if (fileType === null) {
                    fs.writeFileSync(path.join(active_dir_project_www, 'css/' + fileName + '.js'), '', 'utf-8');
                } else {
                    fs.writeFileSync(path.join(active_dir_project_www, 'css/' + fileName), '', 'utf-8');
                }
                list_css();
                func_code_open(fileName, 'css', 'css');
            } else {
                app.dialog.alert('File Exist');
            }
        });
    });
});

func_code_open = function(file, dir, type) {
    // save previous
    if (active_file_name !== '') {
        func_file_save(active_file_name, active_file_path);
    }

    active_file_name = file;
    active_file_name_replace = active_file_name.split(".").join("_");
    active_file_dir = dir;
    active_file_type = type;

    if (active_file_dir === "root") {
        if (active_file_name === "index.html") {
            active_file_path = path.join(active_dir_project_www, active_file_name);
        } else if (active_file_name === "main.js" || active_file_name === "package.json") {
            active_file_path = path.join(active_dir_project, active_file_name);
        }
    } else {
        active_file_path = path.join(active_dir_project_www, active_file_dir);
        active_file_path = path.join(active_file_path, active_file_name);
    }

    page_history = app.views.main.history;
    page_count = page_history.length;
    page_current = page_history[page_count - 1];

    if (page_current.split('/')[1] === "designer") {
        editor_value = editor.getHtml();
        editor_value = pretty(editor_value, { ocd: true });
        editor_style = editor.getCss();
        editor_style = pretty(editor_style, { ocd: true });

        // save designer
        fs.writeFileSync(active_file_path, editor_value, 'utf-8');
        var customcss = path.join(path.join(active_dir_project_www, 'css'), 'custom.css');
        fs.readFile(customcss, 'utf-8', (err, code_data) => {
            var customcss_value = beautify(editor_style, { format: 'css' });
            customcss_value = code_data + customcss_value;
            fs.writeFileSync(customcss, customcss_value, 'utf-8');

            func_tab_open();
            func_tab_toolbar(active_file_name, active_file_type);

            navigate_main_back();
        });
    } else {
        func_tab_open();
        func_tab_toolbar(active_file_name, active_file_type);
    }
}

/**
 * Keyboard Binding
 */

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS' && (event.ctrlKey || event.metaKey)) {
        page_history = app.views.main.history;
        page_count = page_history.length;
        page_current = page_history[page_count - 1];

        if (page_current.split('/')[1] === "designer") {
            editor_value = editor.getHtml();
            editor_value = pretty(editor_value, { ocd: true });
            editor_style = editor.getCss();
            editor_style = pretty(editor_style, { ocd: true });

            // save designer
            fs.writeFileSync(active_file_path, editor_value, 'utf-8');
            var customcss = path.join(path.join(active_dir_project_www, 'css'), 'custom.css');
            fs.readFile(customcss, 'utf-8', (err, code_data) => {
                var customcss_value = beautify(editor_style, { format: 'css' });
                customcss_value = code_data + customcss_value;
                fs.writeFileSync(customcss, customcss_value, 'utf-8');

                func_tab_open();
                func_tab_toolbar(active_file_name, active_file_type);
            });

            window.localStorage.clear();

            app.toast.create({
                text: 'File Saved',
                position: 'center',
                closeTimeout: 2000
            }).open();
        } else if (page_current.split('/')[1] === "editor") {
            if (active_file_name !== '') {
                var editor_value = we[active_file_name].getValue();
                fs.writeFileSync(active_file_path, editor_value, 'utf-8');

                app.toast.create({
                    text: 'File Saved',
                    position: 'center',
                    closeTimeout: 2000
                }).open();
            }
        }
    }
});

/**
 * NowDB Data Manager
 */

$$(document).on('click', '#btn-nowdb-windows-portable', function() {
    downloadNowDB("https://github.com/NowDB/Data-Manager/blob/master/NowDB%20Data%20Manager%201.1.0.exe?raw=true", path.join(active_visual7, 'NowDB Data Manager 1.1.0.exe'));
});

$$(document).on('click', '#btn-nowdb-windows-installer', function() {
    downloadNowDB("https://github.com/NowDB/Data-Manager/blob/master/NowDB%20Data%20Manager%20Setup%201.1.0.exe?raw=true", path.join(active_visual7, 'NowDB Data Manager Setup 1.1.0.exe'));
});

$$(document).on('click', '#btn-nowdb-macos-installer', function() {
    downloadNowDB("https://github.com/NowDB/Data-Manager/blob/master/NowDB%20Data%20Manager-1.1.0.dmg?raw=true", path.join(active_visual7, 'NowDB Data Manager-1.1.0.dmg'));
});

$$(document).on('click', '#btn-nowdb-linux-portable', function() {
    downloadNowDB("https://github.com/NowDB/Data-Manager/blob/master/NowDB%20Data%20Manager-1.1.0.AppImage?raw=true", path.join(active_visual7, 'NowDB Data Manager-1.1.0.AppImage'));
});

function downloadNowDB(url, dest, cb) {
    var progress_nowdb = 0;
    var dialog_nowdb = '';

    var total_bytes = 0;
    var received_bytes = 0;

    var file = fs.createWriteStream(dest);

    var req = https.get(url, function(response) {
        if ([301, 302].indexOf(response.statusCode) !== -1) {
            body = [];
            downloadNowDB(response.headers.location, dest, cb);
        } else if ([200].indexOf(response.statusCode) !== -1) {
            dialog_nowdb = app.dialog.progress('<i class="material-icons">get_app</i>', progress_nowdb);

            response.on('data', (chunk) => {
                received_bytes += chunk.length;
                percentage = (received_bytes * 100) / total_bytes;
                percent = Math.round(percentage).toFixed(0);

                dialog_nowdb.setProgress(percent);
                dialog_nowdb.setText(percent + ' %');
            });

            response.on('end', () => {
                dialog_nowdb.close();

                if (os.platform() === "darwin") {
                    ptyProcess.write('open ~/Visual7\r');
                } else if (os.platform() === "linux") {
                    ptyProcess.write('nautilus ~/Visual7\r');
                } else {
                    ptyProcess.write('cd %homepath%\r');
                    ptyProcess.write('cd Visual7\r');
                    ptyProcess.write('explorer .\r');
                }
            });
        }

        response.pipe(file);
        file.on('finish', function() {
            file.close();
        });
    });

    req.on('response', function(data) {
        total_bytes = parseInt(data.headers['content-length']);
    });
};