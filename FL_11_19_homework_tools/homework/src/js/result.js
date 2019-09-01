export function result() {
  let result_box = document.getElementById("result");
  let div = document.createElement("div");
  if (counter === 3) {
    if (score >= 2) {
      div.textContent = `${score} - ${3 - score}. You WON this game!`;
      result_box.appendChild(div);
    } else {
      div.textContent = `${score} - ${3 - score}. You LOST this game!`;
      result_box.appendChild(div);
    }
    block();
  }
}
window.result = result;
