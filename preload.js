const { ipcRenderer, contextBridge } = require("electron");

const F12 = () => {
  ipcRenderer.send('F12')
}

const submit = (username) => {
  ipcRenderer.send('formSubmitted', username)
}

contextBridge.exposeInMainWorld('preloadAPIs', {
  F12: F12,
  submit: submit
})
