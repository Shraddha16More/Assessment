function isPrime(x) {
    if (x <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  function nextPrimeDifference(x) {
    let i = x + 1;
    
    while (!isPrime(i)) {
      i++;
    }
    
    return i - x;
  }
    