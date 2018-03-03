const Store = require('electron-store')
const config = new Store()

var vm_table = new Vue({
  el: '#add-record',
  data: {
    new_rec: {
      id: 1
      nozzles: [],
      Ps: 0,
      dP: 0,
    },
    records: [

    ]
  },
  methods: {
    add_record: function(event) {
      this.records.push(new_rec)
    },
    edit_record: function(event) {
      // this.array.remove
    },
    del_record: function(event) {

    }
  }
})