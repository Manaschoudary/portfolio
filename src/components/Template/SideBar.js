import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env;
const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/projects/me.png`} alt="" />
      </Link>
      <header>
        <h2>Manas Adusumilli</h2>
        <p>
          <a href="mailto:manas.adusumilli12@gmail.com">manas.adusumilli12@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Manas. I am a{' '}
        <a href="https://www.utdallas.edu/">University of Texas at Dallas</a> graduate,
        Quality-driven software engineer able to drive software lifecycle development, testing,
        CI/CD and production operations. Problem solver adept in building scalable and
        distributed software code to support business needs and customers. Motivated to
        facilitate solutions by collaborating with technical product owners and functional
        stakeholders, using Agile and Pair programming methodologies to support and
        sustain a dynamic, rapid and flexible platform.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
