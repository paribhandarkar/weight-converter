function weightConvert() {
  const inputEl = document.querySelector(".weight-input").value;
  let errorTime;
  let resultTime;

  if (inputEl <= 0 || isNaN(inputEl)) {
    errorText = "Please enter a valid input";
    const errorEl = document.querySelector(".error-line");

    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputEl = "";
    }, 2000);

    errorEl.innerText = errorText;
  } else {
    let weightKG = 0;
    weightKG = inputEl / 2.205;

    const finalAnswerEl = document.querySelector(".final-answer");
    finalAnswerEl.innerText = weightKG.toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      finalAnswerEl.innerText = "";
      inputEl = "";
    }, 10000);

    // the conversion result is only removed from the screen after ten seconds if the user does not enter a new input value during that time. If the user enters a new input value, the conversion result will remain on the screen until the next conversion is performed.
  }
}
