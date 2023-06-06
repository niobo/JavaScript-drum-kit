// removes "playing" class from the key
function removeTransition (e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}


// plays the sound of the key if finds so
function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`div[data-key="${e.code}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));

//end of key animation
keys.forEach((key) => key.addEventListener('transitionend',
                                           removeTransition));
window.addEventListener('keydown', playSound);