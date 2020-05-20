const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const mymachine = require('getmac').default;
var path = require('path');
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 650,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, '/www/img/256x256.png')
    });

    mainWindow.loadFile('www/index.html');

    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
});