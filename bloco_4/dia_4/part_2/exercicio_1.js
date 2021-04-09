function palindrome(string) {
  let reverse = string.split("").reverse().join("");
  console.log(reverse);
  return reverse === string ? true : false;
}

console.log(palindrome('developer'));
console.log(palindrome('arara'));
