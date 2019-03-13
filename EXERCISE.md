## REWE Timeslots Exercise

A small React application for displaying and filtering timeslots.

Based on [React](https://reactjs.org/) & [Webpack](https://webpack.js.org/). The tests are using [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/).

For styling, the well-known [Bootstrap CSS](https://getbootstrap.com/docs/3.4/css/) is included, otherwise apply Vanilla CSS.

### Start 

Enter `npm start` to run the app, navigate to `localhost:3000`.

Enter `npm test` to run the test watcher.

### Tasks

Solve 1a) first. All other tasks may be tackled individually.

#### 1) List of slots

a) Display a **plain list** of all timeslots with `startTime`, `endTime`, `zipCode`, formatted `price` (e.g. 1,90 €) 
and `bookable`.

b) **Sort** the list chronologically by startTime.

#### 2) Filtering & Interaction

a) Add an input field where the user can **filter the list by zip code**. Filtering should happen immediately as the user types.

b) Add the possibility to **toggle the bookability** of a slot by clicking on it.

#### 3) Styling

a) Display each slot as a 150 x 50 px sized **rectangular shape** with start & end times and price in it (similar to 
the visualization in our [REWE Shop](https://shop.rewe.de)). **Non-bookable slots** should instead contain a text "Ausgebucht".
The content should be vertically and horizontally centered.

b) **Arrange** the slots **horizontally** (next to each other). Make them break into the next row if the viewport is too narrow.

c) Give each slot a fixed **height based on their duration**. 1hr = 50px.

### Hints

Make use of [date-fns](https://date-fns.org/docs) functions to easier deal with dates and times.

### Methodology

Try to solve the tasks using...

* Pair Programming
* Test-Driven-Development (TDD) - try to follow the ["Red-Green-Refactor" pattern](https://www.codecademy.com/articles/tdd-red-green-refactor)