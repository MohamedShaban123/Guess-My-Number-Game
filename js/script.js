const Max_Range_Number = 20;
const Min_Range_Number = 1;
let score = 20;
let highscore=0;
let my_input_number_value;
let input_number = window.document.getElementById("input-number");
let displayNumber = window.document.getElementById("num");
let btn_check = window.document.getElementById("btn-check");
let message = window.document.getElementById("message");
let body = window.document.getElementById("my-body");
let score_value = window.document.getElementById("score-value");
let highscore_value = window.document.getElementById("highscore-value");
let Random_Number = Math.floor(
  Math.random() * (Max_Range_Number - Min_Range_Number + 1) + Min_Range_Number
);

// Check Button
btn_check.addEventListener("click", (ev) => {
  my_input_number_value = Number(input_number.value);

  if (
    my_input_number_value > Max_Range_Number ||
    my_input_number_value < Min_Range_Number
  ) {
    displayNumber.textContent = "?";
    message.textContent = "🥺Sorry Out Of Range";
  } else {
    displayNumber.textContent = my_input_number_value;
    if (my_input_number_value === Random_Number) {
      message.textContent = "🎉 Correct";
      body.style.backgroundColor = "#60B347";
      if (score > highscore) {
        highscore = score;
      }
      highscore_value.textContent = highscore;
      btn_check.disabled = true; // disable btn after user guess correct number
    } else if (my_input_number_value > Random_Number) {
      score -= 1;
      score_value.textContent = score;
      message.textContent = "⬆️ Too High!";
    } else if (my_input_number_value < Random_Number) {
      score -= 1;
      score_value.textContent = score;
      message.textContent = "⬇️ Too Low!";
    }
  }
});

// Reset Game
let reset_button = window.document.getElementById("btn-again");
reset_button.addEventListener("click", ResetGame);

function ResetGame() {
  btn_check.disabled = false; // disable btn after user guess correct number
  score = 20;
  score_value.textContent = score;
  message.textContent = "Start Guessing...";
  input_number.value = "";
  displayNumber.textContent = "?";
  body.style.backgroundColor = "#1F1F1F";
}
