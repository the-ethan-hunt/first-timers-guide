###Pytorch is a framework to build and train Neural Network.

It behaves like arrays from Numpy
It provides module that calculates gradients (for backpropogation)
It incorporates Neural Network computations (bunch of operations on tensors :] )

##What are Tensors?
A generalization of matrices. Vector — 1D Tensor, Matrix — 2D Tensor, Array(with 3 indices) — 3D Tensor

##Neural networks with PyTorch

Deep learning networks tend to be massive with dozens or hundreds of layers, that’s where the term “deep” comes from. PyTorch has a nice module nn that provides a nice way to efficiently build large neural networks. Let’s get into it , through an example:
# Import necessary packages
----
%matplotlib inline
%config InlineBackend.figure_format = 'retina'
import numpy as np
import torch
import helper
import matplotlib.pyplot as plt
