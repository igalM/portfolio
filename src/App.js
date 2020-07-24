import React, { Component } from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

class App extends Component {

  state = {
    projects: [
      {
        id: 0,
        name: 'Covid-IL',
        title: 'This project shows real-time statistics of Covid-19 in Israel.',
        stack: 'Angular 9, NgRx, RxJS, NodeJS, Cheerio, Puppeteer, Redis, HTML5, SCSS, Angular Material.',
        img: require('./assets/covid.png'),
        github: 'https://github.com/igalM/covid',
        demo: 'https://covid-il.herokuapp.com/index',
      },
      {
        id: 1,
        name: 'Weather World',
        title: 'This project allows you to view the current weather anywhere in the world.',
        stack: 'Angular 9, NgRx, RxJS, HTML5, SCSS, Angular Material.',
        img: require('./assets/weather.png'),
        github: 'https://github.com/igalM/weather-app',
        demo: 'http://world-weather.s3-website.eu-north-1.amazonaws.com/index',
      },
      {
        id: 2,
        name: 'Bring A Friend',
        title: 'This project is a real-time diagram of all the friends you bring, and the commission rate you get from them.',
        stack: 'Angular 9, HTML5, SCSS, Angular Material.',
        img: require('./assets/dinamo.png'),
        github: 'https://github.com/igalM/dinamo',
        demo: 'https://igalm.github.io/dinamo/index',
      },
      {
        id: 3,
        name: 'My School Platform',
        title: 'This project is a small platform for managing students, teachers and courses.',
        stack: 'Angular 9, NgRx, RxJS, Amazon Web Services S3, NodeJS, HTML5, SCSS, Angular Material.',
        img: require('./assets/school.png'),
        github: 'https://github.com/igalM/school',
        demo: 'http://angular-school.s3-website.eu-north-1.amazonaws.com/index',
      }
    ]
  }

  openGithubHandler = (id) => {
    const link = this.state.projects[id].github;
    window.open(link, '_blank');
  }

  openDemoHandler = (id) => {
    const link = this.state.projects[id].demo;
    window.open(link, '_blank');
  }

  render() {
    return (
      <div className={styles.App} >
        <Header />
        {this.state.projects.map((p, i) => {
          return <Project
            key={i}
            id={p.id}
            name={p.name}
            title={p.title}
            stack={p.stack}
            img={p.img}
            clickedGithub={() => this.openGithubHandler(p.id)}
            clickedDemo={() => this.openDemoHandler(p.id)}
          />
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
