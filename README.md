# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses TypeScript and Chakra UI.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs everything needed to run the app locally.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notes About Chakra UI

- v2 is only compatible w/ React 18^ but seems like a pretty straightforward upgrade: https://chakra-ui.com/getting-started/migration
- have a lot of components which are really just preset styles - are going to have to decide if we want to truly leverage all of this or rip it off ourselves
- can very easily create custom icons
- no problem w/ types so far

## To Do

- Add react-router with multiple page(s)
- Add a drop down menu to follow the different URLs associated with each character
- Create a series of filters for the cards that display
- Add a functionality to create new characters (which are stored in local state) - and the "add new character" is in a modal/popup
- Add a table with all the info about the characters
- Write a few tests that verify the functionality of the Chakra components
