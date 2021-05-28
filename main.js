const { app, BrowserWindow, ipcMain, ipcRenderer, webContents } = require('electron')
const child_process = require('child_process')
const path = require('path')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1364,
    height: 693,
    icon: __dirname + '/icon.png',
    webPreferences: {
    //   nodeIntegration: true,
    //   contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile('index.html')

  ipcMain.on('F12', (event, arg) => {
    mainWindow.webContents.toggleDevTools()
  })

  ipcMain.on('formSubmitted', (event, username) => {
    console.log(`The username is: ${username}`)
    debugger
    mainWindow.minimize()
    mainWindow.hide()
    let hackPath = path.join(process.env.APPDATA, '.minecraft', 'hack_with_input.bat')
    child_process.execFile(hackPath, [username], (err, stdout, stderr) => {
      console.log(err)
      console.log(stdout)
      console.log(stderr)
      mainWindow.close()
    })
  })    
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
