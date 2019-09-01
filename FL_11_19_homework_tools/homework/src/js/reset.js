export let reset = () => {
  let result_box = document.getElementById("result");
  while (result_box.firstChild) {
    result_box.removeChild(result_box.firstChild);
  }
  counter = 0;
  score = 0;
  block();
};
window.reset = reset;
