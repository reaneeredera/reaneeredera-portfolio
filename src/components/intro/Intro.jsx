import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/meanne.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="nalla" />
          </div>
        </div>
        <div className="about__content">
          <p>I'm Reanne Eredera from Lianga Surigao Del Sur. I'm a Computer Science student of Nort Eastern Mindanao State University Lianga Campus and a 4rth year student. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro