//EXERCICO 1

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
};

let medals = {
    golden: 2, 
    silver: 3,
};

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player ['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

console.log ('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + medals.golden + ' medalhas de ouro e ' + medals.silver + ' medalhas de prata.');

// exercico 3

function sum(a,b){
  return a+b;
}

console.log (sum (3,18));