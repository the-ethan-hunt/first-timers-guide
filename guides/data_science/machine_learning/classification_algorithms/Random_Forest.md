# Random Forest

[**Random Forest**][1] is an [ensemble][2] supervised learning algorithm and capable of performing both regression and classification tasks. The Random Forest Classifier creates a so-called **forest** with a number of [decision trees][3] as shown below:

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/08/random_forest.png?ssl=1&w=450)

## How does Random Forest work?

The Random Forest algorithm uses Bagging (**B**ootstrap **Agg**regat**ing**) for splitting the dataset into chunks so as to fit those with separate decision trees. In case of bagging, we train each decision tree on a different sample of data and also the sampling of dataset happens with replacement. Here, each decision tree acts as a base learner. This results in ensemble learning. The general idea of the ensemble methods is that a combination of learning models increases the overall result.

> **Random Forest Classifier** creates a set of decision trees from the randomly selected subset of a training set. It then aggregates the votes from different decision trees to decide the final class of the test object.

###### Let’s take an example:

Suppose, we have a training dataset : `[X1, X2, X3, … X10]`
Random forest may create three decision trees taking the input from subset using bagging as shown below:

![](https://i1.wp.com/pbiswas101.files.wordpress.com/2018/08/bagging.png?ssl=1&w=450)

Finally, it predicts the outcome based on the majority of votes (in case of classification) or aggregation (in case of regression) from each of the decision trees made!

## Advantages

- Random Forest algorithm avoids overfitting
- The same algorithm can be used for both classification and regression
- Improves feature engineering by identifying the most important features

## Disadvantages of Random Forest

- Difficult to interpret due to the randomness
- Computationally expensive compared to a decision tree

------------

[1]: https://en.wikipedia.org/wiki/Random_forest
[2]: https://en.wikipedia.org/wiki/Ensemble_learning
[3]: https://en.wikipedia.org/wiki/Decision_tree_learning