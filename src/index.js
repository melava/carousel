const previous = document.getElementById('prev');
const next = document.getElementById('next');
const images = Array.from(document.getElementsByClassName('image'));
const dots = Array.from(document.getElementsByClassName('dot'));

const maxIndex = images.length-1;

let i = 0;
let nextIndex = 1;
let previousIndex = maxIndex;

const dotsContent = () => {
    dots.forEach(dot => {
        dot.className.includes('current') ? dot.textContent = '*' : dot.textContent = 'o';
    });
}

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
    dots.forEach(dot => dot.classList.remove('current'));
    dots[i].classList.add('current');
    dotsContent();
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
    dots.forEach(dot => dot.classList.remove('current'));
    dots[i].classList.add('current');
    dotsContent();
}

const changeImg = (tg) => {
    let multiplier;
    let previousCurrentPosition;
    let newCurrentPosition = tg.dataset.position - 1;
    
    document.getElementById('carousel').classList.add('accelerated');
    dots.forEach(dot => {
        if (dot.className.includes('current')) {
            previousCurrentPosition = dot.dataset.position - 1;
        }
    });

    let difference = newCurrentPosition - previousCurrentPosition;
    if (difference > 0 && difference < 5) {
        multiplier = difference;
        nextImg();
        runFunctionXTimes(nextImg, 180, multiplier-1);
    } else if (difference <= -5) {
        multiplier = maxIndex + 1 + difference;
        nextImg();
        runFunctionXTimes(nextImg, 180, multiplier-1);
    } else if (difference >= 5) {
        multiplier = maxIndex + 1 - difference;   
        previousImg();
        runFunctionXTimes(previousImg, 180, multiplier-1);
    } else if (difference < 0 && difference > -5) {
        multiplier = Math.abs(difference);   
        previousImg();
        runFunctionXTimes(previousImg, 180, multiplier-1);
    }
}

const runFunctionXTimes = (callback, interval, repeatTimes) => {
    let repeated = 0;
    const intervalTask = setInterval(doTask, interval)

    function doTask() {
        if ( repeated < repeatTimes ) {
            callback()
            repeated += 1
        } else {
            clearInterval(intervalTask);
            document.getElementById('carousel').classList.remove('accelerated');
        }
    }
}

const listen = (e) => {
    if (e.target === previous) { previousImg() }
    else if (e.target === next) { nextImg() }
    else if (e.target.closest('.dot')) { changeImg(e.target) }
}

window.onload = dotsContent();
window.addEventListener('click', listen)