# Neural Networks
In order to work with neural networks and deep learning you need a lot of data and processing power.

Neural networks try to mimic how the human brain operates. Each neuron is connected with other neurons forming a web like structure called neural nets.

We create an artificial neural net, where each node represents neurons. There exists Following layers-

* Input Neurons – values that we know about a certain situation.

* Output Neurons – values we want to predict.

* Hidden Layer – Between Input and output there is a hidden layer. All the inputs go through the hidden layer before generating an output. 

This is Artificial neural network.

When lot more hidden layers are added between our data, and we connect each layer with another hidden layer it forms deep neural network. This is what Deep Learning is.

![NeuralNetworks Deep Neural Networks](https://datawarrior.files.wordpress.com/2016/04/slide5.png?w=542)

[Image Source]- https://datawarrior.files.wordpress.com/2016/04/slide5.png?w=542

### Neuron
 Neurons are the cell that carries electrical signal. They help in passing the message in electrical form through large number of neurons forming neural nets.
 
**Parts of a Neuron-**
* Dendrites – Receivers of the signal 
* Axon – Transmitter of signal 
* Synapse – the small space/gap between axon and dendrite. They help in establishing the connection between two neurons.

Single neuron is useless on its own , but when many neurons are connected they are very powerful.

## Activation Function

The main function is to convert the input signal from a node to output, and this output can be used as input to the next layer.

Without using activation function, it would be simply linear. But in deep learning, we have high dimensional, non-linear data. Thus we add activation function to make neural networks more powerful (adds non-linearity).

**Different types of activation functions**

* Sigmoid- f(x) = 1 / 1 + exp(-x)
* Rectifier - R(x) = max(0,x)
* Hyperbolic Tangent (tanh) - f(x) = 1?—?exp(-2x) / 1 + exp(-2x)

**ReLu** is very popular activation function. To read more about Activation Functions visit [here](https://towardsdatascience.com/activation-functions-and-its-types-which-is-better-a9a5310cc8f)


## How do neural networks learn?

Neural networks learn on their own, we don’t have to specify it, to look for the specific features.
Neural Networks learn through a process called **Back-propagation**.

Inputs are passed to the neurons and a corresponding output is generated. It then checks with the actual output, if it is different, it calculates a cost function (which tells the loss, or difference) and send back cost function to the neural network, then the weights of each input gets updated in order to minimize the cost function. It continues to happen until it found perfect weights for the input, which produce correct output and cost function is minimized.

![](https://i.ytimg.com/vi/xaaLmfW5gDs/maxresdefault.jpg)

[Image Source]- https://i.ytimg.com/vi/xaaLmfW5gDs/maxresdefault.jpg

**Some Popular libraries to implement Neural Networks**

1. [TensorFlow](https://www.tensorflow.org/)
1. [Keras](https://keras.io/)
1. [Theano](http://deeplearning.net/software/theano/)
1. [PyTorch](https://pytorch.org/)


