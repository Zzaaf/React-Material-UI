import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../header/Header';
import VerticalLinearStepper from '../stepper/Stepper';
import './App.sass';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchAppBar mainTitle = 'Q!' />
        <Container maxWidth="sx">
          <VerticalLinearStepper />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;