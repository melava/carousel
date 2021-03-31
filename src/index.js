const previous = document.getElementById('prev');
const next = document.getElementById('next');
const first = document.getElementById('first');
const last = document.getElementById('last');
const images = Array.from(document.getElementsByClassName('image'));
const maxIndex = images.length-1;

let i = 0;
let nextIndex = 1;
let previousIndex = maxIndex;

const previousImg = () => {
    images.forEach(image => {
        image.classList.remove('current-view');
        image.classList.remove('next-view');
        image.classList.remove('previous-view');
    });
    if (i < 1) {
        i = maxIndex;
        nextIndex = 0;
        previousIndex = i - 1;
    } else {
        i--
        nextIndex = i + 1;
        i === 0 ? previousIndex = maxIndex : previousIndex = i - 1;
    }
    images[nextIndex].classList.add('next-view');
    images[previousIndex].classList.add('previous-view');
    images[i].classList.add('current-view');
    
}

const nextImg = () => {
    images.forEach(image => {
        image.classList.remove('current-view');
        image.classList.remove('next-view');
        image.classList.remove('previous-view');
    });
    if (i < maxIndex) {
        i++;
        i === maxIndex ? nextIndex = 0: nextIndex = i + 1;
        previousIndex = i - 1;
    } else {
        i = 0;
        nextIndex = i + 1;
        previousIndex = maxIndex;
    }
    images[previousIndex].classList.add('previous-view');
    images[nextIndex].classList.add('next-view');
    images[i].classList.add('current-view');
}


previous.addEventListener('click', previousImg)
next.addEventListener('click', nextImg)