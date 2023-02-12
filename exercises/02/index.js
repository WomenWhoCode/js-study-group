const audioFiles = document.querySelectorAll('audio')
console.log(audioFiles);

const handleKeyPress = () => {
    document.addEventListener('keydown', (e) => {
        const pressedKey = e.code;
        audioFiles.forEach((audio) => {
            if (pressedKey === audio.dataset.key) {
                const audioFile = new Audio(audio.src);
                setTimeout(() => {
                    audioFile.play()
                }, 0);
            }
        });
    });
}

handleKeyPress();