const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const mymachine = require('getmac').default;
var path = require('path');
let mainWindow;

function createWindow() {
    const { screen } = require('electron');
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: (width * 90) / 100,
        height: (height * 90) / 100,
        frame: false,
        resizable: true,
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

ipcMain.on('getmac', (event, args) => {
    var uuid = mymachine();
    event.sender.send('getmac-return', '{"uuid":"' + uuid + '"}');
});

ipcMain.on('devtool', (event, args) => {
    mainWindow.webContents.openDevTools();
});

app.on('ready', createWindow);

app.on('window-all-closed', function() {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
    if (mainWindow === null) createWindow();
});

app.allowRendererProcessReuse = false;