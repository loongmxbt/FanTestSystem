const Store = require('electron-store')
const config = new Store()

var vm_mode = new Vue({
  el: '#mode-setup',
  data: {
    mode: 0,
    defaultClass: 'pure-button',
    successClass: 'button-success'
  },
  methods: {
    inletFanSetup: function(event) {
      this.mode = 0
      config.set('mode', this.mode)
    },
    outletFanSetup: function(event) {
      this.mode = 1
      config.set('mode', this.mode)
    }
  }
})