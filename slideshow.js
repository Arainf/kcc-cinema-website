// JavaScript to control the curtains animation
const rnOuter = document.querySelector('.rnOuter');
const rnInner = document.querySelector('.rnInner');
const rnOuter2 = document.querySelector('.rnOuter2');
const rnInner2 = document.querySelector('.rnInner2');
const video = document.querySelector('#showcase-video');
video.muted = false;

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 150) {
        video.muted = true;
        rnInner.style.animation = 'closeAnimation1 2s ease-in-out forwards';
        rnInner2.style.animation = 'closeAnimation2 2s ease-in-out forwards';
    } else {
        video.muted = false;
        rnInner2.style.animation = 'openAnimation2 3s ease-in-out forwards'
        rnInner.style.animation = 'openAnimation1 3s ease-in-out forwards'
    }
});
