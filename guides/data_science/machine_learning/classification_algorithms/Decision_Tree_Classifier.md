# Decision Tree Classifier

[**Decision Tree Classifier**][1] belongs to the family of supervised learning algorithms. Unlike other supervised learning algorithms, decision tree algorithm can be used for solving both classification problems as well as regression problems too. It uses a **tree-like** model for visually & explicitly representing decisions and decision making!

## how the decision tree looks like!

Let's consider the classic [Titanic Data Set][2] for predicting if a passenger will survive or not! This is a basic example for a model that uses only 3 features from the data set, namely **sex**, **age** & **sibsp** (i.e. no. of siblings or spouses aboard the ship) as shown below:

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/08/tree.png?ssl=1&w=450)

So, a decision tree always exists in an upside-down manner with its root at the top where the black bold text represents a **condition** based on which the tree splits into branches. Now, those branch end which doesn't split anymore tends to provide us with a **decision** (or leaf)! There should be a lot of emphasis on the selection of features as that is what makes a well-structured decision tree.

> This methodology is more commonly known as **learning decision tree from data** and the above tree is called **Classification Tree** as the target is to classify passenger as 'survived' or 'died'.

#### Pros

- Simple to understand, interpret, visualize
- Perform feature selection implicitly
- Can handle multi-output problems

#### Cons

- Can cause [overfitting][3] i.e. creates over-complex trees
- Small variations in the data may generate a completely different tree
- Improper balancing of data set prior to fitting may create biased trees

------------

[1]: https://en.wikipedia.org/wiki/Decision_tree_learning
[2]: https://www.kaggle.com/c/titanic
[3]: https://en.wikipedia.org/wiki/Overfitting