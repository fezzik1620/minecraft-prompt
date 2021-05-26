const {app, BrowserWindow} = require('electron')
// const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1364,
    height: 693,
    icon: __dirname + '/icon.png'
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  })
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
