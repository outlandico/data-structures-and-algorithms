class Dog:
    def __init__(self, name):
        self.species = "dog"
        self.name = name

class Cat:
    def __init__(self, name):
        self.species = "cat"
        self.name = name

class AnimalShelter:
    def __init__(self):
        self.dogs = []
        self.cats = []

    def enqueue(self, animal):
        if animal.species == "dog":
            self.dogs.append(animal)
        elif animal.species == "cat":
            self.cats.append(animal)

    def dequeue(self, pref=None):
        if pref == "dog":
            if self.dogs:
                return self.dogs.pop(0)
        elif pref == "cat":
            if self.cats:
                return self.cats.pop(0)
        else:
            if self.dogs:
                return self.dogs.pop(0)
            elif self.cats:
                return self.cats.pop(0)
        return None

import unittest

class TestAnimalShelter(unittest.TestCase):

    def test_enqueue_dogs_and_cats(self):
        shelter = AnimalShelter()
        shelter.enqueue(Dog("Buddy"))
        shelter.enqueue(Cat("Whiskers"))
        self.assertEqual(len(shelter.dogs), 1)
        self.assertEqual(len(shelter.cats), 1)

    def test_dequeue_with_preference(self):
        shelter = AnimalShelter()
        shelter.enqueue(Dog("Buddy"))
        shelter.enqueue(Cat("Whiskers"))
        self.assertEqual(shelter.dequeue("dog").species, "dog")
        self.assertEqual(shelter.dequeue("cat").species, "cat")

    def test_dequeue_without_preference(self):
        shelter = AnimalShelter()
        shelter.enqueue(Dog("Buddy"))
        shelter.enqueue(Cat("Whiskers"))
        self.assertEqual(shelter.dequeue().species, "dog")
        self.assertEqual(shelter.dequeue().species, "cat")

    def test_empty_shelter(self):
        shelter = AnimalShelter()
        self.assertEqual(shelter.dequeue(), None)

if __name__ == '__main__':
    unittest.main()
