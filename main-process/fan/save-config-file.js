const {ipcMain, dialog} = require('electron')

ipcMain.on('save-config-file', (event) => {
  const options = {
    title: '保存配置文件',
    filters: [
      { name: 'Config File', extensions: ['json'] }
    ]
  }
  dialog.showSaveDialog(options, (filename) => {
    event.sender.send('saved-file', filename)
  })
})
