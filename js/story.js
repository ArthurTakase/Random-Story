let themes = ["j'ai mangé un chat.",
              "J'ai mangé un chier.",
              "Je me suis fais enlever par des aliens."];
let dice1 = ["1", "2", "3", "4", "5", "6"];
let dice2 = ["1", "2", "3", "4", "5", "6"];
let dice3 = ["1", "2", "3", "4", "5", "6"];
let dice4 = ["1", "2", "3", "4", "5", "6"];
let dice5 = ["1", "2", "3", "4", "5", "6"];
let dice6 = ["1", "2", "3", "4", "5", "6"];

function random(mn, mx) {
  return Math.random() * (mx - mn) + mn;
}

function change_value() {
  document.getElementById('span1').innerHTML = "yo";
}
