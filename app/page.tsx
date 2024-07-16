"use client"
import React from 'react';
import NavBar from './components/navigation/NavBar';
import Projects from './components/projects/Projects';
import Transitions from './components/transition/Transition';
import classes from './Home.module.css';

export default function Home() {
  return (
    <>
      <Transitions>
        <div className={classes.wrapper}>
          <NavBar/>
          <Projects/>
        </div>
      </Transitions>
    </>
  );
}
