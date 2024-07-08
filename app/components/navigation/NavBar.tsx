import { useState } from 'react';
import classes from './NavBar.module.css';
import { Button } from '@mantine/core';

const ResumeDownloader = async () : Promise<void> => {
    const response = await fetch("ZarateBrandon_resume.pdf");
    const blob = await response.blob();
    const fileURL = window.URL.createObjectURL(blob);
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "ZarateBrandon_resume.pdf";
    alink.click();
  };

const NavBar = () => {
  const [About, setAbout] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Contact, setContact] = useState(false);

  let aboutBodyStyle = About ? classes.aboutBodyShow : classes.aboutBodyHide;
  let aboutBodyText = About ? classes.aboutBodyFadeIn : classes.aboutBodyTextHide;
  let projectsBodyStyle = Projects ? classes.projectsBodyShow : classes.projectsBodyHide;
  let projectBodyText = Projects ? classes.projectsStackContainer : classes.projectsStackContainerHide;
  let contactBodyStyle = Contact ? classes.contactBodyShow : classes.contactBodyHide;
  let contactBodyText = Contact ? classes.contactBodyText : classes.contactBody;


  const handleAboutClick = () => {
    setAbout(!About);
    setProjects(false);
    setContact(false);

  };

  const handleProjectsClick = () => {
    setProjects(!Projects);
    setAbout(false);
    setContact(false);
  };

  const handleContactClick = () => {
    setContact(!Contact);
    setAbout(false);
    setProjects(false);
  };

  return (
    <div className={classes.navbar}>
      <section className={classes.heading}>
        <div className={classes.name}>
            Brandon David Zárate Estrada
        </div>
        <div className={classes.subheading}>
            Software & Web Developer based in CA that enjoys the
            challenge of creating solutions to impactful problems.
        </div>
      </section>

      <section id='about-area' className={classes.about} onMouseOver={handleAboutClick}>
        ABOUT
      </section>
      <section className={aboutBodyStyle}>
        <div  className={aboutBodyText}>
            Hello! My name is Brandon, and I am from a small town called
            Manteca, located in California. I recently graduated with a 
            CS degree from UC Davis. I went into CS because it allows me
            to be creative through problem solving. It&apos;s a process I enjoy
            very much. 
            Besides programming, I enjoy meditating, running with friends,
            and playing Rocket League!
        </div>
        <div className={aboutBodyText}>
            If you want to reach about work or talk about anything, feel free
            to reach out! Contact info is below :)
        </div>
      </section>

      <section className={classes.projects} onMouseOver={handleProjectsClick}>
        PROJECTS
      </section>
      <section id='projects-area' className={projectsBodyStyle}>
        <div className={projectBodyText}>
        <Button variant='transparent'
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500} 
                className={classes.buttonFont}
                component='a'
                href='https://order.thepantry.ucdavis.edu/'
                target='_blank'>
                  THE PANTRY
        </Button>
        <Button variant='transparent'
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500} 
                className={classes.buttonFont}
                component='a'
                href='https://gaming-center.vercel.app/'
                target='_blank'>
                  GAMING HUB
        </Button>
        <Button variant='transparent'
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500} 
                className={classes.buttonFont}
                component='a'
                href='https://github.com/matloff/dsld'
                target='_blank'>
                  DATA SCIENCE LOOKS AT DISCRIMINATION
        </Button>
        <Button variant='transparent'
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500} 
                className={classes.buttonFont}
                component='a'
                href='https://ecocar-demo.streamlit.app/'
                target='_blank'>
                  ECOCAR AUTOMATION
        </Button>
        </div>
      </section>

      <section id='contact-area' className={classes.contact} onMouseOver={handleContactClick}>
        CONTACT
      </section>
      <section className={contactBodyStyle}>
        <div className={contactBodyText}>
            <Button 
                variant='transparent' 
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500}
                component='a'
                href='mailto:zaratebrandon98@gmail.com'
            >
                Email
            </Button>
            <Button 
                variant='transparent' 
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500}
                component='a'
                href='https://github.com/zbrandon98'
                target='_blank'
                >GitHub</Button>
            <Button 
                variant='transparent' 
                justify='flex-start' 
                color='black' size='compact-xs' 
                fw={500}
                component='a'
                href='https://www.linkedin.com/in/bdzarate/'
                target='_blank'
            >
                LinkedIn
            </Button>
            <Button 
                variant='transparent' 
                justify='flex-start' 
                color='black' 
                size='compact-xs' 
                fw={500}
                onClick={ResumeDownloader}
            >
                Resume
            </Button>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
