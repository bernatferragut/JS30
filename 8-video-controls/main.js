// JS
// 1. Get our Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progFilled = progress.querySelector('.progress__filled');

// 2. Build our functions

function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progFilled.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// 3. Hook up to the event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
// progress could work too
let mousedown = false;
progress.addEventListener('click', scrub);