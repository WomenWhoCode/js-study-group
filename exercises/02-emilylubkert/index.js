function playSound(src) {
  let sound = new Audio(src);
  sound.play();
}

let sounds = document.getElementsByTagName('audio');
sounds = [...sounds];

document.addEventListener(
  'keydown',
  (event) => {
    let code = event.code;
    for (let sound of sounds) {
      if (code === sound.dataset.key) sound.play();
    }
  },
  false
);
