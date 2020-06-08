import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../utils/apollo-client';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import { AppHeader } from '../components';
import { scubaTheme } from '../theme';

export const Infra = ({ children }) => {
  return (
    <ThemeProvider theme={scubaTheme}>
      <ApolloProvider client={client}>
        <Container>
          <AppHeader />
          {children}
        </Container>
      </ApolloProvider>
    </ThemeProvider>
  );
};

Infra.propTypes = {
  children: PropTypes.node,
};

Infra.defaultProps = {
  children: undefined,
};
