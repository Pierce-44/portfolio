/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

import '../styles/Header.css';

function Header() {
  const [headerBackground, setHeaderBackground] = useState(false);
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
  const [burgerMenuOpenClose, setBurgerMenuOpenClose] = useState('');
  const scrollProps = {
    duration: 1500,
    smooth: true,
    offset: -70,
  };

  function handleBurgerMenu() {
    setBurgerMenuStatus(!burgerMenuStatus);
    if (burgerMenuStatus) {
      document.body.style.overflow = 'visible';
      setBurgerMenuOpenClose('burgerMenuContentClose');
    } else {
      document.body.style.overflow = 'hidden';
      setBurgerMenuOpenClose('burgerMenuContentOpen');
    }
  }

  function handleScroll() {
    if (window.pageYOffset > 0) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  }

  function handleScrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToElement(element) {
    scroller.scrollTo(element, scrollProps);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`headerBody ${headerBackground && 'headerBackgroundDark'}`}
      >
        <div className="headerLeft">
          <img
            className="headerLogo"
            src="/images/PH.png"
            alt="home"
            onClick={() => handleScrollToTop()}
          />
        </div>
        <div className="headerRight">
          <div
            className="headerLinks headerAbout"
            onClick={() => scrollToElement('scrollToAbout')}
          >
            <p className="dashWhite">{'<'}</p>
            <p>About</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <div
            className="headerLinks headerProjects"
            onClick={() => scrollToElement('scrollToProjects')}
          >
            <p className="dashWhite">{'<'}</p>
            <p>Projects</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <div
            className="headerLinks headerContact"
            onClick={() => scrollToElement('scrollToContact')}
          >
            <p className="dashWhite">{'<'}</p>
            <p>Contact</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <a
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/CVPH.pdf?alt=media&token=957bd9f5-824a-4442-92d1-54a9cd3e34b8"
            rel="noreferrer"
          >
            {' '}
            <button className="headerCV" type="button">
              Resume/CV
            </button>
          </a>
        </div>
      </div>
      <div className="fixedSideBar">
        <div className="sideBarUpperLine" />
        <div className="sideBarEmail">
          <p>piercehahn.coding@gmail.com</p>
        </div>
        <div className="sideBarIconsContainer">
          <a
            className="sideBarLink"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              title="Linkdin"
              className="sideBarIcon linkdinSideBar"
              src="/images/linkedin.svg"
              alt=""
            />
          </a>
          <a
            className="sideBarLink"
            href="https://github.com/Pierce-44"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <img
              title="GitHub"
              className="sideBarIcon"
              src="/images/GitHubGreen.svg"
              alt=""
            />
          </a>
        </div>

        <div className="sideBarLowerLine" />
      </div>
      <div>
        <div
          className={`blurrContainer ${
            burgerMenuStatus ? 'showBlurr' : 'hideBlurr'
          }`}
        />

        <div className="burgerMenuContainer" onClick={() => handleBurgerMenu()}>
          <div
            className={`burgerMenuUpper ${
              burgerMenuStatus
                ? 'openedBurgerCrossUpper'
                : 'closedBurgerCrossUpper'
            }`}
          />
          <div
            className={`burgerMenuMiddle ${
              burgerMenuStatus
                ? 'openedBurgerCrossMiddle'
                : 'closedBurgerCrossMiddle'
            }`}
          />
          <div
            className={`burgerMenuLower ${
              burgerMenuStatus
                ? 'openedBurgerCrossLower'
                : 'closedBurgerCrossLower'
            }`}
          />
        </div>
        <div className={`burgerMenuContent ${burgerMenuOpenClose}`}>
          <div
            className="burgerLinks"
            onClick={() => {
              scrollToElement('scrollToAbout');
              handleBurgerMenu();
            }}
          >
            <p className="dashWhite">{'<'}</p>
            <p>About</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <div
            className="burgerLinks"
            onClick={() => {
              scrollToElement('scrollToProjects');
              handleBurgerMenu();
            }}
          >
            <p className="dashWhite">{'<'}</p>
            <p>Projects</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <div
            className="burgerLinks"
            onClick={() => {
              scrollToElement('scrollToContact');
              handleBurgerMenu();
            }}
          >
            <p className="dashWhite">{'<'}</p>
            <p>Contact</p>
            <p className="dashWhite">{'/>'}</p>
          </div>
          <a
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/CVPH.pdf?alt=media&token=957bd9f5-824a-4442-92d1-54a9cd3e34b8"
            rel="noreferrer"
          >
            {' '}
            <button className="headerCV burgerButton" type="button">
              Resume/CV
            </button>
          </a>
          <div className="burgerSocials">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.svg" alt="" />
            </a>
            <a
              href="https://github.com/Pierce-44"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/GitHubGreen.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
