## Problems in RNN

### Exploding Gradient-
It is a problem where the weights adjusted in the backpropagation are very high due to high gradients because of which it is Unable to learn from the training data. The network and learning become unstable due to this problem. Simply the algorithm gives higher importance to the weights unnecessarily.

### Solutions of Exploding Gradient-

* **Truncated Backpropagation** – Stop the backpropagation after a certain point, but that’s not optimal because all the weights are not updated then. But if we don’t stop the networks will be unstable and not be able to use for prediction.
*  **Gradient Clipping** – Putting limit on the gradient is another solution. Never let gradient go above a specific value. So gradient will remain small.

### Vanishing Gradient- 

In RNN, the cost function Update/Propagate all the way back through time to these neurons. Weight recurring, W(rec) is the weight used to connect the hidden layers with themselves in the unrolled temporal loop. W(rec) is multiplied all the way to the backward from where the input contribution started. So, if W(rec) is close to 0, by multiplying it many times the lower the value we get. Thus, in back -propagated, our gradient become less and less. The gradient seems to be vanishing, and less gradient means model will train very slowly. Lower the gradient slower it will update the corresponding weights and even some weights will not be trained properly.

**If W(rec) < 1 -  Vanishing Gradient**

**If W(rec) > 1 -  Exploding Gradient**

## Long Short Term Memory
This Algorithm is the solution to vanishing gradient problem. 
Long Short Term Memory **(LSTMs)** are a special kind of RNN, which can remember the information for longer duration.
LSTMs also have chain like structures like RNN but the repeating module has different structure, instead of having single neural network there are 4 interacting in a special way. Also, there is a cell state, it has memory. It remembers the output from the last layer. 
LSTMs can remember the inputs for a longer duration because LSTM stores its information in a memory, which is very much similar to the memory of a computer and LTSM can read, write and delete information from its memory. 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Peephole_Long_Short-Term_Memory.svg/2000px-Peephole_Long_Short-Term_Memory.svg.png" height = "200" width = "400"/>

[Image Source] - https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Peephole_Long_Short-Term_Memory.svg/2000px-Peephole_Long_Short-Term_Memory.svg.png

There are gates cell, which tells whether to store or delete the information or not based on their importance which is determined by the algorithm
There are 3 gates:
1. Input – this gate tells whether or not to let new input come inside. 
1. Forget – It can delete the information if it is not important.
1. Output –  at any current time shows the output.

They are analog and have working of sigmoid function inside them. 
LTSM can solve the vanishing gradient problem because it keeps the gradient steeper (never be 0) and thus the gradient will learn from the training data.

