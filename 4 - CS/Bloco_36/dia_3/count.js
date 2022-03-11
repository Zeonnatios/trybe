count_chars = {};
str = "bbbbaaaacccaaaaaaddddddddcccccccb";


for (let index = 0; index < str.length; index++) {
  // !count_chars[str[index]] ? count_chars[str[index]] = 1 : count_chars[str[index]] += 1;
  if (!count_chars[str[index]]) {
    count_chars[str[index]] = 1;
  }
  else {
    count_chars[str[index]] += 1;
  }
}

console.log(count_chars);