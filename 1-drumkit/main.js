// Play Sound
function playSound(ev) {
    // select audio element
    const audio = document.querySelector(`audio[data-key = "${ev.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

    if(!audio) return; // would stop the function from running
    audio.currentTime = 0; // rewind to 0
    audio.play();
    key.classList.add('playing'); // Here we create the css transition
}
// Remove Transition
function removeTransition(ev) {
    if(ev.propertyName !== 'transform') return; // continue
    this.classList.remove('playing'); // remove the class
}

const keys = document.querySelectorAll('.key');
// Action to stop
keys.forEach(key =>key.addEventListener('transitionend', removeTransition ));
// Action to play
window.addEventListener('keydown', playSound);
