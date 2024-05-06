const time = document.querySelector('.count__container span');
const start = document.querySelector('.button-start');
const stop = document.querySelector('.button-stop');
const reset = document.querySelector('.button-reset');

const zeroAdd = (x) => {
    if ( x < 10 ) {
        return x = '0' + x;
    }else return x;
}

let minute = 0;
let second = 0;
let msecond = 0;

function setTime() {
    time.innerHTML = (`${zeroAdd(minute)}:${zeroAdd(second)}:${zeroAdd(msecond)}`);
};

function startTimer() {
    msecond++;
    if(msecond == 100){
        msecond = 0;
        second++;
    }

    if(minute == 60){
        second = 0;
        minute++;
    }

    setTime();
}

start.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
    start.setAttribute('disabled', '');
});

stop.addEventListener('click', () => {
    clearInterval(interval);
    start.removeAttribute('disabled', '');
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    msecond = 0;
    second = 0;
    minute = 0;

    setTime();
    start.removeAttribute('disabled');
});

