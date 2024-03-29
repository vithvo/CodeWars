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
    x[i] = " ".repeat(nFloors - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(nFloors - i - 1);
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
    tower.push(" ".repeat(nFloors - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) => " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
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
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
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

// function longestConsec(strarr, k) {
//   if (strarr.length == 0 || k <= 0 || k > strarr.length) {
//     return "";
//   } else {
//     let arr = [];
//     strarr.sort((i, k) => {
//       i.length - k.length;
//     });

//     strarr.map((i, j) => {
//       arr.push(strarr[strarr.length - 1 - j]);
//     });

//     return arr;
//   }
// }

// console.log(longestConsecs(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));

// Best practice

function longestConsecs(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}
// console.log(longestConsecs(["a", "kjasfhk", "a", "wabcd", "abc"], 2));

// 41. Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function grow(x) {
  return (arr = x.reduce((a, b) => a * b));
}

// console.log(grow([1, 2, 3]));

// Imperative method

const gro = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

// 42. We need a function that can transform a number (integer) into a string. What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}

// console.log(numberToString(-100));

// another solution

const numberToStrin = (num) => `${num}`;

// 43. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  return numbers.length == 0 ? 0 : numbers.reduce((a, b) => a + b);
}

// console.log(sum([]));

// Best practice

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// 44. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string. Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a, b) {
  c = a + b;
  console.log(c);
  return c.toString(2);
}
// console.log(addBinary(5, 9));

// 45. You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  let arrb = [];
  let arra = [];
  let res;
  arr.map((_, k) => {
    arra = arr.slice(k + 1);
    arrb = arr.slice(0, k);

    let arras = arra.reduce((a, b) => a + b, 0);
    let arrbs = arrb.reduce((a, b) => a + b, 0);
    if (arras == arrbs) {
      return (res = k);
    }
  });
  return res ? res : res == 0 ? 0 : -1;
}
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));

// Best practice

function findEvenIndex(arr) {
  var left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1];
    right -= arr[i];

    if (left == right) return i;
  }

  return -1;
}

// /////////////////

const summ = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndexx = (a) => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// 46. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 == 0) {
    return number * 8;
  }
  return number * 9;
}

// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(3));

// Best practice

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

// 47. Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  return numbers.map((a) => (a = a ** 2)).reduce((a, b) => a + b, 0);
}

// console.log(squareSum([0, 3, 4, 5]));

// Best practice

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

// 48. Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array (or list in Python, Haskell or Elixir). Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let a = [];
  for (i = 1; i <= n; i++) {
    a.push(i * x);
  }
  return a;
}

// console.log(countBy(1, 5));

// Best practice

const countB = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

const counBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);

// 49. Take an array and remove every second element from the array. Always keep the first element and start removing with the next element. None of the arrays will be empty, so you don't have to worry about that! Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr) {
  let a = [];
  arr.map((i, j) => {
    if (j % 2 == 0) {
      a.push(i);
    }
    return arr;
  });
  return a;
}

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

// Best practice

function removeEveryOther(arr) {
  return arr.filter(function (elem, index) {
    return index % 2 === 0;
  });
}

// 50. Given a list of integers, determine whether the sum of its elements is odd or even. Give your answer as a string matching "odd" or "even". If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  return array.reduce((a, b) => a + b, 0) % 2 == 0 ? "even" : "odd";
}

// console.log(oddOrEven([1, 1, 5]));

// 51. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 == 0 ? false : true;
}

// console.log(lovefunc(1, 4));

// Best practice

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

const lovefun = (Ͼ, Ͽ) => !!((Ͼ & 1) ^ (1 & Ͽ));

// 52. Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
// Note: n and p will always be given as strictly positive integers.

function digPow(n, p) {
  let a = [...n.toString()];
  a = a.map((i, k) => Math.pow(i, p + k));
  a = a.reduce((a, b) => a + b);
  let b = a / n;
  return b % 1 == 0 ? b : -1;
}

// console.log(digPow(695, 2));

// Best practice

