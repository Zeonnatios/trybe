def fibonacci(number):
    initial_number_1 = 0
    initial_number_2 = 1
    count = 0
    result = 0

    while count < number:
        result = initial_number_1 + initial_number_2
        initial_number_1 = initial_number_2
        initial_number_2 = result
        count += 1

    return result


print(fibonacci(5))

# def fibonacci(n):
#     sequence = [0, 1]
#     for x in range(n):
#         next = sequence[-1] + sequence[-2]
#         sequence.append(next)
#     return sequence[-1]


#  def fibonacci(n):
#   if n < 2:
#      return n
#   else:
#      return fibonacci(n-1) + fibonacci(n-2)
