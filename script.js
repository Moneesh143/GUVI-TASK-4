//Print odd numbers in an array using anaonyms function
console.log("Print odd numbers in an array using anaonyms function?");
const OddNumbers = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
OddNumbers(numbers);

//Print odd numbers in an array using IIFE function
console.log("Print odd numbers in an array using IIFE function?");
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//Print odd numbers in an array using arrow function
console.log("Print odd numbers in an array using arrow function?");
const oddnumbers = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};
oddnumbers(numbers);

//Convert all the strings to title caps in a string array
console.log("Convert all the strings to title caps in a string array");
const vehicles = ["car", "truck", "bike"];
const one = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(vehicles);
console.log(one);

//Convert all the strings to title caps in a string array using IIFE function
console.log(
  "Convert all the strings to title caps in a string array using IIFE function"
);

const ones = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
})(["tortoise", "crab", "whale"]);
console.log(ones);

//Convert all the strings to title caps in a string array using arrow function
console.log(
  "Convert all the strings to title caps in a string array using arrow function"
);

const once = ((arr) =>
  arr.map((str) => str.charAt(0).toUpperCase() + str.slice(1)))([
  "stump",
  "ball",
  "bat",
]);
console.log(once);

// Sum of all numbers in an array using anonymous function ?

console.log("Sum of all numbers in an array using anonymous function ?");
const nu = [1, 2, 3, 4, 5];

const sum = (function (arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(nu);

console.log(sum);

// Sum of all numbers in an array using IIFE function ?
console.log("Sum of all numbers in an array using IIFE function ?");
const nume = [1, 8, 7, 4, 5];

const sume = (function () {
  let total = 0;
  for (let i = 0; i < nu.length; i++) {
    total += nu[i];
  }
  return total;
})(nume);

console.log(sume);
//Sum of all numbers in an array using arrow function?
console.log("Sum of all numbers in an array using arrow function ?");
const cc = [1, 2, 3, 4, 5];

const bb = (() => {
  let total = 0;
  for (let i = 0; i < cc.length; i++) {
    total += cc[i];
  }
  return total;
})(cc);

console.log(bb);

//Return all the prime numbers in an array
console.log("Return all the prime numbers in an array using anonyms function");

console.log("Return all the prime numbers in an array");

const samp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = (function (arr) {
  const isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})(samp);

console.log(primeNumbers);

console.log("Return all the prime numbers in an array  in ARROW FUNCTION");
const sampe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const primeNumber = ((arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
})(sampe);

console.log(primeNumber);

//Return all the palindromes in an array using anonymous function
console.log(
  "Return all the palindromes in an array using anonymous function ?"
);
const pal = [121, 123, 1331, 555, 987, 1221, 45654];

const palindromeNumbers = (arr) => {
  return arr.reduce((result, number) => {
    const strNumber = number.toString();
    const reversedNumber = strNumber.split("").reverse().join("");

    return strNumber === reversedNumber ? [...result, number] : result;
  }, []);
};

console.log(palindromeNumbers(pal));

//Return all the palindromes in an array using IIFE function
console.log("Return all the palindromes in an array using IIFE function ?");

const pals = [232, 434, 56765, 9009, 89098];

const palindromeNumberss = (() => {
  return (arr) => {
    return arr.filter((number) => {
      const strNumber = number.toString();
      const reversedNumber = strNumber.split("").reverse().join("");

      return strNumber === reversedNumber;
    });
  };
})();

console.log(palindromeNumbers(pals));

//Return all the palindromes in an array using arrow function
console.log("Return all the palindromes in an array using arrow function ?");
const palss = [323, 67076, 181, 17071, 4567];
const palindromeNumbersss = ((arr) =>
  arr.filter((number) => {
    const strNumber = number.toString();
    const reversedNumber = strNumber.split("").reverse().join("");

    return strNumber === reversedNumber;
  }))(palss);

console.log(palindromeNumbersss);
//Return median of two sorted arrays of the same size using anonymous function
console.log(
  "Return median of two sorted arrays of the same size using anonymous function ?"
);
const nums1 = [1, 3, 5];
const nums2 = [4, 5, 6];
function Median(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 1) {
    return merged[Math.floor(length / 2)];
  } else {
    const mid = length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}

const median = Median(nums1, nums2);
console.log(median);

//Return median of two sorted arrays of the same size using IIFE function
console.log(
  "Return median of two sorted arrays of the same size using IIFE function ?"
);
const medians = (() => {
  function Medians(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;

    if (length % 2 === 1) {
      return merged[Math.floor(length / 2)];
    } else {
      const mid = length / 2;
      return (merged[mid - 1] + merged[mid]) / 2;
    }
  }

  const nums1 = [1, 3, 5];
  const nums2 = [2, 4, 6];

  return Medians(nums1, nums2);
})();

console.log(medians);
//Rotate an array by k times in anonymous function
console.log("Rotate an array by k times in anonymous function ?");
const myArray = [1, 2, 3, 4, 5];
const k = 2;
const rotateArray = function (arr, k) {
  const n = arr.length;
  k = k % n;

  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    rotatedArray[newIndex] = arr[i];
  }

  return rotatedArray;
};

const rotated = rotateArray(myArray, k);
console.log(rotated);
//Rotate an array by k times in IIFEfunction
console.log("Rotate an array by k times in IIFE function ?");
const cla = [3, 5, 7, 9, 4];
const p = 2;

const rotateds = (() => {
  const n = cla.length;
  const rotatedArray = [];

  for (let i = 0; i < n; i++) {
    const newIndex = (i + p) % n;
    rotatedArray[newIndex] = cla[i];
  }

  return rotatedArray;
})();

console.log(rotateds);

//Remove duplicates from an array
console.log("Remove duplicates from an array using ananymous function");
const hh = [1, 2, 2, 3, 4, 4, 5];

const uarr = (function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result[result.length] = arr[i];
    }
  }
  return result;
})(hh);

console.log(uarr);

console.log("Remove duplicates from an array using IIFE function");
