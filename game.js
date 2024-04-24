function input(question, callback) {
        var stdin = process.stdin,
            stdout = process.stdout,
            stderr = process.stderr;
    
        stdin.resume();
        stdout.write(question);
    
        stdin.once('data', function(data) {
            if (data.toString().trim() === "") {
                stderr.write(isEmpty());
                process.exit();
            } else {
                callback(data.toString().trim());
            }
        });
        
        function isEmpty() {
        return '\x1b[31m' + "Input value is empty." + '\x1b[0m\n';
      }
    }


    
   
    input("What's your name? ", function (name) {
    welcome(name);



 function welcome(name) {
        console.log("Hello,", name);
        console.log("You have", points, "points!");
        mainMenu();
    }
    
});
    
 function startGame(){
    let points = 100;
    let randomInt;
    }

   

    function mainMenu() {
        console.log("Welcome to the GUESS GAME! You have:", points, "points");
        console.log("1. Start the game");
        console.log("2. Shop");
        console.log("3. Quit");

        input("Enter: ", function(choose){
            if (choose == 1) {
                initializeGame();
            } else if (choose == 2) {
                process.exit();
            } else {
                console.log("Invalid input. Please choose a valid option.");
                mainMenu();
            }
        });
    }

    function initializeGame() {
        console.log("Game is started! Good luck!");
        randomInt = Math.floor(Math.random() * 100);
        playGame();
    }

    function playGame() {
        console.log("Guess a number between 0 and 100, or type 'exit' to return to the main menu. You have:", points, "points");

        input("Enter your guess: ", function(answer) {
            if (answer.toLowerCase() === "exit") {
                mainMenu();
                return;
            }

            const guess = parseInt(answer);

            if (isNaN(guess) || guess < 0 || guess > 100) {
                console.log("Please enter a valid number between 0 and 100 or 'exit' to return to main menu.");
                playGame();
                return;
            } else if (points <= 0) {
                console.log("Game over!");
                process.exit();
            }

            evaluateGuess(guess);
        });
    }

    function evaluateGuess(guess) {
        if (guess === randomInt) {
            console.log("Congratulations! You guessed the correct number. You win", points, "points!");
            points += 100;
            mainMenu();
        } else if (guess < randomInt) {
            console.log("Too low! Try again. -5 points");
            points -= 5;
            playGame();
        } else {
            console.log("Too high! Try again. -5 points");
            points -= 5;
            playGame();
        }
    }

      


    
startGame();