testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ` ${ifScope} 'ótimo, fui utilizada no escopo !'`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(` ${ifScope} 'o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// ex2
    
const oddsAndEvens = (array) => array.sort();

console.log(oddsAndEvens ([13, 3, 4, 10, 7, 2]));
