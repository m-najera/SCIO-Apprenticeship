const DRAW = 0;
const WINNER_A = 1;
const WINNER_B = 2;

function calculate() {
  var STAT_A = document.getElementById("ATK1").value;
  var STAT_B = document.getElementById("ATK2").value;
  var BONUS_A = parseInt(document.getElementById("BONUS1").value);
  var BONUS_B = parseInt(document.getElementById("BONUS2").value);
  var DEF = parseInt(document.getElementById("DEF").value);
  var ELE = document.getElementsByName("ELE1[]");
  var ELE_A = [];
  var ELE_B = [];
  var ENEMY = [];
  ELE.forEach(function (e) {
    ELE_A.push(e.checked);
  });
  ELE = document.getElementsByName("ELE2[]");
  ELE.forEach(function (e) {
    ELE_B.push(e.checked);
  });
  ELE = document.querySelectorAll(".ENEMY_ELE");
  ELE.forEach(function (e) {
    ENEMY.push(e.value);
  });
  var DMG_A = getTotalDamage(STAT_A, BONUS_A, ELE_A, DEF, ENEMY);
  var DMG_B = getTotalDamage(STAT_B, BONUS_B, ELE_B, DEF, ENEMY);
  document.getElementById("TOTAL1").innerHTML = DMG_A;
  document.getElementById("TOTAL2").innerHTML = DMG_B;
  resetVS();
  if (DMG_A < DMG_B) {
    winner(2);
  } else if (DMG_B < DMG_A) {
    winner(1);
  } else {
    winner(0);
  }
}

function getTotalDamage(STAT, BONUS, ELE, DEF, ENEMY) {
  var DMG = (STAT * STAT * (1 + BONUS / 100)) / DEF;
  var ELE_PART = 0;
  var counter = 0;

  for (let index = 0; index < ELE.length; index++) {
    if (ELE[index]) {
      counter++;
      ELE_PART += parseInt(ENEMY[index]);
    }
  }
  if (counter == 0) return Math.round(DMG);
  var MOD = (ELE_PART / 100) / counter;
  return Math.round(DMG * (1 - MOD));
}

function resetVS() {
  document.getElementById("UNIT_A").classList.remove("winner");
  document.getElementById("UNIT_A").classList.remove("draw");
  document.getElementById("UNIT_B").classList.remove("winner");
  document.getElementById("UNIT_B").classList.remove("draw");
}

function winner(val) {
  if (val == 0) {
    document.getElementById("UNIT_A").classList.add("draw");
    document.getElementById("UNIT_B").classList.add("draw");
  } else if (val == 1) {
    document.getElementById("UNIT_A").classList.add("winner");
  } else if (val == 2) {
    document.getElementById("UNIT_B").classList.add("winner");
  }
}

function loadPreset(STATS) {
  document.getElementById("DEF").value = STATS[0];
  for (let index = 1; index < 9; index++) {
    document.getElementById("RES" + index).value = STATS[index];
  }
}

const GLACIAL = [15, -1000, 300, 0, 300, 0, 0, 0, 0];
const ELEFIK = [45, 0, 0, 0, 0, -50, 300, 0, 0];
const OMEGA = [250, 10000, 10000, -300, 10000, 10000, 10000, 10000, 10000];
const LEVIA = [250, 0, 0, -100, 10000, 0, 0, 0, 0];

document.getElementById("preset1").addEventListener("click", x => {
  loadPreset(GLACIAL);
});
document.getElementById("preset2").addEventListener("click", x => {
  loadPreset(ELEFIK);
});
document.getElementById("preset3").addEventListener("click", x => {
  loadPreset(OMEGA);
});
document.getElementById("preset4").addEventListener("click", x => {
  loadPreset(LEVIA);
});