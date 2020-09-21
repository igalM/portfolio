import React from 'react';
import profilePic from '../../assets/profile-picture.jpg';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.Header}>
        <img className={styles.Profile} src={profilePic} alt="Profile" />
        <h1>Hi, I'm Igal Mininberg. Nice to meet you!</h1>
        <h3>I'm a <span style={{ fontWeight: "bold" }}>Full Stack Web Developer</span> currently looking for my next adventure.</h3>
        <h3>I make sure that my code is efficient and easy to read. I love to expand my knowledge and all I want is to learn more.</h3>
        <h3>Here are some of my recent personal projects.</h3>
        <h3>Check them out!</h3>
    </div>
);

export default Header;