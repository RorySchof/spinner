process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);


const newArray = ["|", "/", "-", "\\", "|", "/", "-" ]

let i = 0

for (let newArray = 0; i < newArray.length; newArray + 200  ){

  console.log(newArray)
}


// create a new array 
// put the spinning icons in array 
// iterate with a for loop
//each iteration increase time 