import React from 'react';
import { Container } from 'semantic-ui-react';

import Counter from './Counter';
import IncreButton from './Counter/components/IncreButton';
import CustomIncreButton from './Counter/components/CustomIncreButton';
import DecreButton from './Counter/components/DecreButton';

import BlogPost from './BlogPost';

function App() {
  return (
    <Container>
      <Counter />
      <IncreButton />
      <DecreButton />
      <CustomIncreButton />
      <BlogPost />
    </Container>
  );
}

export default App;
