const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0 ){
    reader.close();
    return completionCallback(sum);
  }
  reader.question('What number?', (res) => {
    sum += parseInt(res);
    console.log(sum);
    numsLeft--;
    addNumbers(sum, numsLeft, completionCallback);
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
