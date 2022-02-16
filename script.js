setInterval(setTime, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
// console.log(hourHand);

function setTime() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    // console.log(`${second} - ${minute} - ${hour}`)
    setRotation(secondHand, secondRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);

}

function setRotation(element, ratio) {
    element.style.setProperty('--rotation', ratio * 360);
    // element.style.setProperty('visibility', 'hidden');
}

// const time = function () {
//     const date = new Date('21 January 2022');
//     const currentDate = new Date;
//     const diff = currentDate - date
//     console.log(date)
//     console.log(currentDate)
//     console.log(diff / 1000)
// }
// time()
setTime();