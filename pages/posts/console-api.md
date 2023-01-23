---
title: 'Console API'
author: 'Alex Merced'
slug: 'something'
category: 'example'
date: '2022-03-13'
socialImage: '/../public/blog/console-api-cover.png'
tags:
  - example
description: Unskippable part of debugging is of course Console API, but the thing is, have you ever checked all possibilities of it?
---

![console api](/blog/console-api-cover.png)

\
Unskippable part of debugging is of course Console API, but the thing is, have you ever checked all possibilities of it? You probably used console.log but there is much more to it that can be helpful in some specific situations where console.log is not enough to solve your problem or find what is causing that one horrible bug.
\
\
The Console API was differently defined for different browsers, and we all want to have some standardisation so here comes the whatwg community(https://console.spec.whatwg.org/). Even though we now have some rules and standardisation, still some browsers have their own implementations of this API for example
Google Chrome DevTools implementation (https://developer.chrome.com/docs/devtools/console/api/).

So let's get into all console API possibilities:

We can start with the Console.table:
Let's say you have a lot of nested objects that you want to display in a human readable manner, you will need to use a table,

Table takes two arguments:

data: a collection of data
properties: an array of objects of the fields you want to use to display the table.

So for example, if have some array with data:

const data = [
{
'id': "01",
'userId': "001",
'Name': "first user",
},
{
'id':"02",
'userId':"002",
'name': "second user",
}
];

So when we run console.table(data) we will get table as you can see below

////////////////

Console.assert

The console.assert is a function that is used to see if the value we are observing is truthy or falsy value. So if the expression is falsy there will be a message displayed, but if it is truthy nothing will be displayed.

Console.count()

Show number of times when specific value was called, so basically it is a counter that increases each time the same label is called.

Then with console.countReset we can reset the counter.

Console.group && Console.groupEnd

In the case of a big number of logs that we want to see, the best choice can be using console.group because this way we can categorise logs by groups and make it more readable.

Console.groupEnd() as the name says it, it is used to close created groups.

Lets look at this example:

console.group("Tree")
console.log("oak tree");
console.log("ginko tree");
console.group("leaves")
console.log("acicular type");
console.log("linear type");
console.log("lanceolate type:");
console.groupEnd()

Or if you type it and run it

Console.dir()

Beside console.log() console.dir function can be the most useful.
There is not much difference between console.log and console.dir in newer JavaScript engines but there is difference when you are using it in Node.js.
This function takes two arguments where one argument is optional.

console.dir(obj[, options]) :
