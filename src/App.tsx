import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button'

const App = () => (
  <>
    <h2>Buttons</h2>
    <Button bg={"hotpink"} color={"pink"}>Hej, jag tog 8 timmar att fungera, älskar props =D</Button>
    <Button bg={"blue"} color={"white"}>En blå knapp</Button>
    <Button bg={"red"} color={"white"}>En röd knapp</Button>
    <Button bg={"yellow"} color={"black"}>En gul knapp</Button>
  </>
)

export default App;
