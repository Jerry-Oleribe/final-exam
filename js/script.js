// // Object to track votes for each cat
// let votes = {
//     Maxwell: 7,
//     Tenley: 6,
//     Mona: 4
// };

// function submitPoll() {
//     const name = document.getElementById("name").value;
//     const favoriteCat = document.getElementById("favoriteCat").value;

//     if (name && favoriteCat) {
//         // Update the vote count
//         votes[favoriteCat] += 1;

//         // Replace form with colorful and celebratory results
//         const pollForm = document.getElementById("pollForm");
//         pollForm.innerHTML = `
//             <div class="results-container">
//                 <h4 class="celebration">Thank you for voting, ${name}!</h4>
//                 <div class="results">
//                     <div class="result-box" style="background-color: #ff5733;">
//                         Maxwell: ${votes.Maxwell} votes
//                     </div>
//                     <div class="result-box" style="background-color: #33b5e5;">
//                         Tenley: ${votes.Tenley} votes
//                     </div>
//                     <div class="result-box" style="background-color: #ffc107;">
//                         Mona: ${votes.Mona} votes
//                     </div>
//                 </div>
//             </div>
//         `;
//     } else {
//         alert("Please fill in both fields before submitting.");
//     }
// }

// Initialize votes object if not already defined
let votes = {
 Maxwell: 0,
 Tenley: 0,
 Mona: 0,
};

/**
 * Submits the poll for the given form.
 * @param {HTMLFormElement} form - The form element that triggered the submission.
 */
function submitPoll(form) {
 // Fetch input values relative to the form
 const nameInput = form.querySelector("input[type='text']");
 const catSelect = form.querySelector('select');

 const name = nameInput.value.trim();
 const favoriteCat = catSelect.value;

 if (name && favoriteCat) {
  // Update the vote count
  votes[favoriteCat] += 1;

  // Replace form content with results
  form.innerHTML = `
            <div class="results-container">
                <h4 class="celebration">Thank you for voting, ${escapeHTML(
                 name
                )}!</h4>
                <div class="results">
                    <div class="result-box" style="background-color: #ff5733;">
                        Maxwell: ${votes.Maxwell} vote${
   votes.Maxwell !== 1 ? 's' : ''
  }
                    </div>
                    <div class="result-box" style="background-color: #33b5e5;">
                        Tenley: ${votes.Tenley} vote${
   votes.Tenley !== 1 ? 's' : ''
  }
                    </div>
                    <div class="result-box" style="background-color: #ffc107;">
                        Mona: ${votes.Mona} vote${votes.Mona !== 1 ? 's' : ''}
                    </div>
                </div>
            </div>
        `;
 } else {
  alert('Please fill in both fields before submitting.');
 }
}

/**
 * Escapes HTML to prevent XSS attacks.
 * @param {string} str - The string to escape.
 * @returns {string} - The escaped string.
 */
function escapeHTML(str) {
 const div = document.createElement('div');
 div.appendChild(document.createTextNode(str));
 return div.innerHTML;
}
