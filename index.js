function CaesarCipher(str,num) { 

    // code goes here  
    const letters = [];
    const regex = /[a-z]/i;
  
    for (let i=0; i<str.length; i++){
      if(str[i].match(regex)){
        letters.push(str.charCodeAt(i)+num);
      }else{
        letters.push(str.charCodeAt(i))
      }
    }
  
    for(let i=0; i<letters.length; i++){
      letters[i] = String.fromCharCode(letters[i])
  
    }
  
    return letters.join("");
  
  }
  
  CaesarCipher("Hello",num = 4)
  CaesarCipher("abc",num = 0)