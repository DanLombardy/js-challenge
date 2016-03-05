# JS-Challenge

### Purpose
The purpose of this exercise is for you to demonstrate your ability to create a performant React application that both matches a mock (shown above) in features and functionality. We use this challenge to better understand your coding abilities and determine if you would be a good fit for an in-person interview.

### What we're looking for
- Proficiency in leveraging existing technologies to create a responsive application.
- Ability to use CSS, HTML, and Javascript to match a mock design.
- Logical code architecture and choice of frameworks (within the context of React).

### Challenge
Create a React app that takes the user input with a form and then displays the results in a table. It should meet the following requirements.
- Clicking the +Add button should open a modal window.
- The form should be filled out and submitted from the modal window.
- Upon submission, the table should update itself without needing to reload the page.
- The form & table should have the following fields:
  - `First Name`
  - `Last Name  `
  - `Date of Birth`
  - `Phone Number`
  - `Address`
  - `Notes`

##### Application Mock
![Application Mock](/assets/ContactsKeeper-01.png)

##### Modal Mock
![Modal Mock](/assets/ContactsKeeper-02.png)

### Bonus Points
These are not required, but would be great additions if time permits.
- Implement a method to persist the created data.
- Full-Test Coverage
- Filter the Table Results from the Search
- Add Sortable Columns to the table
- Suggested Technologies (Webpack, React, Redux, React-Router)

### Other
To begin this challenge, please clone this repo and create a Pull Request into the repo when you are finished. You will only have 2 days to complete the challenge, so prioritize accordingly. Please add details for running you app to the `Running My App (README.md)` section below.

### FAQ's
Not all of the images & icons were included, what should I do?
- Any missing assets can be improvised.

The challenge requirements seem vague, am I missing something?
- This prompt is designed to be open-ended, so feel free to be creative in the areas that lack strict guidelines.

# Running My App (README.md)
App requires node package manager (npm).
To run my app go to the terminal and enter:

`npm install`

`npm run start`

#Delete Table Data
The persistent table data is being stored in local storage and there is no delete button at this stage. So, to reset the data, open the browser console and enter:

`localStorage.removeItem('savedTableData')`

