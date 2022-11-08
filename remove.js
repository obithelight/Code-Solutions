/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

//Solution 1
function removeExclamationMarks(s) {
  return s.replace(/[!]/g, "")
}

//Solution2
function removeExclamationMarks(s) {
   return s.split("!").join("")
 }