# Convolutional Neural Networks

### What is CNN?
They are neural networks which are sparsely connected on the input layer in order to avoid overfitting. CNN are used as image classifier and they work on layer basis.

### How computer reads an image?
Every image is read by computer in digits at every pixel, with help of matrix.

Basically There are 3 channels R, G, B. Each layer has its own respective pixel value. Image size is written as **4x4x3** it means there are 4 rows, 4 columns and 3 channels. This is case for colored images, and for black and white images, and is only one 2D matrix. 

<img src="https://xrds.acm.org/blog/wp-content/uploads/2016/06/Figure1.png" height="250" width="400"/>

[Image Source] - https://xrds.acm.org/blog/wp-content/uploads/2016/06/Figure1.png

### Why can’t we use fully connected networks for image classifications?
If an image has 200x200x3 pixels, feeding this image to a fully connected network then the total no. of ways required in first hidden layer is 120,000. So, there is huge parameter and more no. of neurons will be required that can lead to overfitting. That’s why we cannot use fully connected network for image classification. 

### Why we need CNNs?
A neuron in a layer will only be connected to a small region of the layer before it, instead of all the neurons as in fully connected layer. Thus, we need to handle less amount of weights.


## How CNN Works?
Input Image -> CNN -> Classified Image

CNN has following layers:

* Convolutional
* ReLU Layer
* Pooling
* Fully Connected

CNN compares the images piece by piece. The pieces that it looks for are called features.

Feature Detector – usually 3*3 matrix 

**Input image * feature detector = Feature Map**

Feature map is the smaller version of the input image, because it is easy and faster to process the smaller image thus we perform a dot product between our image and filters.

We can take more than one feature detector.


### Convolution Layer

Steps:
1. Line up the feature and the image
1. Multiply each image by corresponding feature pixel
1. Add them up

And now, put the value in the position of that pixel. Similarly move the feature to every position of the image. We will get a matrix, of random decimal numbers. 

<img src= "http://cambridgespark.com/content/tutorials/convolutional-neural-networks-with-keras/figures/convolve.png" height = "200" width ="500"/>

[Image Source] - http://cambridgespark.com/content/tutorials/convolutional-neural-networks-with-keras/figures/convolve.png

### ReLU Layer 

In this layer, we remove the negative values from the filtered images and replaces them with 0.

It is an activation function. It has value 0 until a threshold value doesn’t occur, and after that certain value it shows linear relationship.
This is done to avoid the output 0 during the summation of matrix.

f(x) = 0 if x<0 or x if x>=0

<img src="https://cdn-images-1.medium.com/max/1600/1*6HyqifN4M_bJ7DTJ0RFRJA.jpeg" height="200" width="550"/>

[Image Source] - https://cdn-images-1.medium.com/max/1600/1*6HyqifN4M_bJ7DTJ0RFRJA.jpeg

### Pooling Layer
The use of this layer is to shrink the image into smaller size.

Steps:
1. Pick a window size (usually 2 or 3)
1. Pick a stride – (stride is the distance by which your window moves to another pixel).
1. Walk your window across your filtered images.
1. From each window, take the maximum value.

<img src="https://qph.fs.quoracdn.net/main-qimg-8afedfb2f82f279781bfefa269bc6a90" height="200" width="500"/>

[Image Source] - https://qph.fs.quoracdn.net/main-qimg-8afedfb2f82f279781bfefa269bc6a90

### Fully connected Layer
This is the final layer where the actual classification happens.

We take our filtered and shrinked images and put them into a single list (vector).

There will be some elements which have high values for an IMAGE A and rest of the pixels will be show low values.

For IMAGE B there will be some other pixels which shows high value, and rest will be close to 0.

Thus, using this last vector we can classify whether the new image belong to category A or B by comparing the elements which are high in that vector.

<img src="https://camo.githubusercontent.com/bb218769914fa13c8989675fef0a43eb8c1b1635/687474703a2f2f62726f687265722e6769746875622e696f2f696d616765732f636e6e31332e706e67" height="300" width="400"/> The image is classified as **X** since it has more probability. 

[Image Source] - https://camo.githubusercontent.com/bb218769914fa13c8989675fef0a43eb8c1b1635/687474703a2f2f62726f687265722e6769746875622e696f2f696d616765732f636e6e31332e706e67

**Combining All Layers**
<img src="https://adeshpande3.github.io/assets/Cover.png" />

[Image Source] - https://adeshpande3.github.io/assets/Cover.png