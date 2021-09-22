const start = document.getElementById('start');
const serial = document.getElementById('randomNo');
const bombHousing = document.getElementById('bomb-housing');
const initBomb = document.getElementById('initBomb');
const introText = document.getElementById('introText');
const kaboom = document.getElementById('kaboom');
const thumbsup = document.getElementById('thumbsup');
const defuse = document.getElementById('defuse');
const timeTaken = document.getElementById('timeTaken');
const highScore = document.getElementById('high-score');
const statsBox = document.getElementById('stats');
const instructions = document.getElementById('instructions');
const leftColumn = document.getElementById('left-column');
const rightColumn = document.getElementById('right-column');
const LHS1 = document.getElementById('1LHS');
const wire1 = document.getElementById('1wire');
const RHS1 = document.getElementById('1RHS');
const LHS2 = document.getElementById('2LHS');
const wire2 = document.getElementById('2wire');
const RHS2 = document.getElementById('2RHS');
const LHS3 = document.getElementById('3LHS');
const wire3 = document.getElementById('3wire');
const RHS3 = document.getElementById('3RHS');
const LHS4 = document.getElementById('4LHS');
const wire4 = document.getElementById('4wire');
const RHS4 = document.getElementById('4RHS');
const LHS5 = document.getElementById('5LHS');
const wire5 = document.getElementById('5wire');
const RHS5 = document.getElementById('5RHS');
const LHS6 = document.getElementById('6LHS');
const wire6 = document.getElementById('6wire');
const RHS6 = document.getElementById('6RHS');

let answer = [];
let beginTime = 0;
let finishTime = 0;
let score = 1000;
let successes = 0;
let failures = 0;

wireColors = ['red', 'blue', 'yellow', 'white'];
lightColors = ['yellow', 'black'];
housingColors = ['grey', 'turquoise'];

start.onclick = function() {
    beginTime = performance.now();
    introText.style.display = 'none';
    initBomb.style.display = 'none';
    leftColumn.style.display = 'block';
    rightColumn.style.display = 'block';
    start.innerHTML = 'Start new puzzle!';
    kaboom.style.display = 'none';
    thumbsup.style.display = 'none';
    bombHousing.style.display = 'grid';
    serial.innerHTML = Math.floor(Math.random()*1000000);
    bombHousing.style.visibility = 'visible';
    defuse.style.visibility = 'visible';
    instructions.style.visibility = 'visible';
    instructions.style.display = 'block';
    defuse.innerHTML = '<button>Defuse</button>';
    timeTaken.style.display = 'none';
    statsBox.style.visibility = 'visible';
    statsBox.innerHTML = 'Successes: ' + successes + ', Failures: ' + failures;
    answer = [];
    bombHousing.style.backgroundColor = housingColors[Math.floor(Math.random()*2)];
    LHS1.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire1.style.visibility = 'visible';
    wire1.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS1.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    LHS2.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire2.style.visibility = 'visible';
    wire2.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS2.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    LHS3.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire3.style.visibility = 'visible';
    wire3.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS3.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    LHS4.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire4.style.visibility = 'visible';
    wire4.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS4.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    LHS5.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire5.style.visibility = 'visible';
    wire5.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS5.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    LHS6.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
    wire6.style.visibility = 'visible';
    wire6.style.backgroundColor = wireColors[Math.floor(Math.random()*4)];
    RHS6.style.backgroundColor = lightColors[Math.floor(Math.random()*2)];
}

const wires = [wire1, wire2, wire3, wire4, wire5, wire6];

const cut = function(event) {
    event.target.style.visibility = 'hidden';
}

const cutWire = function(wire) {
    wire.onclick = cut;
}

wires.forEach(cutWire)



