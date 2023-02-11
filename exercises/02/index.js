const $ = document;
const AUDIO = $.getElementsByTagName('audio');

const playAudio = (keycode) => {
    for(let i = 0; i <= AUDIO.length; i++){
        try{
            if(AUDIO[i].getAttribute('data-key', keycode)){
                AUDIO[i].play();
                break;
            }
            else{
                console.log('Press the correct key')
            }
        }
        catch(error){
            console.log(error)
        }    }
}

window.addEventListener('keyup',(e) =>{
    keycode = e.keyCode; // eslint throw error that keyCode is deprectated now
    playAudio(keycode);
});
