double = {index: index * 2 for index in range(3, 21)}
print(double)

triple = double
for key in triple.keys():
    if key % 2 != 0:
        double[key] = key * 3


print(triple)


count_chars = {}
str = "bbbbaaaacccaaaaaaddddddddcccccccb"


for char in str:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)