const Store = require('electron-store')
const config = new Store()

var vm_datasheet = new Vue({
    el: '#fands-setup',
    data: {
      fands: {
        Type: 'G-315A',
        Pe: 0,
        RPM: 0,
        Un: 0,
        In: 0,
        Ps: 0,
        Q: 0,
        Rf: 0
      }
    },
    methods: {
      save_config: function(event) {
        config.set('datasheet', this.fands)
      },
      load_config: function(event) {
        this.fands = config.get('datasheet')
      }
    }
})