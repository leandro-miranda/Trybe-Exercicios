def find_average(numbers: list[int]) -> float:
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(find_average([1, 2, 3, 4, 5]))
