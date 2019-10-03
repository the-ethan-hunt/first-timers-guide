CNN’s detect features in images and learn how to recognize objects with this information. Layers near the start detecting really simple features like edges and curves, layers in the middle detect a little more complex stuff like quadrilaterals and polygons while layers that are deeper can detect even more complex features like a person's mouth or his/her face. It then uses all this information it learned, to make a final prediction.
-There is no spatial information that is used in a CNN
-The pooling function that is used to connect layers, is really really inefficient.

Capsule networks solve this problem by implementing neuron groups that encode spatial information and the probability of an object being there. The length of a capsule vector is the probability of the feature existing in the image and the direction of the vector would represent the pose information.
This is an efficient way to go about the same problems that CNNs solve.


###Resources

* https://towardsdatascience.com/capsule-networks-the-new-deep-learning-network-bd917e6818e8
