const Store = require('electron-store')
const config = new Store()

var vm_table = new Vue({
  el: '#table_setup',
  data: {
    rec: {
      id: 1,
      nozzles: [],
      Ps: 0,
      dP: 0,
    },
    records: [
      {id: 1, nozzles: [0], Ps: 1, dP: 1, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
      {id: 2, nozzles: [1,2], Ps: 2, dP: 2, V: 0.5, Q: 200, U: 220, I: 0.5, n: 1000},
      {id: 3, nozzles: [1,2,3], Ps: 3, dP: 3, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
    ]
  },
  methods: {
    add_record: function(event) {
      this.rec.id++
      this.records.push(rec)
    },
    edit_record: function(event) {
      // this.array.remove
    },
    del_record: function(event) {

    }
  }
})