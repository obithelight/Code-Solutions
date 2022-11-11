/*
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;
*/

//Solution 1
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}

//Solution 2
function htmlspecialchars(formData) {
  let text = ''
    for(let i = 0; i < formData.length; i++){
      if(formData[i] === "<"){
        text += formData[i].replace("<","&lt;")
      }
      else if(formData[i] === ">"){
        text += formData[i].replace(">","&gt;")
      }
      else if(formData[i] === '"'){
        text += formData[i].replace('"',"&quot;")
      }
      else if(formData[i] === "&"){
        text += formData[i].replace("&","&amp;")
      } else{
        text += formData[i]
      }
    }
    return text
}