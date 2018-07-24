# AutoEncoders

Autoencoders are the Multilayer neural net with target output same as the input. An autoencoder encodes itself. They take some inputs, put them through hidden layer and gives output, but it aims to give the output identical to the input. They are actually self-supervised learning algorithm. 

The Input data gets encoded, and these encoded neurons gets decoded to generate output, this is how training works. 
They work by compressing the input into a latent-space representation, and then reconstructing the output from this representation.

If the input is vector (1,0,0,0) the autoencoder will try to give the same output as vector (1,0,0,0). 
So, if the hidden layer has only 2 neurons, it will encode into 2 features. 

Middle layer is bottleneck –  and number of neurons is much lesser. The small number of neurons need to represent the whole data. 

**USES**
* They can be used for feature detection.
* Used to build recommendation systems
* They can also be Used for encoding.

<img src = "https://www.doc.ic.ac.uk/~js4416/163/website/img/autoencoders/autoencoder.png"/>

[Image Source] - https://www.doc.ic.ac.uk/~js4416/163/website/img/autoencoders/autoencoder.png


Autoencoders are similar to PCA – AE can be used for finding a low-dimensional representation of input data. 

**Autoencoders vs PCA**

Autoencoder works similar to that of a PCA algorithm.

Autoencoder is very flexible since PCA can only represent linear transformations but Autoencoder due to the activation functions (ReLU , tanh, sigmoid) can also deal with nonlinearities. 

### Resources
* http://ufldl.stanford.edu/tutorial/unsupervised/Autoencoders/
* https://towardsdatascience.com/autoencoders-bits-and-bytes-of-deep-learning-eaba376f23ad
* https://probablydance.com/2016/04/30/neural-networks-are-impressively-good-at-compression/