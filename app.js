// // Some tasks from code wars

// function isIsogram(str) {
//   for (i = 0; i <= str.length; i++) {
//     for (j = i + 1; j <= str.length; j++) {
//       if (str[j] == str[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// // 2. Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// function longest(s1, s2) {
//   // your code
//   let summ = (s1 + s2).split("");
//   unique = [];
//   console.log(summ);
//   for (i of summ) {
//     if (!unique.includes(i)) {
//       unique.push(i);
//     }
//   }
//   return unique.sort().join("");
// }

// // // Best practice

// longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

// // console.log(longest("aretheyhere", "yestheyarehere"));

// // 3. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
// // It should look like this:
// // Sam Harris => S.H
// // patrick feeney => P.F

// function abbrevName(name) {
//   init = name.split(" ");
//   initial = [];

//   for (i of init) {
//     initial.push(i[0]);
//   }
//   return initial.join(".");
// }

// // console.log(abbrevName("P Favuzzi"));

// // // Best practice

// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }

// // 4. The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.

// // function century(year) {
// //   return Math.round((year - 1) / 100 + 1);
// // }

// // console.log(century(1705));

// // Best practice

// // const century = (year) => Math.ceil(year / 100);

//5. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them. Example:
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  array = this.split(" ");
  let jaden = "";
  for (i of array) {
    arr = i.split("");
    arr[0] = arr[0].toUpperCase();
    arr = arr.join("");
    jaden += arr + " ";
  }

  return jaden.slice(0, -1);
};

// let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// Best practice

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// 6.  Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  vowels = "aeiou";
  let count = 0;
  for (letter of str) {
    if (vowels.includes(letter)) {
      count += 1;
    }
  }
  return count;
}

// console.log(getCount("abracadabra"));

// Best practice

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 7. Your task is to write a function which returns the sum of following series upto nth term(parameter). Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  for (s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + 3 * i);
  }
  return s.toFixed(2);
}

// console.log(SeriesSum(7));

//  8. Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return (number = 0 - number);
}

// console.log(opposite(6));

// 9. Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function (list) {
  list = list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  (list = list.sort((a, b) => a - b)).reverse();
  return list[0];
};

// console.log(min([-52, 56, 30, 29, -54, 0, -110]));
// console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// Best practice

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// 10. Create a function which translates a given DNA string into RNA. For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
  arr = dna.split("");
  rna = [];
  for (i of arr) {
    if (i === "T") {
      i = "U";
    }
    rna.push(i);
  }
  return rna.join("");
}

// console.log(DNAtoRNA("TTTTTT"));

// Best practice

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// 11. Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// console.log(rowSumOddNumbers(3));

//

// 12. In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m. The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a... Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m. You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression. The string has a length greater or equal to one and contains only letters from ato z.

function printerError(s) {
  good = "abcdefghigklm";
  bad = "";
  for (letter of s) {
    if (!good.includes(letter)) {
      bad += letter;
    }
  }

  return `${bad.length}/${s.toLowerCase().length}`;
}

// console.log(
//   printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
// );

// Best practice3

function printerError(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count + "/" + s.length;
}

// 13. Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  bmi = (weight / heigth) * height;
  if (bmi <= 18.5) return "Underweight";
  else if (bmi <= 25.0) return "Normal";
  else if (bmi <= 30.0) return "Overweight";
  else if (bmi > 30) return "Obese";
}

// Best practice

// const bmi = (w, h, bmi = w / h / h) =>
//   bmi <= 18.5
//     ? "Underweight"
//     : bmi <= 25
//     ? "Normal"
//     : bmi <= 30
//     ? "Overweight"
//     : "Obese";

// 14. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  negative = [];
  for (i of array) {
    z = -i;
    negative.push(z);
  }

  return negative;
}
// console.log(invert([1, 2, 3, 4, 5]));

// Best practice

// function invert(array) {
//   return array.map((x) => (x === 0 ? x : -x));
// }

// const invert = (array) => array.map((num) => -num);

