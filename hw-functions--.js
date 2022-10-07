//1:  If Statement
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
console.log( maxOfTwoNumbers(3, 9));

//2:
const maxOfThree = function(a, b, c) {
    let largest;
    if (a >= b) {
        largest = a;
    } else {
        largest = b;
    }

    if (largest >= c) {
        return largest;
    } else {
        return c;
    }
}
console.log( maxOfThree(5, 10, 15));

// 3: 
function isCharAVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
    let i = 0;

    while(char) {
        if (char === vowels[i]) {
            return true;
        } else if (i === vowels.length) {
            return false;
        } else {
            i++;
        }
    }
}
console.log(isCharAVowel("a"));

//4: 
const sumArrayB = function(nums) {
    let sum = 0;

    for (let x = 0; x < nums.length; x++) {
        sum += nums[x]
    }

    return sum;
}
console.log(sumArrayB([5, 4, 3, 2, 1]));


//  5. Array with for loop
function multiplyArrayB(nums) {
    let product = 1;

    for(let x = 0; x < nums.length; x++) {
        product *= nums[x];
    }

    return product;
}
console.log(([5, 4, 3, 2, 1]));


//  6: 
const numArgsB = function(...args) {
    return arguments.length;
}
console.log( numArgsB(1, 2, 3, 4, 5));

// 7: 

function reverseStringB(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}
console.log(reverseStringB("Hello Hola"));


//8. 
const longestStringInArray = function(args) {
    let longest = 0;

    args.forEach((str) => {
        if (str.length > longest)
        {
            longest = str.length;
        }
    });

    return longest;
}
console.log(longestStringInArray(["First", "Second", "Fifth", "Seventh", "Fourteenth"]));


//  9:
function stringsLongerThan(num, ...args) {
    const keptStrings = [];

    args.forEach((function(str) {
        if(str.length > num) {
            keptStrings.push(str);
        }
    }));

    return keptStrings;

}
console.log( stringsLongerThan(4, "Ford", "Dodge", "Chevrolet", "Kia"));


