# Lab 11 Simple Counter

## Prerequisites
You need to install React to be able to run this application: 'npm i create-react-app'

## Overview
A simple counter application that uses `this.setState` and `this.state` to update and capture the state of a displayed counter each time that a button is clicked.  For example, if the "+" button is clicked, the displayed counter will increment by 1.  If the "-" button is clicked, the counter will decrement by 1.

## Requirements
Create the following components, all within your `app.js` file.

#### `<App>`
* Should contain your `<Counter>` component and should be wrapped in `<React.Fragment>`.  The component heirarchy should looks as follows:

```
<App>
  <Counter>
```

#### `<Counter>`
* Should contain the following state:
```
this.state = {
  count: 0,
};
```
* Should contain a `<p>` element that contains the current number of clicks against your counter.  On initialization, it should start with/display "0".
* Should contain a button that displays a "+" for incrementing the counter.  On click, the `count` property on your state should update/increment by 1 and the `<p>` element referenced above should display the result.
* Should contain a button that displays a "-" for decrementing the counter.  On click, the `count` property on your state should update/decrement by 1 and the `<p>` element referenced above should display the result.

###Time Estimate
Number and name of feature: Simple Counter

Estimate of time needed to complete: 2 hours

Start time: 08:55 AM

Finish time: 09:40 AM

Actual time needed to complete: 45 minutes
