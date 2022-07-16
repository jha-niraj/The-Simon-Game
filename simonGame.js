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

















// $("#button").click(
// switch(buttonColors) {
//     case "green": 
//             playSound(sounds/green.mp3);
//             break;
    
//     case "red":
//             playSound(sounds/red.mp3);
//             break;

//     case "yellow":
//             playSound(sounds/yellow.mp3);
//             break;

//     case "blue":
//             playSound(sounds/blue.mp3);
//             break;

//     default:
//         alert("You have to press a button!")
// });



// console.log(nextSequence());


// $("h1").click(function() {
//     alert("It is Working!");
// });

// let name = "Niraj Kumar Jha";
// let msg = `Welcome ${name}.`;

// alert(msg);

// for(let ch of "Sololearn") {
//     console.log(ch);
// }

// for(let ch in "Sololearn") {
//     console.log(ch);
// }

// function add(x, y) {
//     let result = x + y;
//     console.log(result);
// }

// const addAgain = (x, y) => {
//     let result = x + y;
//     console.log(result);
// }

// addAgain(5, 6);
// add(5, 6);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(el) {
//     console.log(el * 2);
// });

// const array = [1, 2, 3, 4, 5];

// arr.forEach(v => {
//     console.log(v * 2);
// })
