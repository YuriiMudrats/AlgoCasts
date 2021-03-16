// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const str = n.toString().split('').reverse().join('')

    return parseInt(str) * Math.sign(n)
}

module.exports = reverseInt;


//
// function reverseInt(n) {
//     const numberString =  String(n).split('');
//     let number = null;
//     if(numberString[0]==='-'){
//       numberString.shift()  
//       number = '-'+ numberString.reverse().join('')
//     } else {
//       number = numberString.reverse().join('')
//     }

//     return Number(number)
// }