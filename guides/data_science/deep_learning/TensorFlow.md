# Introduction

[**TensorFlow**][1] is an open source software library for high performance numerical computation & machine learning applications such as [neural networks][2]. Its flexible architecture allows easy deployment of computation across a variety of platforms viz. CPUs, GPUs, TPUs.

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/tfjs.jpg?ssl=1&w=450)

 Originally developed by the [Google Brain][3] team for internal **Google** use, until it was released under the Apache 2.0 open source license on November 9, 2015.

The name "**TensorFlow**" has been adopted based on the multidimensional array ( [*tensors*][4] ) which are useful for data-driven operation such as [Image Processing][5], [Natural Language Processing][6], [Deep Learning][7], etc.

> Google announced dedicated TensorFlow support for both mobile devices as well as web browsers!

- [**TensorFlow Lite**][8], a software stack specifically for Android Development
- [**TensorFlow.js**][9], a library for training and deploying ML models on the web

## TensorFlow Lite

TensorFlow Lite is TensorFlow’s lightweight solution for mobile & embedded devices. It enables on-device machine learning inference with low latency and a small binary size. Here, is the [documentation guide][10]!

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/07/tensorflow-lite.jpg?ssl=1&w=350)

TensorFlow Lite provides an interface to leverage hardware acceleration via the [Android Neural Networks API][11], available on Android 8.1 (Oreo) and higher.

## TensorFlow.js

Tensorflow.js is a JavaScript library for training and deploying ML models in the browser and on Node.js. It is built on top of low level API [deeplearn.js][12]

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/tensorflow-js.png?ssl=1&w=450)

Tensorflow.js enables the following advantage without needing to install additional drivers since it is up & running on the browser:

- Develop ML with JavaScript
- Run Existing Models
- Retrain Existing Models

## Why TensorFlow?

TensorFlow goes deeper than just Deep Learning, it actually support tools for reinforcement learning especially with custom-made TPU. When it comes to compare TensorFlow with other DL frameworks (or libraries) such as [Torch][13], [PyTorch][14], [Theano][15] we have:

#### Pros

- Python, Numpy support
- Good computational graph absraction
- Fast compile times than Theano
- Visualize complex graph, quantitative metrics using Tensorboard
- Extremely popular within the development community as of 2018

#### Cons

- Still slower than other frameworks
- Not enough pre-trained models for practical use
- No commercial backing

###### Open Source. Get Started

TensorFlow is an wonderful library. In order to build awesome models using this library you need to have prior programming experience using **Python**. Check out the [official site][16] & you can also contribute in it's official [GitHub repo][17].

If you are a complete beginner to Machine Learning, feel free to check this [crash course][18]!

###### Research Papers

Here are some of the few research papers based on TensorFlow:

- [TFLMS: Large Model Support in TensorFlow by Graph Rewriting][19]
- [Detection of Alzheimers Disease from MRI using Convolutional Neural Network with Tensorflow][20]
- [Calamari - A High-Performance Tensorflow-based Deep Learning Package for Optical Character Recognition][21]

------------

[1]: https://en.wikipedia.org/wiki/TensorFlow
[2]: https://en.wikipedia.org/wiki/Neural_networks
[3]: https://ai.google/brain-team/
[4]: https://en.wikipedia.org/wiki/Tensor
[5]: https://en.wikipedia.org/wiki/Digital_image_processing
[6]: https://en.wikipedia.org/wiki/Natural_language_processing
[7]: https://en.wikipedia.org/wiki/Deep_learning
[8]: https://www.tensorflow.org/mobile/tflite/
[9]: https://js.tensorflow.org/
[10]: https://github.com/tensorflow/tensorflow/tree/master/tensorflow/contrib/lite
[11]: https://developer.android.com/ndk/guides/neuralnetworks/index.html
[12]: https://i0.wp.com/pbiswas101.files.wordpress.com/2018/07/tensorflow-js.png?ssl=1&w=450
[13]: http://torch.ch/
[14]: https://pytorch.org/
[15]: http://deeplearning.net/software/theano/
[16]: https://www.tensorflow.org/
[17]: https://github.com/tensorflow
[18]: https://developers.google.com/machine-learning/crash-course/ml-intro
[19]: https://arxiv.org/abs/1807.02037
[20]: https://arxiv.org/abs/1806.10170
[21]: https://arxiv.org/abs/1807.02004
