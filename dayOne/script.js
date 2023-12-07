const fs = require("fs");
const path = require("path");

function wordToNumber(word) {
  return {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0,
  }[word] ?? Number(word);
}

function calculateSum() {

  // Get the input text from the text box
  // const inputText = document.getElementById('inputText').value;
  const inputText = fs.readFileSync(
    path.join(__dirname, "input")
  ).toString();


  // Split the input text into an array of lines
  const lines = inputText.split('\n');

  // Initialize a variable to store the sum
  let sum = 0;

  // Read through each line
  lines.forEach((line) => {
    const validStrings = [
      "one", "1",
      "two", "2",
      "three", "3",
      "four", "4",
      "five", "5",
      "six", "6",
      "seven", "7",
      "eight", "8",
      "nine", "9",
      "zero", "0",
    ];

    let firstIndex = Infinity;
    let firstValue = null;
    let lastIndex = -Infinity
    let lastValue = null;

    for (const digit of validStrings) {
      const fresult = line.indexOf(digit);
      const lresult = line.lastIndexOf(digit);
      if (fresult < firstIndex) {
        if (fresult === -1) continue;
        firstIndex = fresult;
        firstValue = digit;
      }
      if (lresult > lastIndex) {
        if (lresult === -1) continue;
        lastIndex = lresult;
        lastValue = digit;
      }
    }

    console.debug("Line: " + line);
    if (firstIndex === lastIndex) {
      // console.debug("SAME INDEEEEXXXX")
    }


    if (firstValue === null && lastValue === null) {
      console.debug(" => no digits");
      return;
    }
    
    
    firstValue = wordToNumber(firstValue);
    lastValue = wordToNumber(lastValue);
    
    console.debug(` => First and last: ${firstValue} and ${lastValue}`);
    
    const numberItself = firstValue*10 + lastValue;

    console.debug(`Twodigitgfsdf: ${numberItself}`);

    sum += numberItself;
  });

  console.log("Final sum: " + sum);

  // // Display the result
  // document.getElementById('result').innerText = 'Final sum: ' + sum;
  
  // // Update the log on the webpage
  // document.getElementById('logContent').innerText = logContent;
}

calculateSum();