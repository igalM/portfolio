import React from 'react';
import styles from './Footer.module.scss';
import FacebookLogo from '../../assets/facebook.svg';
import LinkedinLogo from '../../assets/linkedin.svg';
import GithubLogo from '../../assets/github.svg';


const Footer = () => (
    <div className={styles.Footer}>
        <h1>Get In Touch!</h1>
        <p>054-630-4813</p>
        <p>igalmm@gmail.com</p>
        <div className={styles.Socials}>
            <a href="https://www.facebook.com/igal.mininberg" rel="noopener noreferrer" target="_blank"><img src={FacebookLogo} alt="Facebook logo" /></a>
            <a href="https://www.linkedin.com/in/igal-mininberg/" rel="noopener noreferrer" target="_blank"><img src={LinkedinLogo} alt="Linkedin logo" /></a>
            <a href="https://github.com/igalM" rel="noopener noreferrer" target="_blank"><img src={GithubLogo} alt="Github logo" /></a>
        </div>
    </div>
);

export default Footer;