const Store = require('electron-store')
const config = new Store()
const _ = require('lodash');

var vm_table = new Vue({
  el: '#table_setup',
  data: {
    rec: {
      id: 1,
      nozzleId: [],
      Ps: 0,
      dP: 0,
      U: 0,
      I: 0,
      n: 0
    },
    records: [
      {id: 1, nozzleId: [0], Ps: 1, dP: 1, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
      {id: 2, nozzleId: [1,2], Ps: 2, dP: 2, V: 0.5, Q: 200, U: 220, I: 0.5, n: 1000},
      {id: 3, nozzleId: [1,2,3], Ps: 3, dP: 3, V: 0.5, Q: 100, U: 220, I: 0.5, n: 1000},
    ]
  },
  computed: {
    airViscosity: function () {
      var Tair = config.get('env.Temp')
      return (17.23 + 0.048 * Tair) * 1e-6
    },
    airDensity: function () {
      return config.get('env.Density')
    },
    Un: function () {
      return Math.sqrt(2*this.rec.dP/this.airDensity)
    },
    nozzleQn: function() {
      var nozzleQn = []
      for (var i = 0; i < this.rec.nozzleId.length; i++) {
        var nId = this.rec.nozzleId[i]
        // console.log('NID: ' + nId)
        var Dn = config.get(`nozzleD.N${nId}`)
        // console.log('Dn: ' +  Dn)
        var An = Dn * Dn / (4*Math.PI)
        var Re = Dn * this.Un * this.airDensity / this.airViscosity
        var Cd = 0.9986 - 7.006/Math.sqrt(Re)+134.6/Re
        var Qn = Cd * this.Un * An
        nozzleQn.push(Qn)

      }
      return nozzleQn
    },
    Qt: function() {
      var Qt = 0
      for (var i = 0; i < this.nozzleQn.length; i++) {
        Qt += this.nozzleQn[i]
      }
      return Qt
    }
  },
  methods: {
    add_record: function(event) {
      console.log(this.airDensity)
      console.log(this.airViscosity)
      console.log(this.Un)
      console.log(this.nozzleId)
      console.log(this.nozzleQn)
      console.log(this.Qt)

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
      var n = event.target.id
      var rec = _.nth(this.records, n)
      // 根据 id 读取 对应的一列
    },
    del_record: function(event) {
      // 根据 id 删除
    }
  }
})