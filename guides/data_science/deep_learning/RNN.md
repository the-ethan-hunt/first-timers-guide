# Recurrent Neural Networks

## What is RNN?

RNN is a supervised deep learning algorithm. They are type of artificial neural network designed to recognize patterns in sequences of data like in words, movies, used for the time series analysis. There is a loop at hidden layer- temporal loop which feeds the input into itself. They have short memory which allows them to store information about the past calculations. It is the first algorithm which remembers its input because of its internal memory which helps it to predict the upcoming outcome.

Like a human brain which remember the things happened in past or previously. RNN try to mimic this by input the data of (t-1) neuron into new neuron at time (t).

When RNN is unrolled it forms a chain like structure. Below image describe both the basic structure of a RNN.

<img src="https://cdn-images-1.medium.com/max/800/0*YNLOjW7YVJarwMD4.png" height ="150" width="500"/>

[Image Source] - https://cdn-images-1.medium.com/max/800/0*YNLOjW7YVJarwMD4.png

## Types of RNN
1. One to One – One input corresponds to one Output. E. g – an **Image classification**
1. One to Many – One input and many output. E. g – **Image captioning** - giving description to an image.
1. Many to One – many input gives one output. E. g – **Sentiment analysis** - where text is classified as positive or negative.
1. Many to Many – many input many output. E. g – **Google translator** - which needs to remember the context of the sentence using the data at (t-1) time.

<img src="https://cdn-images-1.medium.com/max/800/0*0ETid8yQzpp-Wiky.png" height ="150" width="400"/>

[Image Source] - https://cdn-images-1.medium.com/max/800/0*0ETid8yQzpp-Wiky.png

### Why can’t we use Feed Forward Network?
In feed forward Network, the output at time ‘t’ is independent of output at time ‘t-1’ as there is no relation between new output and previous output, whereas in RNN the output at time ‘t-1’ acts as input for output at ‘t’.

E. g when you read a book, you understand it only if you understand the previous words, so the output at previous time is important in RNN. We cannot predict the words using feed forward network because the next word can be predicted only by considering the previous ones.

<img src="https://cdn-images-1.medium.com/max/1920/0*mRHhGAbsKaJPbT21.png" height ="250" width="400"/>

[Image Source] - https://cdn-images-1.medium.com/max/1920/0*mRHhGAbsKaJPbT21.png

### Training a RNN?

It uses **Backpropagation through time (BPTT)** algorithm which is applied to every time stamp. It is very similar to backpropagation algorithm but through time on unrolled RNN. In BPTT the error is back-propagated from last to the first time stamp which allows the algorithm to adjust the weight hence cost function is minimized and output prediction is optimized.


**Resources**
* https://www.analyticsvidhya.com/blog/2017/12/introduction-to-recurrent-neural-networks/
* https://brilliant.org/wiki/recurrent-neural-network/
* https://towardsdatascience.com/recurrent-neural-networks-and-lstm-4b601dd822a5
* https://www.youtube.com/watch?v=y7qrilE-Zlc
