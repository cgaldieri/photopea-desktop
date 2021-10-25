const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Photopea');
    mainWindow.loadURL('https://www.photopea.com/');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

// Hide the toolbar and the menu bar
app.on('ready', () => {
    mainWindow.setMenu(null);
    mainWindow.setAutoHideMenuBar(true);
}
);
