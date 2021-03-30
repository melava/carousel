const previous = document.getElementById('prev');
const next = document.getElementById('next');
const first = document.getElementById('first');
const last = document.getElementById('last');
const images = Array.from(document.getElementsByClassName('image'));
let i = 0;
let nextIndex = 1;
let previousIndex = 7;
let position = 0;

const previousImg = () => {
    position < 0 ? position += 500 : position = -3500;
    images.forEach(image => {
        image.classList.remove('current');
        image.classList.remove('following');
        image.classList.remove('preceding');
        image.style.left = position+'px';
    });
    if (i < 1) {
        i = 7;
        nextIndex = 0;
        previousIndex = i - 1;
    } else {
        i--
        nextIndex = i + 1;
        i === 0 ? previousIndex = 7 : previousIndex = i - 1;
    }
    images[i].classList.add('current');
    images[nextIndex].classList.add('following');
    images[previousIndex].classList.add('preceding');
    
}

const nextImg = () => {
    position > -3500 ? position -= 500 : position = 0;
    images.forEach(image => {
        image.classList.remove('current');
        image.classList.remove('following');
        image.classList.remove('preceding');
        image.style.left = position+'px';
    });
    if (i < 7) {
        i++;
        console.log(i)
        i === 7 ? nextIndex = 0: nextIndex = i + 1;
        previousIndex = i - 1;
    } else {
        i = 0;
        nextIndex = i + 1;
        previousIndex = 7;
    }
    images[i].classList.add('current');
    images[nextIndex].classList.add('following');
    images[previousIndex].classList.add('preceding');
}


previous.addEventListener('click', previousImg)
next.addEventListener('click', nextImg)