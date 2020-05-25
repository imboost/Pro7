$$(document).on('click', '#btn-close', function() {
    var window = remote.getCurrentWindow();
    window.close();
});

$$(document).on('click', '#btn-minimize', function() {
    var window = remote.getCurrentWindow();
    window.minimize();
});

$$(document).on('click', '#btn-maximize', function() {
    var window = remote.getCurrentWindow();
    window.maximize();
});

$$(document).on('click', '#btn-app-preview', function() {
    panel_right.open();
});

window.onresize = function() {
    panel_left_morph();

    view_main.router.refreshPage();

    page_history = app.views[0].history;
    page_count = page_history.length;
    page_current = page_history[page_count - 1];
    if (page_current === '/') {
        terminal_home();
    }
};

var panel_left_morph = function() {
    if (window.innerWidth >= 700) {
        panel_left.open();
        $$(document).find('#btn-panel-left').hide();
    } else if (window.innerWidth < 700) {
        panel_left.close();
        $$(document).find('#btn-panel-left').show();
    }
}

var navigate_main_back = function() {
    page_history = app.views.main.history;
    page_count = page_history.length;
    page_current = page_history[page_count - 1];
    page_previous = page_history[page_count - 2];

    app.views.main.router.back();
}

var navigate_main_to = function(path, reloadCurrent = false, reloadPrevious = false, reloadAll = false, clearPreviousHistory = false, ignoreCache = false, animate = false) {
    app.views.main.router.navigate(path, {
        reloadCurrent: reloadCurrent,
        reloadPrevious: reloadPrevious,
        reloadAll: reloadAll,
        clearPreviousHistory: clearPreviousHistory,
        ignoreCache: ignoreCache,
        animate: animate,
    });
}

var navigate_left_back = function() {
    page_history = app.views[0].history;
    page_count = page_history.length;
    page_current = page_history[page_count - 1];
    page_previous = page_history[page_count - 2];

    app.views[0].router.back();
}

var navigate_left_to = function(path, reloadCurrent = false, reloadPrevious = false, reloadAll = false, clearPreviousHistory = false, ignoreCache = false, animate = false) {
    app.views[0].router.navigate(path, {
        reloadCurrent: reloadCurrent,
        reloadPrevious: reloadPrevious,
        reloadAll: reloadAll,
        clearPreviousHistory: clearPreviousHistory,
        ignoreCache: ignoreCache,
        animate: animate,
    });
}

function uriFromPath(_path) {
    var pathName = path.resolve(_path).replace(/\\/g, '/');
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
    }
    return encodeURI('file://' + pathName);
}

var mkdir = function(dir) {
    // making directory without exception if exists
    try {
        fs.mkdirSync(dir, 0755);
    } catch (e) {
        if (e.code != "EEXIST") {
            throw e;
        }
    }
};

var rmdir = function(dir) {
    if (path.existsSync(dir)) {
        var list = fs.readdirSync(dir);
        for (var i = 0; i < list.length; i++) {
            var filename = path.join(dir, list[i]);
            var stat = fs.statSync(filename);

            if (filename == "." || filename == "..") {
                // pass these files
            } else if (stat.isDirectory()) {
                // rmdir recursively
                rmdir(filename);
            } else {
                // rm fiilename
                fs.unlinkSync(filename);
            }
        }
        fs.rmdirSync(dir);
    } else {
        console.warn("warn: " + dir + " not exists");
    }
};

var copyDir = function(src, dest) {
    mkdir(dest);
    var files = fs.readdirSync(src);
    for (var i = 0; i < files.length; i++) {
        var current = fs.lstatSync(path.join(src, files[i]));
        if (current.isDirectory()) {
            copyDir(path.join(src, files[i]), path.join(dest, files[i]));
        } else if (current.isSymbolicLink()) {
            var symlink = fs.readlinkSync(path.join(src, files[i]));
            fs.symlinkSync(symlink, path.join(dest, files[i]));
        } else {
            copy(path.join(src, files[i]), path.join(dest, files[i]));
        }
    }
};

var copy = function(src, dest) {
    var oldFile = fs.createReadStream(src);
    var newFile = fs.createWriteStream(dest);
    oldFile.pipe(newFile);
};