CNN’s detect features in images and learn how to recognize objects with this information. Layers near the start detecting really simple features like edges and curves, layers in the middle detect a little more complex stuff like quadrilaterals and polygons while layers that are deeper can detect even more complex features like a person's mouth or his/her face. It then uses all this information it learned, to make a final prediction.

So CNN is very good if the image that you want to classify is close to what the CNN was trained on. However, if the image that we want to classify is rotated or skewed then the accuracy of the CNN drops exponentially. This is because of how and what a CNN learns. It learns about the presence of edges and stuff like that. Not how they're spatially arranged. The pooling layer in CNNs is also very inefficient.

So summarising what we've discussed until now:
-There is no spatial information that is used in a CNN
-The pooling function that is used to connect layers, is really really inefficient.

Capsule networks solve this problem by implementing neuron groups that encode spatial information and the probability of an object being there. The length of a capsule vector is the probability of the feature existing in the image and the direction of the vector would represent the pose information.
This is an efficient way to go about the same problems that CNNs solve.

They have achieved state of the art on small scale MNIST dataset. Thus, the deep learning community was really thrilled about capsule nets when they came out.

###Resources

* https://arxiv.org/abs/1710.09829
* https://en.wikipedia.org/wiki/Capsule_neural_network
* https://hackernoon.com/what-is-a-capsnet-or-capsule-network-2bfbe48769cc
* https://towardsdatascience.com/capsule-networks-the-new-deep-learning-network-bd917e6818e8
