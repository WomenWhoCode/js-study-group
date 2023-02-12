const $ = document;
const AUDIO = $.getElementsByTagName('audio');
const AUDIO_LIB = {};

const init = () => {
    for(let i= 0; i < AUDIO.length; i++){
        const key = AUDIO[i].getAttribute('data-key');
        const src = AUDIO[i].getAttribute('src');
        AUDIO_LIB[key] = src;
    }
}

const playAudio = (keycode) => {
        try{
            if(AUDIO_LIB[keycode]){
              const audio = $.querySelector(`audio[data-key="${keycode}" ]`); 
              audio.play();
            }
        } 
        catch(error){
            console.log(error)
        }    }

window.addEventListener('keyup',(e) =>{
    keycode = e.keyCode; // eslint throw error that keyCode is deprectated now
    playAudio(keycode);
});

window.addEventListener('load',(e) =>{
   init();
});
