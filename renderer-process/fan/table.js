const Store = require('electron-store')
const config = new Store()

var vm_table = new Vue({
  el: '#add-record',
  data: {
    id: 1,
    nozzles: [],
    Ps: 0,
    dP: 0,
    records: [

    ]
  },
  methods: {
    add_record: function(event) {

    },
    edit_record: function(event) {

    },
    del_record: function(event) {

    }
  }
})