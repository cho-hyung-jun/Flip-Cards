
const createGame = (numCards = 4) => {
    const winIndex = Math.floor(Math.random() * numCards);
    let numTries = 0;
    let hasWon = false;
    for (let i = 0; i < numCards; i++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add(i === winIndex ? "win" : "lose");
        // card.textContent = i === winIndex ? "O" : "X";

        // ===================================
        // ========== NEW FLIP CARD ==========
        // ===================================
        card.innerHTML = `
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="./bicycle.png" alt="Playing card" style="width:200px;height:300px;">
                        </div>
                        <div class="flip-card-back">
                            <h1>${i === winIndex ? "O" : "X"}</h1>
                        </div>
                    </div>
                `;

        card.addEventListener("click", function (e) {
            if (e.currentTarget.classList.contains("flipped") || hasWon) {
                return;
            }
            e.currentTarget.classList.add("flipped");
            console.log(e.currentTarget);
            numTries++;
            const triesString = numTries === 1 ? "try" : "tries";
            if (e.currentTarget.classList.contains("win")) {
                hasWon = true;
                message.textContent = `You win! It took ${numTries} ${triesString}.`;
            } else {
                message.textContent = `You've used ${numTries} ${triesString}.`;
            }
        });

        cardContainer.appendChild(card);
    }
};


const playButton = document.querySelector('input[type=submit]');
const input = document.querySelector('input[type=number]');

function restartGame() {
    const numCards = parseInt(input.value);
    cardContainer.innerHTML = "";
    createGame(numCards); // calling the function to create cards
}

playButton.addEventListener('click', restartGame);

input.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        restartGame();
    }
});

createGame();