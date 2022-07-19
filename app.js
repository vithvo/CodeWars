// Some tasks from code wars

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

// 2. Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  // your code
  let summ = (s1 + s2).split("");
  unique = [];
  console.log(summ);
  for (i of summ) {
    if (!unique.includes(i)) {
      unique.push(i);
    }
  }
  return unique.sort().join("");
}

// Best practice

longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"));

// 3. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  // code away
}
