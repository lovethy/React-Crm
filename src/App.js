import React from 'react';
import logo from './logo.svg';
import Customer from './components/Customer';
import './App.css';

const customers = [{
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'Ronaldo',
    'birthday' : '19820501',
    'gender' : 'M',
    'rank' : 'ST'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'Messi',
    'birthday' : '19850122',
    'gender' : 'M',
    'rank' : 'CF'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'Mbape',
    'birthday' : '20000122',
    'gender' : 'M',
    'rank' : 'RW'
  }]

function App() {
  return (
    <div>
      { customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} rank={c.rank} /> ) })
      }
    </div>
  );
}

export default App;