// 15. In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  let arr = dna.split("");
  let rec = [];
  arr.map((i) => {
    if (i === "A") {
      i = "T";
    } else if (i === "T") {
      i = "A";
    } else if (i === "C") {
      i = "G";
    } else if (i === "G") {
      i = "C";
    }

    rec.push(i);
    // console.log(rec);
  });
  return rec.join("");
}

// console.log(DNAStrand("ATTGC"));

// Best practice

// function DNAStrand(dna) {
//   return dna.replace(/./g, function (c) {
//     return DNAStrand.pairs[c];
//   });
// }

// DNAStrand.pairs = {
//   A: "T",
//   T: "A",
//   C: "G",
//   G: "C",
// };

// Best practice

// var pairs = { A: "T", T: "A", C: "G", G: "C" };

// function DNAStrand(dna) {
//   return dna
//     .split("")
//     .map(function (v) {
//       return pairs[v];
//     })
//     .join("");
// }

// 16. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  str = str.toLowerCase();
  arr = str.split("");
  if (!str.includes("o") && !str.includes("x")) {
    return true;
  }
  let countx = 0;
  let counto = 0;
  arr.map((i) => {
    if (i == "x") countx++;
    else if (i == "o") counto++;
  });

  console.log(countx);

  if (countx == counto) {
    return true;
  }
  return false;
}

// console.log(XO("zzpp"));

// Best practice

// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }

// Best practice

// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

// Best practice

// function XO(str) {
//   return (
//     str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
//   );
// }

// 17. Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3. You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build? The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

function findNb(m) {
  let n = 0;
  let sum = 0;
  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }
  return sum === m ? n : -1;
}

// console.log(findNb(1071225));

// 18. There is a bus moving in the city, and it takes and drop some people in each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop. Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative. The second value in the first integer array is 0, since the bus is empty in the first bus stop.

let number = function (busStops) {
  let numb = 0;
  for (i of busStops) {
    let num = i[0] - i[1];
    numb += num;
  }
  return numb;
};

// console.log(
//   number([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

// Best practice

// const number = (busStops) =>
//   busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Best practice

// var number = function (busStops) {
//   var totalPeople = 0;
//   for (var i = 0; i < busStops.length; i++) {
//     totalPeople += busStops[i][0];
//     totalPeople -= busStops[i][1];
//   }
//   return totalPeople;
// };

// 19. Given an array of integers, return a new array with each value doubled. For example:
// [1, 2, 3] --> [2, 4, 6]

// 20. Implement a function which convert the given boolean value into its string representation.

function booleanToString(b) {
  if (b) {
    return "true";
  } else return "false";
}
// console.log(maps([1, 2, 3]));

// Best practice
function booleanToString(b) {
  return b.toString();
}

function booleanToString(b) {
  return b ? "true" : "false";
}

// 21. In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  arr = numbers.split(" ").map((n) => Number(n));
  max = Math.max(...arr);
  min = Math.min(...arr);

  return max + " " + min;
}

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// Best practice

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// 22. Well met with Fibonacci bigger brother, AKA Tribonacci. As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :( So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;) If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata. [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature, n) {
  let next = [...signature];
  if (n === 0) return [];
  else if (n === 1) return signature[n - 1];
  else if (n === 2) return signature.slice(-3, 2);

  for (i = 0; i < n - 3; i++) {
    let summ = signature.reduce((a, b) => a + b);
    signature.push(summ);
    next.push(summ);
    signature.shift();
  }
  return next;
}

// Best practice

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature; //return trib - length of n
}

// Best practice

function tribonacci(signature, n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
  }
  return result;
}

// console.log(tribonacci([1, 1, 1], 10));

// 23. Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?". [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// 24. Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * 0.5);
}

// 25. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((i) => typeof i == "number");
}

function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == "number";
  });
}

// console.log(filter_list([1, 2, "a", "b"]));

// 26. Given an array of integers your solution should find the smallest integer. For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// let smallest = new SmallestIntegerFinder();
// console.log(smallest.findSmallestInt([78, 56, 232, 12, 99]));

// same solution

class SmallestIntegerFinde {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  }
}

// 27. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b. Note: a and b are not ordered!

function getSum(a, b) {
  x = Math.min(a, b);
  y = Math.max(a, b);
  console.log(y);
  let sum = 0;
  for (x; x <= y; x++) {
    sum += x;
  }
  return sum;
}

