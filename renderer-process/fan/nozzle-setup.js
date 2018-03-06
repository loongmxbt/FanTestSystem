const Store = require('electron-store')
const config = new Store()

// 全局变量 or 局部变量 再 electron 中是否能 vm_nozzle
var vm_nozzle = new Vue({
    el: '#nozzle-setup',
    data: {
      nozzleD: {
        N1: 50,
        N2: 50,
        N3: 50,
        N4: 50,
        N5: 110,
        N6: 110,
        N7: 110,
        N8: 130,
        N9: 150,
      }
    },
    methods: {
      save_config: function(event) {
        console.log('Press save config!')
        config.set('nozzleD', this.nozzleD)
        console.log('Success save config!')
      },
      load_config: function(event) {
        console.log('Press load config!')
        this.nozzleD = config.get('nozzleD')
        console.log('Success load config!')
      }
    }
})