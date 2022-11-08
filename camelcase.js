/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

//Solution 1
function toCamelCase(str){
  let newStr = str.replace(/[^a-zA-Z ]/g, "_").split('_')
  if(newStr == '') return ''
  
  newStr = newStr.map(function(word, index){
    if(index == 0) return word
    else return word[0].toUpperCase() + word.slice(1).toLowerCase()   
  })
  
  return newStr.join('')
}
