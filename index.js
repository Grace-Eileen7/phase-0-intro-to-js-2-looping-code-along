// Code your solutions in this file
// Function to write thank you cards
function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));


// Function to count down from a number using a while loop
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example usage:
countDown(10);


