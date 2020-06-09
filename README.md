# ScubaHub

ScubaHub [website](https://vigorous-raman-a8d982.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/93ee2db0-b88e-4608-b627-ff8de134f176/deploy-status)](https://app.netlify.com/sites/vigorous-raman-a8d982/deploys)

A sample application to demonstrate the exploration of new frameworks and tools while maintaining a mobile-first and accessible-inclusive UI according to WCAG 2.0 AA.
ScubaHub demonstrates in a fun & hip way building an end-to-end application with the following:

- Next.JS - Application framework for React
- Contentful - GraphQL Content API
- GraphQL - queries
- Apollo Client - query digest
- Material UI - UI library
- Emotion - Isolated component styling
- Cypress - Integration tests
- Google Maps API - Integration example (without a developer APIKey)
- Netlify - website deployment

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
yarn export
```

Builds a static HTML export of the Next.JS app, the export creates a `out` folder that could be used for production. The Netlify deployment above currently uses this command to create the distribution folder.
​

```
yarn build
```

Builds the app for production and locate the distribution files on `.next` folder.
​

### Production

```
yarn start
```

Runs the app in production mode.<br>
