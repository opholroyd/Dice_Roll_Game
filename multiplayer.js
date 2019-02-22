const rollP1 = document.getElementById("btnP1");
const rollP2 = document.getElementById("btnP2");
const holdP1 = document.getElementById("holdbtn1");
const holdP1 = document.getElementById("holdbtn2");

let scoreP1 = 0;
let scoreP2 = 0;
let playerOne = false
let playerTwo = false

rollP1.addEventListener("click", () => {
    playerOne = true
    roll();
})


rollP2.addEventListener("click", () => {
    playerTwo = true
    roll();
})

const roll = () => {
       let num = Math.floor(Math.random()*6);
       if (playerOne = true || playerTwo = true) {
        if (num == 1) {
            gameOver()
            console.log("1")
        } if (num == 2) {
            document.getElementById("demo1").innerHTML = score += num;
            document.getElementById("dice").src="./img/dice2.png";
            console.log("2")
        } if (num == 3) {
            document.getElementById("demo1").innerHTML = score += num;
            document.getElementById("dice").src="./img/dice3.png";
            console.log("3")
        } if (num == 4) {
            document.getElementById("demo1").innerHTML = score += num;
            document.getElementById("dice").src="./img/dice4.png";
            console.log("4")
        } if (num == 5) {
            document.getElementById("demo1").innerHTML = score += num;
            document.getElementById("dice").src="./img/dice5.png";
            console.log("5")
        } if (num == 6) {
            document.getElementById("demo1").innerHTML = score += num;
            document.getElementById("dice").src="./img/dice6.png";
            console.log("6")
        } if (score >= 20) {
            winner();
            start = false;
            score = 0;
        }
    }
};

const reset = () => {
    document.getElementById("demo1").innerHTML = "You rolled a one. You lose.";
    document.getElementById("demo1").style.color = "red";
    document.getElementById("dice").src="./img/dice1.png";
    score = 0;
}

const winner = () => {
    // document.getElementById("demo1").innerHTML = "You Win!";
    // document.getElementById("demo1").style.color = "green";
}
