/* created a new file for the javascript needed for the quiz for better structure*/

/* function that checks user's answer once submitted */
function checkAnswers() {
  let score = 0;   /* this tracks number of correct answers */
  let resultText = "";  /* this stores feedback to display back to the user */

  /* Q1, radio button(one correct answer) */
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "c") {
    score++;
    resultText += `<span class="correct">Q1: Correct!</span><br>`;
  } else {
    resultText += `<span class="incorrect">Q1: Incorrect (Answer: Tim Berners-Lee)</span><br>`;
  }

  /* Q2, radio button(one correct answer) */
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "c") {
    score++;
    resultText += `<span class="correct">Q2: Correct!</span><br>`;
  } else {
    resultText += `<span class="incorrect">Q2: Incorrect (Answer: To display web pages)</span><br>`;
  }

  /* Q3, radio button(also one correct answer) */
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "b") {
    score++;
    resultText += `<span class="correct">Q3: Correct!</span><br>`;
  } else {
    resultText += `<span class="incorrect">Q3: Incorrect (Answer: Finds the IP address)</span><br>`;
  }

  /* Q4 *, fill in the blank */
  const q4 = document.getElementById("q4").value.trim().toLowerCase();
  if (q4 === "worldwideweb") {
    score++;
    resultText += `<span class="correct">Q4: Correct!</span><br>`;
  } else {
    resultText += `<span class="incorrect">Q4: Incorrect (Answer: WorldWideWeb)</span><br>`;
  }

  /* Q5, multiple check boxes of correct answers */
  const correct5 = ["Chrome", "Firefox", "Edge"];
  let selected5 = [];
  document.querySelectorAll('input[name="q5"]:checked').forEach(box => {
    selected5.push(box.value);
  });

  /* this checks if selected answers match the correct ones */
  const correct = selected5.every(val => correct5.includes(val)) && selected5.length === correct5.length;
  if (correct) {
    score++;
    resultText += `<span class="correct">Q5: Correct!</span><br>`;
  } else {
    resultText += `<span class="incorrect">Q5: Incorrect (Answer: Chrome, Firefox, Edge)</span><br>`;
  }

  /* result (shows total score and message if they fail or pass) */
  resultText += `<br><strong>Total Score: ${score}/5</strong><br>`;
  resultText += score >= 3
    ? `<span class="correct">Yay! You Pass :)</span>`
    : `<span class="incorrect">You can always try again</span>`;
  document.getElementById("result").innerHTML = resultText;
}
