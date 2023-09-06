//Un nombre premier étant un nombre qui possède 2 diviseurs (1 et lui-même).

function myPrimeList(limit) {
    const primeArray = [];
  
    for (let i = 2; i <= limit; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        primeArray.push(i);
      }
    }
  
    return primeArray;
  }
  
  console.log(myPrimeList(18));