/* snack 1 */

const num1 = parseInt(prompt('primo numero'));
const num2 = parseInt(prompt('secondo numero'));

if (num1 > num2) {
    document.getElementById('maggiore').innerHTML = `il primo numero è più grande`
} else if (num1 < num2) {
    document.getElementById('maggiore').innerHTML = `il secondo numero è più grande`
} else {
    document.getElementById('maggiore').innerHTML = `sono uguali`
};
 
/* / snack 1 */

/* snack 2 */

let string1 = prompt('prima parola');
let string2 = prompt('seconda parola');

if (string1.length > string2.length) {
    document.getElementById('maggiore').innerHTML = `la prima parola è più lunga`
} else if (string1.length < string2.length) {
    document.getElementById('maggiore').innerHTML = `la seconda parola è più lunga`
} else {
    document.getElementById('maggiore').innerHTML = `sono lunghe uguali`
};

/* / snack2 */

/* snack 3  */

let arrNum = [];
let somma = 0;

for (let i = 0; i < 10; i++) {
    let userNum = parseInt(prompt('numero'));
    arrNum.push(userNum);
};

for (let i=0; i < arrNum.length; i++) {
    somma += arrNum[i];
     
};

document.getElementById('maggiore').innerHTML = somma;

/* / snack 3 */

/* snack 4 */

const invitati = [
    'Pietro Pacciani',
    'Annamaria Franzoni',
    'Amanda Knox',
    'Leonarda Cianciulli',
    'Andrea DiPrè'
];
 
let permessoAccordato = false;

let nomeInvitato = prompt('il tuo nome');

for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] == nomeInvitato) {
        permessoAccordato = true;
    }
};

if (permessoAccordato) {
    document.getElementById('maggiore').innerHTML = 'permesso accordato!'
} else {
    document.getElementById('maggiore').innerHTML = "tu non puoi passare!"
};
 
/* / snack 4 */

/* snack 5 */

let arrNum = [];

for (let i = 0; i < 6; i++) {
    let userNum = parseInt(prompt('numero'));
    
    if (userNum % 2 == 1) {
        arrNum.push(userNum)
    } 
    document.getElementById('maggiore').innerHTML = arrNum;
};

/* / snack 5 */

/* snack 6 */

const arrNum = [];

for (let i = 0; i < 4; i++) {
    let userNum = parseInt(prompt('numero'));
    arrNum.push(userNum);
};


const initialValue = 0;
const sumWithInitial = arrNum.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

document.getElementById('maggiore').innerHTML = sumWithInitial;

/* / snack 6 */





