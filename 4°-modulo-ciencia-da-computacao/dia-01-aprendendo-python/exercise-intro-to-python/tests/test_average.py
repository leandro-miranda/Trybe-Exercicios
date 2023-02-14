from src.average import find_average


def test_average():
    assert find_average([5, 5, 5]) == 5
    assert find_average([7.5, 8, 8.5]) == 8
    assert find_average([0, 10, 0]) == 10/3
    assert find_average([-1, -1, -1]) == -1
