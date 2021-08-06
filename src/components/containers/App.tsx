import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../layouts/Layout';
import Router from '../Router';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
