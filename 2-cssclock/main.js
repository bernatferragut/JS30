
// Selection
let secondsHand = document.querySelector('.hand');

// Moving clock Hands => seconds
function moveHand() {
    const now = new Date();
    let seconds = now.getSeconds();
    let degrees = (seconds/60) * 360;
    secondsHand.style.transform =`rotate(${degrees}deg) `;
}
// calling moveHand every second
setInterval(moveHand, 1000);
