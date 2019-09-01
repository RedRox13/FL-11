export let counter = 0;
export let score = 0;
export function game(value) {
  let number = Math.floor(1 + Math.random() * 3);
  let machine;
  switch (number) {
    case 1:
      machine = "Paper";
      break;
    case 2:
      machine = "Rock";
      break;
    case 3:
      machine = "Scissors";
      break;
  }
  check(value, machine);
}
window.game = game;
window.counter = counter;
window.score = score;
