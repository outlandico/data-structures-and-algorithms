# test_stack_queue_with_nodes.py
import unittest
from stack_queue_with_nodes import Stack, Queue

class TestStack(unittest.TestCase):
    def test_it_push_pop(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.pop(), 2)
        self.assertEqual(stack.pop(), 1)

    def test_it_peek(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.peek(), 2)
        stack.pop()
        self.assertEqual(stack.peek(), 1)

    def test_it_isEmpty(self):
        stack = Stack()
        self.assertTrue(stack.isEmpty())
        stack.push(1)
        self.assertFalse(stack.isEmpty())

    def test_it_pop_empty(self):
        stack = Stack()
        with self.assertRaises(Exception):
            stack.pop()

    def test_it_peek_empty(self):
        stack = Stack()
        with self.assertRaises(Exception):
            stack.peek()

class TestQueue(unittest.TestCase):
    def test_it_enqueue_dequeue(self):
        queue = Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        self.assertEqual(queue.dequeue(), 1)
        self.assertEqual(queue.dequeue(), 2)

    def test_it_peek(self):
        queue = Queue()
        queue.enqueue(1)
        queue.enqueue(2)
        self.assertEqual(queue.peek(), 1)
        queue.dequeue()
        self.assertEqual(queue.peek(), 2)

    def test_it_isEmpty(self):
        queue = Queue()
        self.assertTrue(queue.isEmpty())
        queue.enqueue(1)
        self.assertFalse(queue.isEmpty())

    def test_it_dequeue_empty(self):
        queue = Queue()
        with self.assertRaises(Exception):
            queue.dequeue()

    def test_it_peek_empty(self):
        queue = Queue()
        with self.assertRaises(Exception):
            queue.peek()

if __name__ == '__main__':
    unittest.main()

    