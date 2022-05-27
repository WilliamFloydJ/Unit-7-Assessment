const addToZero = (numArr) => {
  for (let i = 0; i < numArr.length; i++) {
    for (let o = 0; o < numArr.length; o++) {
      if (o !== i) {
        let numSum = numArr[i] + numArr[o];
        if (numSum === 0) {
          return true;
        }
      }
    }
  }
  return false;
};

console.log(addToZero([2, 4, -8, -4]));
// O(n^2)

const hasUniqueChars = (str) => {
  splitStr = str.split("");
  usedChars = [];
  for (let i = 0; i < splitStr.length; i++) {
    if (usedChars.includes(splitStr[i]) === false) {
      usedChars.push(splitStr[i]);
    } else {
      return false;
    }
  }
  return true;
};

console.log(hasUniqueChars("Monday"));

//O(n)

const isPangram = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let splitStr = str.split("");
  for (let a = 0; a < alphabet.length; a++) {
    if (splitStr.includes(alphabet[a]) === false) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

//O(1)

const findLongestWord = (strArr) => {
  let longestWord = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longestWord) {
      longestWord = strArr[i].length;
    }
  }
  return longestWord;
};

console.log(
  findLongestWord([
    "Hippopotomonstrosesquippedaliophobia",
    "Floccinaucinihilipilification",
    "Xenotransplantation",
    "Pneumonoultramicroscopicsilicovolcanoconiosis",
  ])
);

//O(n)
