                    // An array to choose the colors that is in the Game 
let buttonColors = ["green", "red", "blue", "yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

$(document).keypress(function() {
    if(!started) {
        $("#index-title").text("Level " + level);
    nextSequence();
    started = true;
    }
});

$(".btn").click(function() {
    let userChoosenColor = $(this).attr("id");
    userClickedPattern.push(userChoosenColor);

    playSound(userChoosenColor);
    animatePress(userChoosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("gameover");
        $("#index-title").text("Game Over! Press any key to Restart.");

        setTimeout (function () {
            $("body").removeClass("gameover");
        }, 200);

        startOver();
    }
}

                    // Function which generate the random number between 0 and 3 for button Colors
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#index-title").text("Level " + level);
    
    let randomNumber = Math.floor((Math.random() * 4));
                    // An variable which choose the color according to the random generated number
    let randomChoosenColor = buttonColors[randomNumber];

                    // Adding the randomChoosenColor to the gamePattern to the last
    gamePattern.push(randomChoosenColor);

    $("#" + randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChoosenColor);
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout (function() {
        $("#" + currentColor).removeClass("pressed"); 
    }, 300);
}

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
};

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
