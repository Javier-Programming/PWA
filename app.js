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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() => console.log("Service Worker registrado"))
    .catch(console.error);
}