function digPow(n, p) {
  var x = String(n)
    .split("")
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

// 53. Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

function findShort(s) {
  a = s.split(" ").map((i) => (i = i.length));
  a.sort((a, b) => a - b);
  return a[0];
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// Best practice

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

// // 54. The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position. The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// function wave(str) {
//   let ind = [];
//   str = str.toLowerCase();
//   str = str.split("").map((i, k) => {
//     if (i == " ") {
//       ind.push(k);
//     }
//     return (i = str);
//   });
//   let arr = str.map((i, k) => {
//     i = i.split("");
//     i.splice(k, 1, i[k].toUpperCase());
//     return (i = i.join(""));
//   });
//   res = arr.filter((_, i) => {
//     return !ind.includes(i);
//   });
//   return res;
// }

// // Best practice

// function wave(str) {
// 	let result = [];

//   str.split("").forEach((char, index) => {
// 		if (/[a-z]/.test(char)) {
// 			result.push(
// 				str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
// 				);
// 			}
// 		});

// 		return result;
// 	}

// 	console.log(wave("Hello HEllo"));

// // 55. Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// var uniqueInOrder = function (iterable) {
//   const result = [];

//   [...iterable].map((item, i) => {
//     if (iterable[i] === iterable[i + 1]) {
//       i++;
//     } else result.push(item);
//   });
//   return result;
// };

// console.log(uniqueInOrder([1, 2, 2, 3, 3]));

// // // Best practice

// var uniqueInOrder = function (iterable) {
//   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
// };

// // 56. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// function reverseWords(str) {
//   return str.split(" ").map((word) => (word = word.split('').reverse().join(''))).join(' ');
// }

// console.log(reverseWords("elbuod  secaps"));

// // 57. Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// function getGrade(s1, s2, s3) {
//   const score = (s1 + s2 + s3) / 3;
//   if (90 <= score && score <= 100) return "A";
//   if (80 <= score && score < 90) return "B";
//   if (70 <= score && score < 80) return "C";
//   if (60 <= score && score < 70) return "D";
//   if (00 <= score && score < 60) return "F";
// }

// console.log(getGrade(95, 2, 93));

// // // // Best practice

// function getGrade(s1, s2, s3) {
//   var s = (s1 + s2 + s3) / 3;
//   return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
// }

// // 58. The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases (input -> output):

// function sumDigPow(a, b) {
//   result = [];
//   for (i = a; i <= b; i++) {
//     sum = 0;
//     [...i.toString()].map((n, ind) => {
//       sum += Math.pow(n, ind + 1);
//       i === sum && result.push(i);
//     });
//   }
//   return result;
// }

// console.log(sumDigPow(11, 200));

// 59.  Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// function sumArray(array) {
//   return array
//     ? array
//         .sort((a, b) => a - b)
//         .filter((_, i) => i !== 0 && i !== array.length - 1)
//         .reduce((a, b) => a + b, 0)
//     : 0;
// }

// console.log(sumArray([1, 1, 11, 2, 3]));

// // Best solution

// sumArray = (a) =>
//   a
//     ? a
//         .sort((x, y) => x - y)
//         .slice(1, -1)
//         .reduce((s, e) => s + e, 0)
//     : 0;

// 60. You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// function sortArray(array) {
//   const arrOdd = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);
//   let j = 0;
//   array = array.map((n) => {
//     if (n % 2 !== 0) {
//       n = arrOdd[j];
//       j++;
//     }
//     return n;
//   });
//   return array;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// // // Best solution

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }

// 61. When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// function switchItUp(n) {
//   return (
//     (n === 1 && "one") ||
//     (n === 2 && "two") ||
//     (n === 3 && "three") ||
//     (n === 4 && "four") ||
//     (n === 5 && "five") ||
//     (n === 6 && "six") ||
//     (n === 7 && "seven") ||
//     (n === 8 && "eight") ||
//     (n === 9 && "nine") ||
//     (n === 10 && "ten")
//   );
// }

// // // // Best solution

// switchItUp = (n) =>
//   ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];

// 62. Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

// function expressionMatter(a, b, c) {
//   return [a + b + c, a * (b + c), a * b * c, a + b * c, (a + b) * c].sort((a, b) => b - a)[0];
// }

// console.log(expressionMatter(2, 1, 2));

// 63.

// comments = [
//   { answersLength: 2, name: "v" },
//   { answersLength: 1, name: "v" },
// ];

// const qwe = comments.map((comment) => ({ ...comment, answersLength: 17 }));

// console.log(qwe);

// 64. Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

// function findOdd(A) {
//   const res = A.reduce((n, i) => {
//     n[i] = n[i] ? n[i] + 1 : 1;
//     return n;
//   }, {});
//   const max = Object.entries(res).filter((acc) => acc[1] % 2 != 0);
//   return Number(max[0][0]);
//

// // // // Best solution

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// console.log(findOdd([1, 1, 2]));

// 65. You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9. Write a program that returns the girl's age (0-9) as an integer. Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString) {
//   return Number(inputString[0]);
// }

// // // // Best solution

// function getAge(inputString) {
// 	return parseInt(inputString);
// }

// console.log(getAge("4 yers old"));

// 66. A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   let count = 0;
//   const alf = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];

//   alf.forEach((letter, i) => {
//     string.toLowerCase().includes(letter) && count++;
//   });
//   console.log(count);
//   return count === 26 ? true : false;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// // // // Best solution

// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => string.toLowerCase().includes(x));
// }

// // // // Best solution

// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// }

// 67. Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest. Write a function that returns both the minimum and maximum number of the given list/array.
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   return [arr[0], arr[arr.length - 1]];
// }

// console.log(minMax([2, 5, 3, 5, 7, 8,33,4,6]));

// // // // Best solution

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// 68. Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"

// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

// function howMuchILoveYou(nbPetals) {
//   const pit = {
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly",
//     6: "not at all",
//   };

//   return nbPetals % 6 !== 0 ? pit[nbPetals % 6] : pit[6];
// }

// console.log(howMuchILoveYou(12));

// // // // Best solution

// const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];

// function howMuchILoveYou(n) {
//   return phrases[(n - 1) % phrases.length];
// }

// function howMuchILoveYou(nbPetals) {
//   let phrase = {
//     0: "not at all",
//     1: "I love you",
//     2: "a little",
//     3: "a lot",
//     4: "passionately",
//     5: "madly",
//   };
//   return phrase[nbPetals % 6];
// }

// 69. Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.Rules for a smiling face:
// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// function countSmileys(arr) {
//   const smile = [":D", ":)", ";D", ";)", ":-D", ":-)", ";-D", ";-)", ":~D", ":~)", ";~D", ";~)"];
//   let count = 0;
//   arr.forEach((obj) => {
//     smile.forEach((smObj) => {
//       if (obj === smObj) {
//         count++;
//       }
//     });
//   });
//   return arr.length === 0 ? 0 : count;
// }

// console.log(countSmileys([":D", ":~)", ";~D", ":)"]));

// // // // Best solution

// function countSmileys(arr) {
//   return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
// }

// 70. The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// function cockroachSpeed(s) {
//   console.log((s * 1000 * 100) / (60 * 60));
//   return Math.floor((s * 1000 * 100) / (60 * 60));
// }

// console.log(cockroachSpeed(2.8408584087947224));

// // // // Best solution

// const cockroachSpeed = (s) => Math.floor(s / 0.036);

// 71. altERnaTIng cAsE <=> ALTerNAtiNG CaSe. Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example: 
