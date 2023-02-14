from src.biggest_number import find_biggest_number


def test_find_biggest_number():
    assert find_biggest_number(2, 3) == 3
    assert find_biggest_number(6, 5) == 6
    assert find_biggest_number(4, 4) == 4
    assert find_biggest_number(-1, 0) == 0
    assert find_biggest_number(-1, -2) == -1
