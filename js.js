function adding (...numbers)  {
    if (typeof numbers[0] === "number" && numbers[0] >= 2 && numbers[0] != 41) {
        return numbers[0] + " компютера"; 
    } 
            
    else if (numbers[0] === 1 || numbers[0] === 41) {
        return numbers[0] + 'компютер';
    } else {
        return "введи число";
    }
    
    }
console.log(adding(41));

function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimesInRange(min, max) {
    const primes = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}


console.log(findPrimesInRange(11, 20));



function findDivisors(arr) {
    const maxNum = Math.max(...arr); 
    const divisors = [];
    for (let i = 1; i <= maxNum; i++) {
       
        if (arr.every(num => num % i === 0)) {
            divisors.push(i); 
        }
    }

    return divisors;
}


console.log(findDivisors([42, 12, 18])); 

function Table(n) {
    for (let i = 1; i <= n; i++) {
        let row = ' ';
        for (let j = 1; j <= n; j++) {
            row += (i * j).toString().padStart(4, ' '); 
        }
        console.log(row);
    }
}


Table(5);
