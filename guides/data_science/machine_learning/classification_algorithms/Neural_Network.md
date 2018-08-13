# Neural Network

###### Brief History

[Artificial Neural Network][1] (or **ANN**) is one of the most fundamental machine learning algorithm that tends to mimic the human brain's thinking process for decision-making. Traditional explicit programming does computation with absolute certainties such as `2 + 2 = 4` but computations involved in **image classification**, **speech recognition**, **sentiment classification** are much more likely to be based on probability! In light of this realization, [Warren McCulloch][2] and [Walter Pitts][3] (1943) created a computational model called 'threshold logic' based on statistical learning. Their work evolved eventually and led to the rise of Neural Networks, enabling computers to really think and solve problems that were once thought impossible!

###### Introducing ANN!

The development of ANN have been key to teaching computers to think & understand the world in the way that humans do. Simply put, a neural network is a graph of nodes (**artificial neurons**) which mimic the neurons in a biological brain, connected by weighted edges (**synapses**) as shown below:

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/08/ann.png?ssl=1&w=450)

## How Machines Think!

###### Introducing ANN

An ANN can have multiple layers aka [multilayer perceptron][4] where each one tries to abstract the overall complexity of the previous layer. In the above figure we have an input layer, an output layer & two hidden layers!

Let’s go into detail about some of the components of ANN:

- **Neuron** -- An artificial neuron is a mathematical function that can receive multiple inputs and gives a single output representing the result of the computation
- **Weights** -- All the connections of a neural network is assigned an arbitrary value at the initial stage viz. a weight
- **Propagation Function** -- This function computes the input of a neuron in the next layer based on the outputs of predecessor neurons by leveraging the forward propagation stage of training
- **Learning Rule** -- This function modifies the weights of the connection by leveraging backward propagation stage of training

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/08/learning.gif?ssl=1&w=450)

> For every iteration, a neural network tries to reduce the error in the output by adjusting the weights of each connection by implementing backward propagation in order to attain the optimum solution. This is what we call **learning**!

Now, the bigger & more diverse the data-set is for training a neural network, the better the model becomes in classifications. In case of classification, neural networks are mainly of 4 kinds viz. [Autoencoder][5], [Probabilistic][6], [Time delay][7] & [Convolutional][8].

------------

[1]: https://en.wikipedia.org/wiki/Artificial_neural_network
[2]: https://en.wikipedia.org/wiki/Warren_McCulloch
[3]: https://en.wikipedia.org/wiki/Walter_Pitts
[4]: https://en.wikipedia.org/wiki/Multilayer_perceptron
[5]: https://en.wikipedia.org/wiki/Autoencoder
[6]: https://en.wikipedia.org/wiki/Probabilistic_neural_network
[7]: https://en.wikipedia.org/wiki/Time_delay_neural_network
[8]: https://en.wikipedia.org/wiki/Convolutional_neural_network