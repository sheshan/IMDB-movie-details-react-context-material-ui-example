import logo from './logo.svg';
import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import Search from './Search';
import CardList from './card-list'
import {StateProvider} from './childComponentProvider'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg" elevation={5}>
          <Paper elevation={3}>
           <Title/>
           <StateProvider>
            <Search />
        <CardList />
            </StateProvider>
          </ Paper>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
