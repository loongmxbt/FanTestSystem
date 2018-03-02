const ipc = require('electron').ipcRenderer

const saveBtn = document.getElementById('save-button')

saveBtn.addEventListener('click', function (event) {


  ipc.send('save-config-file')
})

ipc.on('saved-file', function (event, path) {
  if (!path) path = 'No path'
  document.getElementById('file-saved').innerHTML = `Path selected: ${path}`
})