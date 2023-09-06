function myArraySum(array) {

    let arraySum = 0;
  
    for(const number of array){
      arraySum += number;
    }
  
    return arraySum;
     
  }
  
  console.log(myArraySum([12, 30, 3]));