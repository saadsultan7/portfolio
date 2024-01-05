    let active_player = 0;
                let gamestate = [2, 2, 2, 2, 2, 2, 2, 2, 2];
                let win_positions = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];
                let xwins = 1;
                let owins = 1;
                let gameactive = true;
                let xscore;
                let oscore;
                let player;
        
                function player_tap(view) {
                let Reset = document.querySelector("button");
                player = new Audio("balsound.mp3");
                player.play();
                xscore = document.getElementById("xscore");
                oscore = document.getElementById("oscore");
                let textView2 = document.getElementById("textView2");
                let img = view;
                Reset.addEventListener("click", function (view) {
                    textView2.textContent = "X - Turn";
                    restart(view);
                });
                let tapped_image = parseInt(img.getAttribute("tag"));
                if (!gameactive) {
                    restart(view);
                }
                if (gamestate[tapped_image] === 2) {
                    gamestate[tapped_image] = active_player;
                    if (active_player === 0) {
                        img.style.backgroundImage = "url('x.png')";
                        active_player = 1;
                        textView2.textContent = "O - Turn";
                    } else {
                        img.style.backgroundImage = "url('o.png')";
                        active_player = 0;
                        textView2.textContent = "X - Turn";
                    }
                    for (let i = 0; i < win_positions.length; i++) {
                        let win_position = win_positions[i];
                        if (
                            gamestate[win_position[0]] === gamestate[win_position[1]] &&
                            gamestate[win_position[1]] === gamestate[win_position[2]] &&
                            gamestate[win_position[0]] !== 2
                        ) {
                            gameactive = false;
                            if (gamestate[win_position[0]] === 0) {
                                textView2.textContent = "X is the Winner";
                                xscore.textContent = "X-Wins:" + xwins;
                                xwins++;
                            } else {
                                textView2.textContent = "O is the Winner";
                                oscore.textContent = "O-Wins:" + owins;
                                owins++;
                            }
                        }
                    }
                }
                let emptySquare = false;
                for (let i = 0; i < gamestate.length; i++) {
                    if (gamestate[i] === 2) {
                        emptySquare = true;
                        break;
                    }
                }
                if (!emptySquare && gameactive) {
                    gameactive = false;
                    textView2.textContent = "It's a draw";
                }
            }
        
                function restart() {
                    gameactive = true;
                    active_player = 0;
                    let cells = document.querySelectorAll(".cell");
                    for (let i = 0; i < cells.length; i++) {
                        cells[i].style.backgroundImage = "";
                    }
                    gamestate.fill(2);
                }