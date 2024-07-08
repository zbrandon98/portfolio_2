"use client"
import    NavBar from './components/navigation/NavBar';
import Projects from './components/projects/Projects';
import Transitions from './components/transition/Transition';
import { ScrollArea, AppShell } from '@mantine/core';

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
        <Transitions>
          <Projects/>
        </Transitions>
      </ScrollArea>
    </>
  )
}
