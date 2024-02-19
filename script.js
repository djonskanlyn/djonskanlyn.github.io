// BMR Calculator

function calculateBMR() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const height = parseInt(document.getElementById('height').value, 10);
    const weight = parseInt(document.getElementById('weight').value, 10);
    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById('result').innerText = `Your BMR is ${bmr.toFixed(2)} kcal/day.`;
}


// Register for newsletter

const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result_nl');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      // Clear previous results
      resultDiv.innerHTML = '';

      // Retrieve form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      // Perform form validation
      if (!name || !email) {
        resultDiv.innerHTML = '<p class="error">All fields are required.</p>';
      } else {
        // Display success message
        resultDiv.innerHTML = '<p>You have been successfully added to our newsletter mailing list!</p>';
      }
    });