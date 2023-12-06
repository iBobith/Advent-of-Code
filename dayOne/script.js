function calculateSum() {
  const inputText = document.getElementById('inputText').value;
  const lines = inputText.split('\n');
  let sum = 0;
  let logContent = '';

  lines.forEach((line) => {
    const numbers = line.replace(/\D/g, '');
    let firstDigit, lastDigit;

    if (numbers) {
      firstDigit = numbers.charAt(0);
      lastDigit = numbers.charAt(numbers.length - 1);

      const trueNumber = firstDigit + (numbers.length > 1 ? lastDigit : '');
      let twoDigitNumber = parseInt(trueNumber, 10);

      if (twoDigitNumber < 10) {
        twoDigitNumber *= 11;
      }

      sum += twoDigitNumber;

      logContent += `Original Line: ${line} => Numbers: ${numbers} => Two-Digit Number: ${twoDigitNumber}\n`;
    }
  });

  document.getElementById('result').innerText = 'Final sum: ' + sum;
  document.getElementById('logContent').innerText = logContent;
}