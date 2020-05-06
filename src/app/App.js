import React from 'react';
import Container from '@material-ui/core/Container';
import SearchAppBar from '../header/Header';
import VerticalLinearStepper from '../stepper/Stepper';
// import Fabs from '../fab/Fab';
import ImageGridList from '../imageGridList/ImageGridList';
import './App.sass';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchAppBar mainTitle = 'Q!' />
        <Container maxWidth="sx">
          <VerticalLinearStepper />
          <ImageGridList />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;