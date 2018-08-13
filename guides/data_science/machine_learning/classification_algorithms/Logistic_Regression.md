# Logistic Regression

[**Logistic Regression**][1] is a statistical model which identifies itself as one of the most used **Machine Learning** algorithms for binary classification. Despite its name, it is not an algorithm for regression problems i.e. predicting a continuous outcome. Instead, Logistic Regression provides a discrete binary outcome between one thing or another! That's why it falls under the group of the classification algorithm.

## how it works...

Logistic Regression measures the relationship between the dependent variable (**label**) and the one or more independent variables (**features**), by estimating probabilities using its underlying logistic function vis-a-vis sigmoid function.

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/08/sigmoid.png?ssl=1&w=450)

> The Sigmoid-Function is an S-shaped curve that can take any real-valued number and map it into a value between the range of 0 and 1, but never exactly at those limits.

Lastly, these values between 0 and 1 will then be transformed into either 0 or 1 using a threshold classifier.

## when to use it...

Clearly, Logistic Regression isn't the same thing as Linear Regression as the former one provides a discrete outcome whereas the latter one gives a continuous outcome. An example of a continuous outcome would be a model that predicts the value of a house. A discrete outcome will always be one thing (having cancer) or another (not having cancer).

Logistic Regression separates the input space into two regions with a linear boundary; therefore it is required that a given data must be linearly separable as shown below:

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/08/logistic_regression.png?ssl=1&w=450)

In a nutshell, one should think about using logistic regression when the dependent variable aka **label** takes on only two values!

[1]: https://en.wikipedia.org/wiki/Logistic_regression