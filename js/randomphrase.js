// grabbing th elements in the DOM
text01 = document.querySelector('.phrase-holder:nth-child(1)');
text01.style.width = "100px";

text02 = document.querySelector('.phrase-holder:nth-child(2)');
text02.style.width = "175px";

text03 = document.querySelector('.phrase-holder:nth-child(3)');
text03.style.width = "230px";

// storing the words to use in the phrase
let verb = ['dabble', 'dominate', 'trifle', 'inspire', 'bask'];
let noun = ['graphic design', 'animation', 'movies', 'food', 'The Flash', 'anything Marvel'];
let noun2 = ['easy easing', 'tech', 'YouTube', 'character manipulation'];

let indexTextOne;
let countTextOne = 25;
let intervalTextOne = 175;

let indexTextTwo;
let countTextTwo = 25;
let intervalTextTwo = 175;

let indexTextThree;
let countTextThree = 25;
let intervalTextThree = 175;

let repeatedTextOne = -1;
let repeatedTextTwo = -1;
let repeatedTextThree = -1;

// random number generator function
function randInt(max) {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function firstText() {
  countTextOne -= 1;
  
  do {
    // assign another value to index
    indexTextOne = randInt(verb.length-1); 
  }
  // while the repated number is the same as the index
  while (indexTextOne == repeatedTextOne);
  
  if(countTextOne > 10) {
    
    text01.textContent = verb[indexTextOne];
    setTimeout(firstText, intervalTextOne);
    
  } else if( countTextOne >= 1 && countTextOne <= 10) {
    
    text01.textContent = verb[indexTextOne];
    intervalTextOne += 100;
    setTimeout(firstText, intervalTextOne);
  } 
  
  repeatedTextOne = indexTextOne;
}

function secondText() {
  countTextTwo -= 1;
  
  do {
    // assign another value to index
    indexTextTwo = randInt(noun.length-1); 
  }
  // while the repated number is the same as the indexTextTwo
  while (indexTextTwo == repeatedTextTwo);
  
  if(countTextTwo > 10) {
    
    text02.textContent = noun[indexTextTwo];
    setTimeout(secondText, intervalTextTwo);
    
  } else if( countTextTwo >= 1 && countTextTwo < 11) {
    
    text02.textContent = noun[indexTextTwo];
    intervalTextTwo += 100;
    setTimeout(secondText, intervalTextTwo);
  } 
  
  repeatedTextTwo = indexTextTwo;
}

function thirdText() {
  countTextThree -= 1;
  
  do {
    // assign another value to index
    indexTextThree = randInt(noun2.length-1); 
  }
  // while the repated number is the same as the indexTextThree
  while (indexTextThree == repeatedTextThree);
  
  if(countTextThree > 10) {
    
    text03.textContent = noun2[indexTextThree];
    setTimeout(thirdText, intervalTextThree);
    
  } else if( countTextThree >= 1 && countTextThree < 11) {
    
    text03.textContent = noun2[indexTextThree];
    intervalTextThree += 100;
    setTimeout(thirdText, intervalTextThree);
  } 
  
  repeatedTextThree = indexTextThree;
}

firstText();
secondText();
thirdText();