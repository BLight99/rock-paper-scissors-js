function comChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result == 0) {
        document.getElementById('c-choice').innerHTML = '<h1><i class="far fa-hand-rock"></h1>';
        return 'rock';
    } else if (result == 1) {
        document.getElementById('c-choice').innerHTML = '<h1><i class="far fa-hand-paper"></h1>';
        return 'paper';
    } else if (result == 2){
        document.getElementById('c-choice').innerHTML = '<h1><i class="far fa-hand-scissors"></h1>';
        return 'scissors';
    }
}

function playerRPS(choice) {
    var computerChoice = comChoice()
    if (choice == 'rock') {
        document.getElementById('p-choice').innerHTML = '<h1><i class="far fa-hand-rock"></h1>';

        if (computerChoice == 'rock') {
            return 'tie';
        } else if (computerChoice == 'paper') {
            return 'loss';
        } else if (computerChoice == 'scissors'){
            return 'win';
        }
    } else if (choice == 'paper') {
        document.getElementById('p-choice').innerHTML = '<h1><i class="far fa-hand-paper"></h1>';
        
        if (computerChoice == 'rock') {
            return 'win';
        } else if (computerChoice == 'paper') {
            return 'tie';
        } else if (computerChoice == 'scissors'){
            return 'loss';
        }
    } else if (choice == 'scissors') {
        document.getElementById('p-choice').innerHTML = '<h1><i class="far fa-hand-scissors"></h1>';

        if (computerChoice == 'rock') {
            return 'loss';
        } else if (computerChoice == 'paper') {
            return 'win';
        } else if (computerChoice == 'scissors'){
            return 'tie';
        }
    }
}

function play(choice) {
    var game = playerRPS(choice);

    if (game == 'win') {
        return document.getElementById('results').innerHTML = 'You win!';
    } else if (game == 'loss') {
        return document.getElementById('results').innerHTML = 'You lose!';
    } else if (game == 'tie') {
        return document.getElementById('results').innerHTML = "It's a tie!";
    }
}