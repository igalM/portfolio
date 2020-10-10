import React, { Component } from 'react';
import styles from './App.module.scss';

import CoverPhoto from './assets/cover.png';

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
        demo: 'https://covid-il.herokuapp.com',
      },
      {
        id: 1,
        name: 'Chat Room',
        title: 'This project allows you to communicate with your friends in a real-time chat room.',
        stack: 'React + Hooks, Redux + Saga, NodeJS, MongoDB, Amazon Web Services S3, Socket.IO, TypeScript, Material-UI, Styled Components, Axios, HTML5, SCSS.',
        img: require('./assets/chat-room.png'),
        github: 'https://github.com/igalM/react-burger',
        demo: 'https://igalm.github.io/chat',
      },
      {
        id: 2,
        name: 'Build Your Burger!',
        title: 'This project allows you to customize your own burger and order it.',
        stack: 'React + Hooks, Redux + Saga, TypeScript, Material-UI, Axios, Firebase, Formik, Yup, SCSS.',
        img: require('./assets/burger.png'),
        github: 'https://github.com/igalM/react-burger',
        demo: 'https://burger-builder-7eb09.web.app/',
      },
      {
        id: 3,
        name: 'My School Platform',
        title: 'This project is a small platform for managing students, teachers and courses.',
        stack: 'Angular 9 + Angular Universal SSR, NgRx, RxJS, NodeJS, MongoDB Amazon Web Services S3,  HTML5, SCSS, Angular Material.',
        img: require('./assets/school.png'),
        github: 'https://github.com/igalM/school',
        demo: 'http://angular-school.s3-website.eu-north-1.amazonaws.com',
      },
      {
        id: 4,
        name: 'Weather World',
        title: 'This project allows you to view the current weather anywhere in the world.',
        stack: 'Angular 9, NgRx, RxJS, HTML5, SCSS, Angular Material.',
        img: require('./assets/weather.png'),
        github: 'https://github.com/igalM/weather-app',
        demo: 'http://world-weather.s3-website.eu-north-1.amazonaws.com',
      },
      {
        id: 5,
        name: 'Bring A Friend',
        title: 'This project is a real-time diagram of all the friends you bring, and the commission rate you get from them.',
        stack: 'Angular 9, HTML5, SCSS, Angular Material.',
        img: require('./assets/dinamo.png'),
        github: 'https://github.com/igalM/dinamo',
        demo: 'https://igalm.github.io/dinamo',
      },
      {
        id: 6,
        name: 'News Feed',
        title: `This project shows a list of stories that gratifies one's intellectual curiosity.`,
        stack: 'Angular 9, RxJS, HTML5, SCSS, Angular Material.',
        img: require('./assets/news-feed.png'),
        github: 'https://github.com/igalM/news-feed',
        demo: 'https://igalm.github.io/news-feed',
      },
      {
        id: 7,
        name: 'Have You Been Pwned?',
        title: 'This project shows a list of websites that have been breached.',
        stack: 'Angular 9, RxJS, HTML5, SCSS, Angular Material.',
        img: require('./assets/pwned.png'),
        github: 'https://github.com/igalM/lazy-loading-scroll',
        demo: 'https://igalm.github.io/lazy-loading-scroll',
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
        <img className={styles.Cover} src={CoverPhoto} alt="Project Screenshot" />
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
