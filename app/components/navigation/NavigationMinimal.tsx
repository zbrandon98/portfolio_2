import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core';
import Image from 'next/image';
import selfCartoon from '../../../public/selfCartoon.png'
import { ArchiveIcon, HomeIcon, CodeIcon, EnvelopeClosedIcon, FileTextIcon, StarIcon } from '@radix-ui/react-icons';
import classes from './NavigationMinimal.module.css';


interface NavbarLinkProps {
  icon: typeof HomeIcon;
  label: string;
  link?: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, link, active, onClick,  }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
      <a href={link}>
      </a>
        <Icon style={{ width: rem(20), height: rem(20) }} />
      </UnstyledButton>
    </Tooltip>
  );
}


const ResumeDownloader = async () : Promise<void> => {
  const response = await fetch("ZarateBrandon_resume.pdf");
  const blob = await response.blob();
  const fileURL = window.URL.createObjectURL(blob);
  let alink = document.createElement("a");
  alink.href = fileURL;
  alink.download = "ZarateBrandon_resume.pdf";
  alink.click();
};


const mockdata = [
  { icon: HomeIcon, label: 'Home', link: '#home' },
  { icon: CodeIcon, label: 'Projects', link: '#projects'},
  { icon: StarIcon, label: 'Experience', link: '#experience' },
  { icon: EnvelopeClosedIcon, label: 'Contact', link: '#contact' },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        if (link.link != '/blog'){
          const element = document.querySelector(link.link);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } 
      }}
      link={link.link}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <a href='#home'>
          <Image src={selfCartoon} alt='image' width={30} height={30} onClick={() => {
            setActive(0);
            const element: any = document.querySelector('#home');
            element.scrollIntoView({ behavior: 'smooth' });
          }}>
          </Image>
        </a>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
          <a href='/blog'> <NavbarLink icon={ArchiveIcon}  label='Blog'/></a>

        </Stack>
      </div>
      <Stack justify="center" gap={0}>
        <a href='#contact'><NavbarLink icon={EnvelopeClosedIcon} label='Contact Me!'/></a>
        <NavbarLink icon={FileTextIcon} onClick={ResumeDownloader} label='Resume'/>
      </Stack>
    </nav>
  );
}