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

//3 Find Duplicate Numbers in Array

function findduplicate(arr){
    const seen = new set();
    const duplicate =[];

    for(let sum of arr){
        if(seen.has(num)){
            duplicate.push(num);
        }else{
            seen.add(num);
        }
    }

    return duplicate;
}

console.log(findduplicate([1,2,3,4,1,6,7,4,8,]));

//4 Two Sum
function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [diff, nums[i]];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9));
