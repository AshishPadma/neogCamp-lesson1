var readlineSync = require('readline-sync');
console.log('Welcome to the quiz !!');
var username = readlineSync.question('Please give your name: ');
console.log('Welcome', username, 'let us start the quiz !!');
console.log('Rules: Word answer should be word & number answer should be number');

var highScores =[{
  name: "minni,",
  topScore:"7",
 },
 {
   name:"anitha,",
   topScore:"4"
 }
];


var score = 0;

function quiz(question, answer){
var userEntered = readlineSync.question(question);

   if(userEntered.toLowerCase() === answer.toLowerCase()){
     console.log('You were right!');
     score = score + 2;
  }else{
  console.log('You were wrong');
  score = score - 1;
  } 

  console.log('Your score is: ', score);
  console.log('------------');

}

var questions = [
  {question:'1. How many schools has Ashish gone to? ', answer:'2'},{question:'2. How old is Ashish? ', answer:'24'},{question:'3. What is Ashish favorite ice cream flavor? ', answer:'Blackcurrant'},{question:'4. How many siblings does Ashish have? ', answer:'1'},{question:'5. Who is Ashish favorite, Mom or Dad? ', answer:'Both'}
];

for(var i =0; i<questions.length; i++){
  quiz(questions[i].question, questions[i].answer);
}

console.log('Your final score is: ', score);

console.log('revealAnswers : 1. 2, 2. 24, 3.Blackcurrant, 4. 1, 5.Both');

for( var i = 0; i < highScores.length; i++){

console.log('top scorer name: ', highScores[i].name, 'points: ', highScores[i].topScore);

}
