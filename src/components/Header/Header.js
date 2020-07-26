import React from 'react';
import profilePic from '../../assets/profile-picture.jpg';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.Header}>
        <img className={styles.Profile} src={profilePic} alt="Profile picture" />
        <h1>Hi, I'm Igal Mininberg. Nice to meet you!</h1>
        <h3>I'm a <span style={{ fontWeight: "bold" }}>Full Stack Web Developer</span> currently looking for my next adventure.</h3>
        <h3>I write beautiful code, I love what I do and all I want is to learn more.</h3>
        <h3>Here are a few of my recent personal projects.</h3>
        <h3>Check them out!</h3>
    </div>
);

export default Header;