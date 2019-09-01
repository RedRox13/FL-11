export function block() {
  let button_1 = document.getElementById("paperBtn");
  let button_2 = document.getElementById("rockBtn");
  let button_3 = document.getElementById("scissorsBtn");
  if (counter === 3) {
    button_1.disabled = true;
    button_2.disabled = true;
    button_3.disabled = true;
  } else {
    button_1.disabled = false;
    button_2.disabled = false;
    button_3.disabled = false;
  }
}
window.block = block;