// console.log(getSum(2, -3));

// Best practice

const GetS = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

function GetSu(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}

function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

// 28. You might know some pretty large perfect squares. But what about the NEXT one? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
  let n = Math.sqrt(sq);
  if (Number.isInteger(n)) return Math.pow(n + 1, 2);
  return -1;
}

// console.log(findNextSquare(120));

// Best practice

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if (Math.round(number) === number) {
    return Math.pow(++number, 2);
  }
  return -1;
}

// 29. Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
  x = [];
  for (i = 0; i < nFloors; i++) {
    x[i] =
      " ".repeat(nFloors - i - 1) +
      "*".repeat(i * 2 + 1) +
      " ".repeat(nFloors - i - 1);
  }
  return x;
}

// console.log(towerBuilder(3));

// Best practice

function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  return tower;
}

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
  );
}

// 30. Welcome. In this kata, you are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  arr = num.toString().split("");
  pow = arr.map((a) => a * a);
  return +pow.join("");
}

// console.log(squareDigits(3212));

// Best practice

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}

// 31. The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  let unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

// console.log(duplicateEncode("Success"));

// Best practice

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// 32. Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  let count = 0;
  let arr = [];
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (!(text.lastIndexOf(text[i]) == text.indexOf(text[i]))) {
      arr.push(text[i]);
    }
  }
  arr = new Set(arr);

  return arr.size;
}

// console.log(duplicateCount("Indivisibdddilaaaity"));

// Best practice

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// 33. You just have to check if your number of building blocks is a perfect square.

let isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0 ? true : false;
};

// console.log(isSquare(9));

// Best practice

function iSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// 34. In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  arr = text.toLowerCase().split("");
  let filtArr = arr.filter((c) => {
    if (c >= "a" && c <= "z") return c;
  });
  let result = filtArr.map((i) => {
    return i.charCodeAt(0) - 96;
  });
  return result.join(" ");
}
// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Best practice

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64)
    .join(" ");
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

// 35. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if (num < 0) return num;
  else return -num;
}

// console.log(makeNegative(-5));

// Best practice

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

// 36. Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
  let array = words.split(" ");
  let sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
        console.log(sortedArray);
      }
    }
  }
  return sortedArray.join(" ");
}

// console.log(order("is2 Thi1s T4est 3a"));

// Best practice

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// 37. Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

function high(x) {
  let arr = x.split(" ");
  let ar = [];
  let b = "";
  for (i = 0; i < arr.length; i++) {
    ar = arr[i].split("");
    for (j = 0; j < ar.length; j++) {
      b = ar[j].charCodeAt() - 91;
      ar[j] = b;
    }
    console.log(ar);

    // console.log(ar);
  }
  return 1;
}

// console.log(high("man i need a taxi up to ubud"));

// 38. Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  else {
    array1Sort = array1.sort((a, b) => {
      return a - b;
    });
    array2Sort = array2.sort((a, b) => {
      return a - b;
    });
    array2Sort = array2Sort.map((i) => (i = Math.sqrt(i)));
    console.log(array1Sort, array2Sort);

    return array1Sort.every((i, j) => {
      return i == array2Sort[j];
    });
  }
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
// console.log(comp(a1, a2));

// Best practice

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

const com = (array1, array2) =>
  Array.isArray(array1) &&
  Array.isArray(array2) &&
  array1.every((item) => {
    const index = array2.indexOf(Math.pow(item, 2));
    return index > -1 ? array2.splice(index, 1) : false;
  });

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  );
}

// 39. Enough is enough! lice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. e tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, x) {
  let cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;

    return cache[n] <= x;
  });
}
// console.log(deleteNth([20, 37, 20, 21], 1));

// 40. Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  return (sum = numbers[0] + numbers[1]);
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// Best practice

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

// 41. You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k <= 0 || k > strarr.length) {
    return "";
  } else {
    let arr = [];
    strarr.sort((i, k) => {
      i.length - k.length;
    });

    strarr.map((i, j) => {
      arr.push(strarr[strarr.length - 1 - j]);
    });

    return arr;
  }
}

console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
