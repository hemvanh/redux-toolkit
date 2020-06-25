import React from 'react';
import { Container } from 'semantic-ui-react';

import Counter from './Counter';
import IncreButton from './Counter/components/IncreButton';
import CustomIncreButton from './Counter/components/CustomIncreButton';
import DecreButton from './Counter/components/DecreButton';

function App() {
  return (
    <Container>
      <Counter />
      <IncreButton />
      <DecreButton />
      <CustomIncreButton />
    </Container>
  );
}

export default App;
