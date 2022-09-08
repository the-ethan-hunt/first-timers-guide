# Queue

Abstract data type which only allows to insert elements at the end / bottom. In addition only the last / deepest element can be watched / removed. This rule is called FIFO (First in - first out) which means that the first element added is also the first element to remove.

| Operation / Method / Function           | Description                                                                                                                             |
| ----------------------------------------| --------------------------------------------------------------------------------------------------------------------------------------- |
| enqueue / offer                         | Inserts an element at the end of the                                                                                                    |
| dequeue / poll                          | Reads & removes the first / foremost / oldest                                                                                           |
| peek                                    | Reads most upper element (like enqueue +                                                                                                |
| isEmpty                                 | Checks if queue is                                                                                                                      |
| isFull                                  | Checks if queue is full (for queues with fixed                                                                                          |
| removeAll                               | Removes all                                                                                                                             |

## Implementation

Linked List: Elements have pointers to next elements (see <a href="https://www.programiz.com/dsa/linked-list">here</a>) 

## Use Cases

- Waiting queues (e.g. print jobs)
- Caching of data which has to be processed in several steps asynchronously (Buffer)
- First Come First Serve Problems

## Extension

"Priority Queue" adds a priority value to each element which then is inserted according to a sort mechanism