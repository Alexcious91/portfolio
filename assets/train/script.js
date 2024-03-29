let trainSpeed = 250;
let trainPosition = 0;
let animation;


let train = document.getElementById("train");
train.addEventListener("click", speedUp);

let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    trainSpeed -= 20; // Increase speed everytime the train is pressed

    // show current speed
    console.log(`Train speed: ${trainSpeed}`);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    // increment speed with push on the left
    function frame() {
        trainPosition += 2;
        train.style.left = `${trainPosition}px`;
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

// show current position
function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("Woah mate you crashed!");
        clearInterval(animation);
    }
}

// function to sotp train
function stopTrain() {
    if (trainPosition < 260) {
        alert("Whew! That was close!");
        clearInterval(animation);
    }
}