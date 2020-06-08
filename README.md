

# ScubaHub

ScubaHub website [![Netlify Status](https://api.netlify.com/api/v1/badges/39e37d4a-4f9f-4946-8aeb-b8328b1821cd/deploy-status)](https://app.netlify.com/sites/keen-mayer-a86c8b/deploys)

A sample application to demonstarte the exploration of new frameworks and tools.
ScubaHub demonstrates in a fun & hip way building an end-to-end application with the following:

- Next.JS - Application framework for React
- Contentful - GraphQL Content API
- GraphQL - queries
- Apollo Client - query digest
- Material UI - UI library
- Emotion - Isolated component styling
- Cypress - Integration tests
- Google Maps API - Integration example (without a developer APIKey)

  And most importantly cool information about Scuba Diving, feel free to dive in and explore.<br>
  ​<br>
  <img alt="architecture" width="450px" height="320px" src="https://github.com/ShimiSun/mui-graphql/blob/master/images/architecture.png">

## Installation

`yarn install`

Installs all the dependencies.

### Development

```
yarn dev
```

Runs the app in development mode.<br>
Open http://localhost:3000 to view it on your browser.<br>
​
The page will automatically reload if you make changes to the code.<br>
​

### Tests

```
yarn cypress:open
```

This application is supporting Cypress integration tests, this command will open the tests option click "Run all specs" and see how the application is being tested by visiting the website and ensuring the elemnets and the routing commends are all in place.
​

### Deployment

```
yarn build
```

Builds the app for production to the `.next` folder.
​

### Production

```
yarn start
```

Runs the app in production mode.<br>
