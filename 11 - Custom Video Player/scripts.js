const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progressWrapper = document.querySelector('.progress');
const progressBar = document.querySelector('.progress_filled');
const playerBtn = document.querySelector('.player__button');
const sliderInputs = document.querySelectorAll('.player__slider');
const skipBtns = document.querySelectorAll('[data-skip]');

// to play and stop the video
function togglePlay() {
    switch (true) {
        case video.paused:
            video.play();
            break;
        default:
            video.pause()
    }
}

function updatePlayerBtn() {
    switch (true) {
        case video.paused:
            playerBtn.textContent = '►';
            break;
            default:
            playerBtn.textContent = '❚❚';
    } 
};

// event listeners
playerBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayerBtn);
video.addEventListener('pause', updatePlayerBtn);



