console.log("Hellow Guys!....Welcome to My Quiz ");
console.log();
console.log("Get Ready to play this fun game...Made by the one and only (Sanskruti Tayade) heheheh...")
console.log();
console.log("----Let's see HOW MUCH YOU KNOW ME!----");
console.log("");
console.log("***The userinput answer must be in CAPS LOCK***");
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

function play(question, answer) {
  var UserAnswer = readlineSync.question(question);

  if (UserAnswer === answer) {
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
  question: "What is my Father's name..?",
  answer: "ANIL",
},
{
  question: "What is my favourite colour..? (Hint:- Everyone's fav colour)",
  answer: "BLACK",
},
{
  question: "What is my hobby..?(Hint:- Something which is everywhere in my ....?) ",
  answer: "PAINTING",
},
{
  question: "What is my birth year..? (You must know this) ",
  answer: "2003",
},
{
  question: "Who is my favorite bollywood actress?",
  answer: "ALIA BHATT",
},];

for (i = 0; i < questions.length; i++) {
  var currentQue = questions[i];
  play(currentQue.question, currentQue.answer);
  console.log("");
}
console.log("");
console.log("You've Completed the quiz and You're score is:- " + count);
console.log("");
console.log("Don't forget to send me the screenshot of you're score.");
 console.log("");
 console.log("Buii-Buii");
