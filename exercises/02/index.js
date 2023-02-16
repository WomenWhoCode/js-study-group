function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
  }
  window.addEventListener('keydown', playSound);    