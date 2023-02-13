const audioFiles = document.querySelectorAll('audio');

const playAudio = (audioElement) => {
    const audioFile = new Audio(audioElement.src);
    setTimeout(() => {
        audioFile.play()
    }, 0);
}

const handleKeyPress = () => {
    document.addEventListener('keydown', (e) => {
        const dataCode = e.code;
        const dataKeyCode = e.keyCode;
        audioFiles.forEach((audio) => {
            if (dataCode !== undefined && dataCode === audio.dataset.code) {
                playAudio(audio)
            //Fallback in case browser does not support KeyboardEvent.code property and is still using deprecated KeyboardEvent.keyCode property instead
            } else if (dataKeyCode === audio.dataset.keycode) {
                playAudio(audio)
            }
        });
    });
}

const handleMouseClick = () => {
    const keyDivs = document.querySelectorAll('.key');
    keyDivs.forEach((div) => {
        div.addEventListener('click', () => {
            audioFiles.forEach((audio) => {
                if (div.dataset.code === audio.dataset.code) {
                    playAudio(audio);
                }
            });
        });
    });
}

handleKeyPress();
handleMouseClick();
