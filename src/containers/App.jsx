import React from 'react';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Container from '../components/Container';
import getData from '../utils/getData';
import ColumnGrid2 from '../components/ColumnGrid2';


const data = getData('https://google.com');
console.log(data) 

const App = () => {
  return (
    <>
      <Header>
        <About />
      </Header>
      <Container>
        <Profile />
        <Experience />
        <ColumnGrid2>
          <Academic />
          <Skills />
        </ColumnGrid2>
        <ColumnGrid2>
          <Interest />
          <Languages />
        </ColumnGrid2>
      </Container>
    </>
  )
};

export default App;
