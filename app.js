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

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);

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
