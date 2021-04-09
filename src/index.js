const images = Array.from(document.getElementsByClassName('image'));
const dots = Array.from(document.getElementsByClassName('dot'));
const maxIndex = images.length-1;

let i = 0;
let nextIndex = 1;
let previousIndex = maxIndex;
let doResizeTimeout;

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
    if (e.target.closest('#prev')) { previousImg() }
    else if (e.target.closest('#next')) { nextImg() }
    else if (e.target.closest('.dot')) { changeImg(e.target) }
}

const adaptSize = () => {
    const backgroundSize = document.getElementsByClassName('image-background')[0].scrollWidth;
    const widthRule = `.image img {width: ${backgroundSize}px}`;
    const previousLeftRule = `.image.previous-view {left: -${backgroundSize}px !important}`;
    const nextLeftRule = `.image.next-view {left: ${backgroundSize}px !important}`;
    if (document.styleSheets[0].cssRules[0].selectorText !== 'h1') {
        document.styleSheets[0].deleteRule(0);
        document.styleSheets[0].deleteRule(0);
        document.styleSheets[0].deleteRule(0);
    }
    document.styleSheets[0].insertRule(widthRule, 0);
    document.styleSheets[0].insertRule(previousLeftRule, 1);
    document.styleSheets[0].insertRule(nextLeftRule, 2);
}


window.addEventListener('click', listen)
window.onload = () => { 
    if (document.documentElement.clientWidth < 840) {
        adaptSize()
    }
}
window.onresize = () => {
    clearTimeout(doResizeTimeout);
    doResizeTimeout = setTimeout(adaptSize, 100);
}