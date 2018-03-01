const {shell} = require('electron')
const os = require('os')
const path = require('path')

const pdfFileBtn = document.getElementById('open-pdf-file')

pdfFileBtn.addEventListener('click', (event) => {
  shell.openItem(path.resolve('assets', 'pdf', 'AMCA-210-2007.pdf'))
})
