# Regression
Towards **Machine Learning** and **Data Science** *Regression* is the first topic to be ~~learned~~ *Mastered* . In the following we will try to introduce you about Regression and its basic types:
#### What is Regression?
Regression is basically a statistical approach to find the relationship between variables. In machine learning, this is used to predict the outcome of an event based on the relationship between variables obtained from the data-set.
More precisely:
There are two type of variables 
* Dependent variable
* Independent variables

Now we can say that Regression use a linear function to _predict_ the dependent variable.

## Types Of Regression
##### Linear Regression
Linear Regression establishes a relationship between dependent(y) variable and one or more independent variables(x) using a best fit straight line (also known as regression line).
```y = mx + c```
Now we can predict the ```y``` with respect to independent variable ```x```.
It is a **Simple Linear Regression**.
If there are more than one  Independent variables  ```y = x1 +x2 + x3``` then it is called **Multiple Linear Regression**.

##### Polynomial Regression
A regression equation is a polynomial regression equation if the power of independent variable is more than 1. The equation below represents a polynomial equation:
```y = ax + bx^2```
In this type the Best fit line is not a straight line, It is a curve that fit the data-points.

##### Logistic Regression
Logistic regression is used to find the probability of event=Success and event=Failure. We should use logistic regression when the dependent variable is binary (0/ 1, True/ False, Yes/ No) in nature. Here the value of Y ranges from 0 to 1.

##### Stepwise Regression
This form of regression is used when we deal with multiple independent variables. In this technique, the selection of independent variables is done with the help of an automatic process, which involve no human intervention.
The aim of this technique is to maximize the prediction power with minimum number of independent variables. It is one of the method to handle higher dimension data set.


