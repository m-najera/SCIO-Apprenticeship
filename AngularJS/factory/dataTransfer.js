app.factory("DataTransfer", function () {
  var dt = {};
  dt.enemy = {
    name: "a",
    def: 1,
    elements: [0, 0, 0, 0, 0, 0, 0, 0]
    
  };
  dt.unit1 = {
    atk: 1000,
    bonus: 0,
    elements: [false, false, false, false, false, false, false, false],
    total: 1000000,
    class: "draw",
    diff: 0
  }
  dt.unit2 = {
    atk: 1000,
    bonus: 0,
    elements: [false, false, false, false, false, false, false, false],
    total: 1000000,
    class: "draw",
    diff: 0
  }
  dt.enemyPresets = [{
    name: "GLACIAL",
    def: 15,
    elements: [-1000, 300, 0, 300, 0, 0, 0, 0],
    img: "./img/glacial.png"
  },
  {
    name: "ELEFIKERAS",
    def: 45,
    elements: [0, 0, 0, 0, -50, 300, 0, 0],
    img: "./img/elefik.png"
  },
  {
    name: "OMEGA WEAPON",
    def: 250,
    elements: [10000, 10000, -300, 10000, 10000, 10000, 10000, 10000],
    img: "./img/omega.png"
  },
  {
    name: "LEVIATAN",
    def: 250,
    elements: [0, 0, -100, 10000, 0, 0, 0, 0],
    img: "./img/levia.png"
  }
];
  dt.getEnemyPresets = function () {
    return dt.enemyPresets;
  }
  dt.setEnemyPresets = function (e) {
    dt.enemyPresets = e;
  }
  dt.getEnemyData = function () {
    return dt.enemy;
  }
  dt.setEnemyData = function (e) {
    dt.enemy = e;
  }
  dt.setUnitsData = function (u1, u2) {
    dt.unit1 = u1;
    dt.unit2 = u2;
  }
  dt.getUnitsData = function () {
    return [dt.unit1, dt.unit2];
  }
  return dt;
})