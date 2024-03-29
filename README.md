# Cas demo UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) .

This template uses [React Bootsrap](https://react-bootstrap.netlify.com/) as UI framework.

## Prerequisites

1. Install yarn:

  ```bash
  npm install --global yarn
  ```

  NOTE: Why did I decided to change from npm to yarn?  Amplify seems to assume the build tool based on package.json details [see](https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html) , and even if locally I was using npm the build was executing yarn. There were discrepancies observed between yarn and npm builds which were fixed once I completely moved to yarn , no other reason for the move.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## ToDo

- Cypress Component Testing
- https://github.com/toddbluhm/env-cmd
- https://storybook.js.org
- https://reactjs.org/docs/state-and-lifecycle.html

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
