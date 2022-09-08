# Stack

Abstract data type which only allows to insert elements at the beginning / the top. In addition only the first / most upper element can be watched / removed. This rule is called LIFO (Last in - first out) which means that the last element added is also the first element to remove.

| Operation | Description                                           |
| --------- | ------------------------------------------------------|
| push      | Puts an element to the top of the stack               |
| pop       | Reads & removes most upper element                    |
| peek      | Reads most upper element (like pop + push)            |
| isEmpty   | Checks if stack is empty                              |
| isFull    | Checks if stack is full (for stacks with fixed size)  |
| removeAll | Removes all elements                                  |

## Implementation

Static array & index which signals which position in the array is currently the top element

## Use Cases

- Method-Call-Stack (e.g. Recursion)
- Paranthesis checking in mathematical expressions or source code
- stack machines in automata theory 