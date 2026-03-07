//1 Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh

//2 Check Palindrome

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // true