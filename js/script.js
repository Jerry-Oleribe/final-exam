
// Object to track votes for each cat
let votes = {
    Maxwell: 7,
    Tenley: 6,
    Mona: 4
};

function submitPoll() {
    const name = document.getElementById("name").value;
    const favoriteCat = document.getElementById("favoriteCat").value;

    if (name && favoriteCat) {
        // Update the vote count
        votes[favoriteCat] += 1;

        // Replace form with colorful and celebratory results
        const pollForm = document.getElementById("pollForm");
        pollForm.innerHTML = `
            <div class="results-container">
                <h4 class="celebration">Thank you for voting, ${name}!</h4>
                <div class="results">
                    <div class="result-box" style="background-color: #ff5733;">
                        Maxwell: ${votes.Maxwell} votes
                    </div>
                    <div class="result-box" style="background-color: #33b5e5;">
                        Tenley: ${votes.Tenley} votes
                    </div>
                    <div class="result-box" style="background-color: #ffc107;">
                        Mona: ${votes.Mona} votes
                    </div>
                </div>
            </div>
        `;
    } else {
        alert("Please fill in both fields before submitting.");
    }
}
