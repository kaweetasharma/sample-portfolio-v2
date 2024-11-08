import React from 'react';
import profileImg from '../../assets/profile-img.png';
import './home.css';
import { FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <div className="home__text-content">
            <p className="home__subtitle text-cs">
              Hello, <span> My Name is </span>
            </p>

            <h1 className="home__title text_cs">
              <span>KAVITA</span> SHARMA
            </h1>
            <p className="home__job">
              <span className="text_cs">I AM</span> <b>Web Developer</b>
            </p>

            <p className="home__text">
              I am a passionate web developer specializing in creating beautiful
              and functional digital experiences. I enjoy working on engaging
              interfaces and bringing innovative ideas to life.
            </p>

            <div className="home__btns">
              <a href="/cv.pdf" className="btn text-cs" download>
                Download CV
              </a>
              <a href="#skills" className="hero__link text-cs">
                My Skills
              </a>
            </div>

            <div className="home__socials">
              <a
                href="https://twitter.com"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://dribbble.com"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble />
              </a>
              <a
                href="https://behance.net"
                className="home__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance />
              </a>
            </div>
          </div>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img
                src={profileImg}
                alt="Kavita Sharma"
                className="home__profile"
              />
            </div>
            <div className="home__data-wrapper">
              <p className="home__data home__data-one">
                <span className="text-lg">
                  2<b>+</b>
                </span>
                <span className="text-sm text-cs">
                  Years of <span>Experience</span>
                </span>
              </p>
              <p className="home__data home__data-two">
                <span className="text-lg">
                  10<b>+</b>
                </span>
                <span className="text-sm text-cs">
                  Completed <span>Projects</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
