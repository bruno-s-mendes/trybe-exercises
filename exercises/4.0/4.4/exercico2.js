function verifyPalindrome (word){
  let backWord = word.split('').reverse().join(''); // split separa string em arrays, reverse, faz um array ao contrario, join junta o array em uma string
  // https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/ fonte do raciocinio
  if (word === backWord) {
    return true;
  }
  else {
    return false;
  }
}
console.log (verifyPalindrome('wxyzzyxw'));