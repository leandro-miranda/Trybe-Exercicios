def find_biggest_number(first_number: int, second_number: int) -> int:
    if first_number > second_number:
        return first_number
    return second_number


print(find_biggest_number(3, 2))
