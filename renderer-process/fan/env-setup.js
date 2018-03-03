const Store = require('electron-store')
const config = new Store()

var vm_env = new Vue({
    el: '#env-setup',
    data: {
      env: {
        Temp: 20.0,
        RH: 50,
        ATM: 101325,
        Density: 1.2,
        Nian: 1.45,
      }
    },
    methods: {
      save_config: function(event) {
        config.set('env', this.env)
      },
      load_config: function(event) {
        this.env = config.get('env')
      }
    }
})