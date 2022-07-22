import React from 'react';
import s from './App.module.scss';
import {Users} from './components/users/Users';
import {Mentors} from './components/mentors/Mentors';

function App() {
  return (
    <div className={s.container}>
      <Users/>
      <Mentors/>
    </div>
  );
}

export default App;
