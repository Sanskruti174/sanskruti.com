console.log("Hellow Guys!....Today's 26th of january which is known as Republic Day of India");
console.log();
console.log("Let's play this Easy pezy Quiz to check your General Knowledge! ")
console.log();
console.log("----All Questions are related to the REPUBLIC NATION INDIA!----");
console.log("");
console.log("***ENTER THE OPTION AS AN ANSWER***(eg. a, b, c, d)");

console.log("");
console.log("Negative marking(-1) for Wrong answer.");
console.log("");
var readlineSync = require('readline-sync');
var userName = readlineSync.question('Enter your good name! ');
console.log("");
console.log('Helloo ' + userName + '!');
console.log("");

console.log("^^Let's start the quiz^^");
console.log("");
var count = 0;

function play(option, question, answer) {

  var UserAnswer = readlineSync.question(question + "" + option);


  if (UserAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("");
    console.log("Yayy! It's a right answer!");
    console.log("");
    count++;
    console.log("Current Score:- " + count);
  } else {
    console.log("");

    console.log("Opps! You're Wrong!");
    count--;
    console.log("");
    console.log("Current Score:- " + count);
  }
}



var questions = [{
  question: "Who is the current Defense Minister of India? ",
  option: " a) Rajnath Singh b) S. Jaishankar c) Smriti Irani d) Nirmala Sitharaman  ",

  answer: "a",
},
{
  question: " Which of the following is the Capital city of India?",
  option: " a) Mumbai b) Chennai c) New Delhi d) Kolkata ",

  answer: "c",
},
{
  question: " Who wrote the national anthem of India? ",
  option: " a) Rabindranath Tagore b) Bankim Chandra Chatterjee c) Sarojini Naidu d) Subramania Bharathi  ",
  answer: "a",
},
{
  question: " The President’s Bodyguard is a unit of which branch of the Indian Armed Forces? ",
  option: " a) Army b) Navy c) Air Force d) Coast Guard  ",
  answer: "a",
},
{
  question: " The President’s Bodyguard, a unit of the Indian Army, is the oldest surviving cavalry unit in the world.",

  option: " True or False?  ",
  answer: "True",
},];

for (i = 0; i < questions.length; i++) {
  var currentQue = questions[i];
  play(currentQue.option, currentQue.question, currentQue.answer);
  console.log("");
}
console.log("");
console.log("You've Completed the quiz and You're score is:- " + count);
console.log("");
if (count > 5) {
  console.log("You're score is the hightest score")
}
console.log("Don't forget to send me the screenshot of you're score.");
console.log("");
console.log("Buii-Buii");
