const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progressWrapper = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playerBtn = document.querySelector('.player__button');
const sliderInputs = document.querySelectorAll('.player__slider');
const skipBtns = document.querySelectorAll('[data-skip]');
const fullScreenBtn = document.querySelector('..full__screen__btn');

// to play and stop the video
function togglePlay() {
    switch (true) {
        case video.paused:
            video.play();
            break;
        default:
            video.pause()
    };
};

function updatePlayerBtn() {
    switch (true) {
        case video.paused:
            playerBtn.textContent = '►';
            break;
        default:
            playerBtn.textContent = '❚❚';
    } 
};

function skipVideo() {
    // console.log(this.dataset.skip);
    video.currentTime = video.currentTime + parseFloat(this.dataset.skip)
};

function handleRangeUpdate() {
    // console.log(this.value);
    // console.log(this.name);

    video[this.name] = this.value;
};

function handleProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;

    progressBar.style.flexBasis = `${percent}%`;
};

// event listeners
playerBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayerBtn);
video.addEventListener('pause', updatePlayerBtn);
skipBtns.forEach(skipBtn => {
    skipBtn.addEventListener('click', skipVideo);
});
sliderInputs.forEach(sliderInput => {
    sliderInput.addEventListener('change', handleRangeUpdate)
});
video.addEventListener('timeupdate', handleProgressBar);