const checkDefuse = function(round, wire, square){
if /* 1 no no yes no - - */ ((round.style.backgroundColor !== 'yellow' && wire.style.backgroundColor !== 'red' && square.style.backgroundColor === 'yellow' && bombHousing.style.backgroundColor !== 'grey') 
|| /* 2 - yes yes no - - */ (wire.style.backgroundColor === 'red' && square.style.backgroundColor === 'yellow' && bombHousing.style.backgroundColor !== 'grey') 
|| /* 3 yes no yes yes - - */ (round.style.backgroundColor === 'yellow' && wire.style.backgroundColor !== 'red' && square.style.backgroundColor === 'yellow' && bombHousing.style.backgroundColor === 'grey') 
|| /* 4 yes yes no yes - - */ (round.style.backgroundColor === 'yellow' && wire.style.backgroundColor === 'red' && square.style.backgroundColor !== 'yellow' && bombHousing.style.backgroundColor === 'grey')
|| /* 5 no no yes yes - yes */ (round.style.backgroundColor !== 'yellow' && wire.style.backgroundColor !== 'red' && square.style.backgroundColor === 'yellow' && bombHousing.style.backgroundColor === 'grey' && serial.innerHTML%3 === 0) 
|| /* 6 - yes yes yes - yes */ (wire.style.backgroundColor === 'red' && square.style.backgroundColor === 'yellow' && bombHousing.style.backgroundColor === 'grey' && serial.innerHTML%3 === 0) 
|| /* 7 - no no no yes - */ (wire.style.backgroundColor !== 'red' && square.style.backgroundColor !== 'yellow' && bombHousing.style.backgroundColor !== 'grey' && wire.style.backgroundColor === 'white') 
|| /* 8 no no no yes yes - */ (round.style.backgroundColor !== 'yellow' && wire.style.backgroundColor !== 'red' && square.style.backgroundColor !== 'yellow' && bombHousing.style.backgroundColor === 'grey' && wire.style.backgroundColor === 'white') 
){
    answer.push('hidden');
} else {
    answer.push('visible');
}
} 



defuse.onclick = function(){
    checkDefuse(LHS1, wire1, RHS1);
    checkDefuse(LHS2, wire2, RHS2);
    checkDefuse(LHS3, wire3, RHS3);
    checkDefuse(LHS4, wire4, RHS4);
    checkDefuse(LHS5, wire5, RHS5);
    checkDefuse(LHS6, wire6, RHS6);
    if (wire1.style.visibility === answer[0] && wire2.style.visibility === answer[1] && wire3.style.visibility === answer[2] && wire4.style.visibility === answer[3] && wire5.style.visibility === answer[4] && wire6.style.visibility === answer[5])
    {
    defuse.style.visibility = 'hidden';
    finishTime = performance.now();
    let timeDiff = finishTime - beginTime;
    timeDiff /= 1000;
    let time = timeDiff.toFixed(2);
    if (time < 10) {
        seconds = '00' + time;
    } else if (time < 100) {
        seconds = '0' + time
    } else {
        seconds = time;
    }
    timeTaken.innerHTML = 'Time taken: ' + time + ' seconds';
    timeTaken.style.display = 'block';
    timeTaken.style.visibility = 'visible';
    highScore.style.visibility = 'visible';
    thumbsup.style.display = 'block';
    bombHousing.style.display = 'none';
    instructions.style.display = 'none';
    successes += 1;
    if (score < 10) {
        numScore = '00' + score;
    } else if (score < 100) {
        numScore = '0' + score
    } else {
        numScore = score;
    }
    if (seconds < numScore) {
        score = time;
        highScore.innerHTML = 'High score this session: ' + score + ' seconds'
        }
    statsBox.innerHTML = 'Successes: ' + successes + ', Failures: ' + failures
    } else {
    defuse.style.visibility = 'hidden';
    kaboom.style.display = 'block';
    bombHousing.style.display = 'none';
    instructions.style.display = 'none';
    start.innerHTML = 'Oops! Better luck next time! <br> Start new puzzle';
    failures += 1;
    statsBox.innerHTML = 'Successes: ' + successes + ', Failures: ' + failures
    } 
}

