const Store = require('electron-store')
const config = new Store()

var vm_nozzle = new Vue({
    el: '#nozzle-setup',
    data: {
      nozzleD: {
        N1: 0,
        N2: 0,
        N3: 0,
        N4: 0,
        N5: 0,
        N6: 0,
        N7: 0,
        N8: 0,
        N9: 0,
      }
    },
    methods: {
      save_config: function(event) {
        config.set('nozzle', this.nozzleD)
        console.log('Save config success!')
        console.log(config.get('nozzle'))
      },
      load_config: function(event) {
        this.nozzleD = config.get('nozzle')
      }
    }
})