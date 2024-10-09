/* 
 Step 1: prompt user for their name
 Step 2: prompt user if they'd like to play 3 or 6 holes of mini golf
 Step 3: prompt the user either 3 or 6 times for their putt score per hole
 Step 4: Keep track of their cumulative score
 Step 5: After final score is input, prompt user telling them their total score
      The prompt will vary based on their score
      NOTE: you have to subtract the expected score (9 or 18) from their actual score to get par
      if score is < par (<9 if 3 holes, <18 if 6), the prompt will read:
          "Great job (name)! Your total par was: -(par)"
      if score is > par (>9 if 3 holes, >18 if 6 holes) the prompt will read:
          "Nice try (name)... Your total par was: +(par)"
      if score = par (they scored 9 or 18), then par is 0 and prompt will read:
         "Good game, (name). Your total par was: 0"
console.log as you go so you can in the console if you're getting the results you want!
*/

let name = prompt("Welcome to GC mini golf! What is your name?");
console.log("Name: " + name);
let holes = prompt(`Hi ${name}! Would you like to play 3 or 6 holes today?`);
console.log(`Holes: ${holes}`);


let holeCount = 1;
let total = 0;
for (let i = 0; i < holes; i++) {
    let putts = Number(prompt(`How many putts for hole ${holeCount}? (par is 3)`));
    holeCount++;
    total += putts;
}
console.log(total);

let par = 3 * holes;
let parUser = total - par;
console.log(parUser);

if (parUser > 0) {
    alert(`Nice try ${name}... Your total par was: +${parUser}.`);
} else if (parUser < 0) {
    alert(`Great job ${name}! Your total par was: ${parUser}!`);
} else {
    alert(`Good game, ${name}. Your total par was: 0.`);
}