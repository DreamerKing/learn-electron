const { app, BrowserWindow, ipcMain } = require('electron');
const { join } = require('path');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

// 使用wenReady() 代替 on('ready')
app.whenReady().then(() => {
    createWindow();
    ipcMain.handle('ping', () => {
        return 'pong'
    })
    app.on('activate', () => {
        if (!BrowserWindow.getAllWindows().length) {
            createWindow()
        }
    })
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
}).on('error', (e) => {
    console.error(e);
});
