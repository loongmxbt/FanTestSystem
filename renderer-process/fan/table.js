const Store = require('electron-store')
const config = new Store()

var vm_table = new Vue({
  el: '#table_setup',
  data: {
    rec: {
      id: 1,
      nozzleId: [],
      nozzleQn: [],
      Ps: 0,
      dP: 0,
      Qt: 0
    },
    records: [
      {id: 1, nozzleId: [0], Ps: 1, dP: 1, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
      {id: 2, nozzleId: [1,2], Ps: 2, dP: 2, V: 0.5, Q: 200, U: 220, I: 0.5, n: 1000},
      {id: 3, nozzleId: [1,2,3], Ps: 3, dP: 3, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
    ]
  },
  methods: {
    add_record: function(event) {
      const Density = config.get('env.Density')
      console.log(Density)
      // this.rec.id++
      // // 1. 计算 Un 风俗
      // var Un = Math.sqrt(2*this.rec.dP/Density)

      // for (var i = 0; i < this.rec.nozzleId.length; i++) {
      //   // 获取当前喷嘴直径
      //   var Dn = this.rec.nozzleId[i]
      //   var An = Dn ^ 2 / (4*pi)
      //   // 2. 计算 Re
      //   var Re = Dn * Un / v
      //   // 3. 计算 Cd
      //   var Cd = 0.9986 - 7.006/Math.sqrt(Re)+134.6/Re
      //   // 4. 计算 Qn
      //   var Qn = Cd * Un * An
      //   this.nozzleQn.push(Qn)
      // }

      // this.records.push(rec)
    },
    edit_record: function(event) {
      // 根据 id 读取 对应的一列
    },
    del_record: function(event) {
      // 根据 id 删除
    }
  }
})