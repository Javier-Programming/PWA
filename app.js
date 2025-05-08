function playSound(name) {
  const audio = new Audio(`sounds/${name}.wav`);
  audio.play();
}

document
  .getElementById("snare")
  .addEventListener("click", () => playSound("snare"));
document
  .getElementById("kick")
  .addEventListener("click", () => playSound("kick"));
