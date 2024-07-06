import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import Image from 'next/image';
import selfCartoon from '../../../public/selfCartoon.png'
import ResumeDownloader from "../resumeDownloader/ResumeDownloader"


const links = [
  { link: '/#about', label: 'About' },
  { link: '/#projects', label: 'Projects' },
  { link: '/#experience', label: 'Experience' },
  { link: '/#contact', label: 'Contact' },
  { link: '/blog', label: 'Blog'}
];

export default function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <ResumeDownloader></ResumeDownloader>
        <Image src={selfCartoon} alt='image' width={40} height={40}></Image>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}