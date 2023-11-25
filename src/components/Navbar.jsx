import React, { useState, useRef, useEffect } from 'react';
import { links, social } from '../data';
import logo from '../../public/images/brava_logo.png';
import styles from '@/styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {

  const [showLinks ,setShowLinks] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`;
    }else{
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  function toggleMenu() {

    const menuBtn = document.querySelector("#menu-btn");

    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    setShowLinks(!showLinks);
  }

  return <nav className={styles.nav}>
    <div className={styles['nav-center']}>
      <div className={styles['nav-header']}>
        <div className={styles['menu-btn']} onClick={toggleMenu} id='menu-btn'> 
          <div className={`${styles['btn-line']} ${showMenu ? styles['btn-line1'] : ''}`}></div>
          <div className={`${styles['btn-line']} ${showMenu ? styles['btn-line2'] : ''}`}></div>
          <div className={`${styles['btn-line']} ${showMenu ? styles['btn-line3'] : ''}`}></div>
        </div>
        <Image src={logo} alt="logo" className={styles.logo}/>
      </div>
      <span>
      <ul className={styles['social-icons2']}>
          {social.slice(3,social.length).map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return <li key={id}> <a href={url}>{icon}</a> </li>
          })}
      </ul>
      </span>
      <ul className={styles['social-icons3']}>
          {social.slice(4,social.length).map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return <li key={id}> <a href={url}>{icon}</a> </li>
          })}
      </ul>
      <div className={styles['links-container']} ref={linksContainerRef}>
        <ul className={styles.links} ref={linksRef}>
          {links.map((link) => {
            const {id, url, text} = link;
            return <li key={id}> <a href={url}>{text}</a> </li>
          })}
        </ul>
      </div>
      <ul className={styles['social-icons']}>
          <li> <a href='#'>become an affiliate</a> </li>
          {social.map((socialIcon) => {
            const {id, url, icon} = socialIcon;
            return <li key={id}> <a href={url}>{icon}</a> </li>
          })}
      </ul>
    </div>
  </nav>
}

export default Navbar
