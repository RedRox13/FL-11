export function check(user, machine) {
  counter++;
  let result_box = document.getElementById("result");
  let div = document.createElement("div");
  switch (user) {
    case "Paper":
      if (machine === "Rock") {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve WON!`;
        score++;
      } else {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve LOST!`;
      }
      break;
    case "Rock":
      if (machine === "Scissors") {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve WON!`;
        score++;
      } else {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve LOST!`;
      }
      break;
    case "Scissors":
      if (machine === "Paper") {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve WON!`;
        score++;
      } else {
        div.textContent = `Round ${counter}. ${user} vs. ${machine}. You\`ve LOST!`;
      }
      break;
  }
  if (user === machine) {
    counter--;
    div.textContent = `${user} vs. ${machine}. This round is not counting`;
    result_box.appendChild(div);
  }
  result_box.appendChild(div);
  result();
}
window.check = check;
