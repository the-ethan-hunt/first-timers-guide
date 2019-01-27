# ECMAScript 6

## Introduction

ECMAScript 6 rolled out in 2015. Since it was the first major upgrade from ECMAScript 5, it brought along a lot of 
new and useful features with it. Currently, it isn't supported by a lot of browsers out there, and sometimes a complier 
is needed to translate ES 6 to ES 5.

## New Features

+ `let` and `const`keywords
+ Arrow functions 
... and a lot more.

### `let` and `const` keywords

With the `var` keyword, the enforcement of scopes of variables was pretty loose. For example - 

```
for(var i = 0;i<5;i++)
	console.log(i);

console.log("After the loop, i is", i);
```

Output-

```
0
1
2
3
4
After the loop, i is 5
```
On the other hand, if we try to run the following,

```
for(let i = 0;i<5;i++)
	console.log(i);

console.log("After the loop, i is", i);
```
- we get an error message, since the variable `i` is available only inside the scope of the for loop. Clearly, this makes
debugging a lot easier.

We use `const` when we need to declare a constant whose value we do not want to change during program execution. The common 
convention is to put the names of constants in all uppercase letters with an underscore separating different words. For
example-

```
const ROOT_TWO = 1.414;
```

### Arrow functions

Too often, we require single line functions that are consise and readable. For example - 

This-
```
function sum(a,b){
return a+b;
}

mySum = sum(10,5);
```

- is unncecesarily lengthy for a function whose only job is to sum two numbers. So, now we have - 

```
sum = (a,b) => a+b;

mySum = sum(a,b);
```
However, it is worthwhile mentioning that arrow functions do not support the usage of the `this` keyword; nor can they
be used as constructors. So, they're not suited to replace __all__ ES 5 functions.

