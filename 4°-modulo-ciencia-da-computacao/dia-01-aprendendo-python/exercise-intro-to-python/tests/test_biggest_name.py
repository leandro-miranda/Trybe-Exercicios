from src.biggest_name import find_biggest_name
import unittest


class TestBiggestName(unittest.TestCase):
    def setUp(self) -> None:
        self.first_name_list = ["José", "Lucas", "Nádia", "Fernanda"]
        self.second_name_list = ["José", "Nádia", "João"]
        self.third_name_list = ["Henrique", "João"]
        self.fourth_name_list = ["José", "João"]

    def test_find_biggest_name(self):
        assert find_biggest_name(self.first_name_list) == "Fernanda"
        assert find_biggest_name(self.second_name_list) == "Nádia"
        assert find_biggest_name(self.third_name_list) == "Henrique"
        #  First occurrence prevails
        assert find_biggest_name(self.fourth_name_list) == "José"
