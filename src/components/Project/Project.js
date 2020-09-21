import React from 'react';
import styles from './Project.module.scss';

const Project = props => {

    const classes = [styles.Row];

    if (props.id % 2 === 0) {
        classes.push(styles.Grey);
    } else {
        classes.push(styles.White);
    }

    return (
        <div className={classes.join(' ')}>
            <div className={styles.Container}>
                <img src={props.img} alt="Demo" />
                <div className={styles.Details}>
                    <h2>{props.name}</h2>
                    <p>{props.title}</p>
                    <h4>Technologies Used Here:</h4>
                    <p>{props.stack}</p>
                    <div className={styles.Buttons}>
                        <button onClick={props.clickedGithub}>View Code</button>
                        <button onClick={props.clickedDemo}>View Demo</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Project;