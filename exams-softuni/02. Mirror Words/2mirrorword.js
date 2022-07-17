 //  (#|@)(?<word1>[A-Za-z]{3,})(#|@)(#|@)(?<word2>[A-Za-z]{3,})(#|@)

 function solve(input) {
   let regEx = /(#|@)(?<word1>[a-zA-Z]{3,})\1{2}(?<word2>[a-zA-Z]{3,})\1/g
let validMatch 
let arrWord1 = []
let arrreversedWord2= []
while((validMatch = regEx.exec(input)) != null) {

   let word1 = validMatch.groups.word1
   let word2 = validMatch.groups.word2
  
 let reversedWord2 = word2.split('').reverse().join('') 
arrWord1.push(word1)
arrreversedWord2.push(reversedWord2)
}
if (arrWord1.length <= 0) {
   console.log("No word pairs found!")
} else {
let test = arrWord1.filter(x => arrreversedWord2.includes(x))
console.log(`${arrWord1.length} word pairs found!`)

}

let output = []
for(el1 of arrWord1) {
   for (el2 of arrreversedWord2) {
      if (el1 == el2) {
         print = `${el1} <=> ${el2.split('').reverse().join('') }`;
            output.push(print);
      }
   }
   
}

if (output.length > 0) {
   console.log('The mirror words are:')
   console.log(output.join(', '))
} else {console.log("No mirror words!")}
 }
 solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])