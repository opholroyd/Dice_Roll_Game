const rollButton = document.getElementById("btn");

let score = 0;
let start = true

rollButton.addEventListener("click", () => {
    document.getElementById("demo1").style.color = "black";
    roll();
})

const roll = () => {
       let num = Math.floor(Math.random()*6);
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
};

const gameOver = () => {
    document.getElementById("demo1").innerHTML = "You rolled a one. You lose.";
    document.getElementById("demo1").style.color = "red";
    document.getElementById("dice").src="./img/dice1.png";
    score = 0;
}

const winner = () => {3
    document.getElementById("demo1").innerHTML = "You Win!";
    document.getElementById("demo1").style.color = "green";
}




