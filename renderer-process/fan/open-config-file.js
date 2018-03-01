const ipc = require('electron').ipcRenderer

const openBtn = document.getElementById('open-button')

openBtn.addEventListener('click', function (event) {
  ipc.send('open-file-dialog')
})

ipc.on('load-config-file', function (event, path) {
  document.getElementById('config-file-status').innerHTML = `读取成功: ${path}`
  // console.log(path)
})