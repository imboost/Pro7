var localStorage = require('localStorage');
const electron = require('electron');
const { ipcRenderer } = require('electron');
const remote = electron.remote;
const { dialog } = electron.remote;
const BrowserWindow = electron.remote.BrowserWindow;
const spawn = require('child_process').spawn;
const prompt = require('electron-prompt');
const shell = require('electron').shell;
const https = require('https');
const mkdirp = require('mkdirp');
const pretty = require('pretty');
const pty = require('node-pty');
const fs = require('fs-extra');
const path = require('path');
const url = require('url');
const os = require('os');
const { Terminal } = require('xterm');
const { FitAddon } = require('xterm-addon-fit');
const beautify = require('beautify');

function loadTheme(theme) {
    var path = '../node_modules/monaco-themes/themes/' + theme + '.json';
    return fetch(path).then(r => r.json()).then(data => {
        return data;
    });
}

const amdLoader = require('../node_modules/monaco-editor/min/vs/loader.js');
const amdRequire = amdLoader.require;
const amdDefine = amdLoader.require.define;

function uriFromPath(_path) {
    var pathName = path.resolve(_path).replace(/\\/g, '/');
    if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName;
    }
    return encodeURI('file://' + pathName);
}

amdRequire.config({
    baseUrl: uriFromPath(path.join(__dirname, '../node_modules/monaco-editor/min'))
});

// workaround monaco-css not understanding the environment
self.module = undefined;

let term = null;
let ptyProcess = null;

let active_os = os.homedir();
let active_pro7 = path.join(os.homedir(), 'Pro7/');
let active_project = '';

let active_dir_project = '';
let active_dir_project_www = '';

let active_file_name = '';
let active_file_name_replace = '';
let active_file_type = '';
let active_file_dir = '';
let active_file_path = '';

let active_tab_file = '';
let active_tab_file_replace = '';
let active_tab_file_type = '';
let active_tab_file_dir = '';
let active_tab_file_path = '';

let func_code_open = null;
let func_tab_open = null;
let func_tab_open_sibling = null;
let func_tab_close = null;
let func_tab_toolbar = null;
let func_tab_toolbar_close = null;
let func_file_save = null;
let func_file_remove = null;

let me = null; // monaco editor
var we = []; // window editor

// UI Designer
let editor = null;
let blockManager = null;

fs.readdir(path.join(os.homedir(), 'Pro7/'), (err, dir) => {
    if (err) {
        var dir = path.join(os.homedir(), 'Pro7/');
        fs.mkdirSync(dir);
    }
});