"use client"
import HomePage from './components/home/HomePage';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Transitions from './components/transition/Transition';
import { ScrollArea, AppShell } from '@mantine/core';
import { NavbarMinimal } from './components/navigation/NavigationMinimal';

import  NavBar from './components/navigation/NavBar';
import HomeTwo from './components/home/Home';

export default function Home() {
  return(
    <>
      <AppShell header={{height: 0}} >
        <AppShell.Navbar>
          <Transitions>
            <NavBar/>
          </Transitions>
        </AppShell.Navbar>
      </AppShell>

      <ScrollArea style={{height: '100%'}}>
        <HomeTwo/>
      </ScrollArea>
    </>
  )
}
