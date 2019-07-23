const gameArea = document.querySelector(".game");
            const button = document.querySelector("button");
            const message = document.querySelector(".message");
            let score = 0;
            let gamePlay = false;

            button.addEventListener("click", function() {
                if( !gamePlay ) {
                    gamePlay = true;
                    score = 0; 
                    gameArea.innerHTML = "";
                    maker(4);
                    message.innerHTML = "Guess the Combo";
                    button.innerHTML = "<span>Check Combo</span>";
                } else {
                    score++;
                    message.innerHTML = "Guesses: " + score;
                    const numbers = document.querySelectorAll(".numb");
                    let winCondition = 0;
                    for (let i=0; i < numbers.length; i++) {
                        let checkme = document.getElementById('check'+i);
                        if(numbers[i].value == numbers[i].correct) {
                            winCondition++;
                            checkme.className = "correct";
                            checkme.innerHTML = "&#10004;";
                        } else {
                            checkme.className = "incorrect";
                            checkme.innerHTML = (numbers[i].value < numbers[i].correct) ? "&uarr;" : "&darr;";
                        }

                        if(winCondition == numbers.length) {
                            gameOver();
                        }
                    }
                }
            });

            // Game Over 
            function gameOver() {
                message.innerHTML = "You solved the combination in " + score + " guesses!";
                gamePlay = false;
                button.innerHTML = "Restart Game";
            }

            // Create combination and game board
            function maker(num) {
                for (let x = 0; x < num; x++) {
                    let num = document.createElement("input");
                    num.setAttribute("type", "number");
                    num.max = 9;
                    num.min = 0;
                    num.size = 1;
                    num.classList.add("numb");
                    num.order = x;
                    num.correct = Math.floor(Math.random() * 10);
                    num.value = 0;
                    let makediv = document.createElement("div");
                    makediv.classList.add("numblock");
                    let brk = document.createElement("br");
                    let checker = document.createElement("span");
                    checker.id = "check"+x;
                    checker.classList.add("checkit");
                    gameArea.appendChild(makediv);
                    makediv.appendChild(num);              
                    makediv.appendChild(brk);
                    makediv.appendChild(checker);  
                    
                }
            }