function myCountChar(haystack, needle){

    counter = 0;

    for(const letter of haystack){
        if(letter === needle){
            counter++
        }
    }

    return counter;

}

console.log(myCountChar("hello world", "o"));