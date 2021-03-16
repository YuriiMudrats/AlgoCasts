// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {   

    let s1 = stringA.split('').reduce((acc, c)=>{
        c = c.toLowerCase();
        if(acc[c]){
            ++acc[c];
        } else {
            acc[c] = 1;
        }
        return acc
    },{})
    let s2 = stringB.split('').reduce((acc, c)=>{
        c = c.toLowerCase();
        if(acc[c]){
            ++acc[c];
        } else {            
            acc[c] = 1;
        }
        return acc
    },{})

   s1 = Object.entries(s1).map(m=>m[0]+m[1]);
   s2 = Object.entries(s2).map(m=>m[0]+m[1]);
    console.log(s1,s2)
   return s1.every((s)=>{
       return s2.includes(s) 
   })

}

module.exports = anagrams;
