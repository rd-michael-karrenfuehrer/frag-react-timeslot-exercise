## REWE Timeslots Exercise

A small React application for displaying and filtering timeslots.

Based on [React](https://reactjs.org/) & [Webpack](https://webpack.js.org/). The tests are using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

For styling, the well-known [Bootstrap CSS](https://getbootstrap.com/docs/3.4/css/) is included, otherwise apply Vanilla CSS.

### Start 

Enter `npm start` to run the app, navigate to `localhost:3000`.

Enter `npm test` to run the test watcher.

### Tasks

The following tasks can be tackled indidivually once task 1a) has been solved.

#### 1) List of slots

a) Display a **plain list** of all timeslots with `startTime`, `endTime`, `zipCode`, `price` and `bookable`.

b) **Sort** the list chronologically by date and startTime.

c) **Group** the slot list **by zip code**.

#### 2) Filtering

a) Add an input field where the user can **filter the list by zip code**. Filtering should happen immediately as the user types.

b) Add a checkbox allowing the user to display **only bookable slots**

c) Add an input field where the user can specify the **maximum price** of the slots to be displayed. (Empty = all slots)

#### 3) Styling

a) Display each slot as a 200x80 px sized **rectangular shape** with only start & end time and price in it (similar to the visualization in our [REWE Shop](https://shop.rewe.de)).

b) **Arrange** the slots **horizontally** (next to each other). Make them break into the next row if the viewport is too narrow.

c) Give each slot a fixed **height based on their duration**. 1hr = 100px.

d) Display **non-bookable slots** greyed-out with an "Ausgebucht" text in it.

### Hints

Make use of [date-fns](https://date-fns.org/docs) functions to easier deal with dates and times.

### Methodology

Solve the tasks using...

* 100% Pair Programming
* Test-Driven-Development (TDD) - try to follow the ["Red-Green-Refactor" pattern](https://www.codecademy.com/articles/tdd-red-green-refactor)