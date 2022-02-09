import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import clsx from 'clsx';
import { MultiSelect, Modal, Chip, Chips } from '@mantine/core';
import Button from '../../shared/Button/Button';

const Sidebar = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  const categories = ['2v2', '1v1', 'Crew battle', 'Top rock'];
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.navbarLeft}>
        <Link href='/' passHref>
          <div className={styles.logoContainer}>BBOYAPP</div>
        </Link>
        {/* <button
          className={styles.filtersButton}
          onClick={() => setOpened(true)}>
          <img className={styles.filtersImage} src={'/filter_white.png'} />
          Filters
        </button> */}
      </div>
      <Modal
        size={550}
        centered
        opened={opened}
        onClose={() => setOpened(false)}>
        <div className={styles.modalContent}>
          <h1>Event categories</h1>
          <Chips multiple>
            <Chip value='1vs1'>1vs1</Chip>
            <Chip value='2vs2'>2vs2</Chip>
            <Chip value='Crew battle'>Crew battle</Chip>
            <Chip value='Top Rock'>Top Rock</Chip>
            <Chip value='All styles'>All styles</Chip>
          </Chips>
          <button className={styles.blueButton}>Search events</button>
        </div>
      </Modal>

      <ul className={styles.menuList}>
        <Link href='/' passHref>
          <a
            className={clsx(styles.link, {
              [styles.linkActive]: router.pathname === '/',
            })}>
            Events
          </a>
        </Link>

        <li>
          <a className={styles.link}>Account</a>
        </li>

        <li>
          <Link href='/add-event' passHref>
            <Button text={'Add event'} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
