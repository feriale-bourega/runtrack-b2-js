function myUpperCase(string){

    const majLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minLetters ="abcdefghijklmnopqrstuvwxyz";

    let newString = "";

    for(const letter of string){
        for(let i = 0; i < minLetters.length; i++){
           if (letter === minLetters[i]){
            newString += majLetters[i];
           }
        }
    }
    return newString;

}

console.log(myUpperCase("hello"));