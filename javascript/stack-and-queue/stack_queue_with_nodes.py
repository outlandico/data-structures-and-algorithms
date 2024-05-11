class Queue:
    def __init__(self):
        self.queue = []

    def enqueue(self, value):
        self.queue.append(value)

    def dequeue(self):
        if not self.isEmpty():
            return self.queue.pop(0)
        else:
            raise Exception("Queue is empty")

    def peek(self):
        if not self.isEmpty():
            return self.queue[0]
        else:
            raise Exception("Queue is empty")

    def isEmpty(self):
        return len(self.queue) == 0

# Example Usage:
queue = Queue()
queue.enqueue(1)
queue.enqueue(3)
queue.enqueue(5)
print(queue.dequeue())  # Output: 1
print(queue.peek())     # Output: 3
