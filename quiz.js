/* created a new file for the javascript needed for the quiz for better structure*/

function checkAnswers() {
  let score = 0;
  let resultText = "";

  /* Q1 */
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "c") {
    score++;
    resultText += "Q1: Correct!<br>";
  } else {
    resultText += "Q1: Incorrect (Answer: Tim Berners-Lee)<br>";
  }

  /* Q2 */
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "c") {
    score++;
    resultText += "Q2: Correct!<br>";
  } else {
    resultText += "Q2: Incorrect (Answer: To display web pages)<br>";
  }

  /* Q3 */
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "b") {
    score++;
    resultText += "Q3: Correct!<br>";
  } else {
    resultText += "Q3: Incorrect (Answer: Finds the IP address)<br>";
  }

  /* Q4 */
  const q4 = document.getElementById("q4").value.trim().toLowerCase();
  if (q4 === "worldwideweb") {
    score++;
    resultText += "Q4: Correct!<br>";
  } else {
    resultText += "Q4: Incorrect (Answer: WorldWideWeb)<br>";
  }

  /* Q5 */
  const correct5 = ["Chrome", "Firefox", "Edge"];
  let selected5 = [];
  document.querySelectorAll('input[name="q5"]:checked').forEach(box => {
    selected5.push(box.value);
  });

  const correct = selected5.every(val => correct5.includes(val)) && selected5.length === correct5.length;
  if (correct) {
    score++;
    resultText += "Q5: Correct!<br>";
  } else {
    resultText += "Q5: Incorrect (Answer: Chrome, Firefox, Edge)<br>";
  }

  /* result */
  resultText += `<br><strong>Total Score: ${score}/5</strong><br>`;
  resultText += score >= 3 ? "Yay! You Pass :)" : "You can always try again";
  document.getElementById("result").innerHTML = resultText;

}
