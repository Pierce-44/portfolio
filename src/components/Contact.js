import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import '../styles/Contact.css';

function Contact() {
  const [inView, setInView] = useState(false);
  const [inViewTwo, setInViewTwo] = useState(false);

  return (
    <Element name="scrollToContact">
      <InView onChange={setInView} threshold={0.1}>
        {({ ref }) => (
          <div ref={ref} className="aboutMeBody">
            <div
              className={`aboutMeContainer ${
                inView ? 'foldInAnimation' : 'foldOutAnimation'
              }`}
            >
              <div
                className={`aboutMeTitle ${inView ? 'bounceAnimation' : ''}`}
              >
                <h2 className="dashWhite">{'<'}</h2>
                <h2 className="greenHighlight">Contact</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
              <div className="aboutMeSubContainer">
                <div className="verticalLine" />
                <InView
                  className="getInTouchContainer"
                  onChange={setInViewTwo}
                  threshold={0.5}
                >
                  <div
                    className={`getInTouch ${
                      inViewTwo ? '' : 'foldOutAnimation'
                    }`}
                  >
                    <p
                      className={`getInTouchSubHeader ${
                        inViewTwo ? 'foldInMinProject' : ''
                      }`}
                    >
                      Reach out to me and
                    </p>
                    <h1
                      className={`getInTouchHeader ${
                        inViewTwo ? 'foldInMinProject' : ''
                      }`}
                    >
                      Get In Touch
                    </h1>
                    <p
                      className={`getInTouchDescription ${
                        inViewTwo ? 'foldInMinProject' : ''
                      }`}
                    >
                      Although I’m not currently looking for any new
                      opportunities, my inbox is always open. Whether you have a
                      question or just want to say hi, I’ll try my best to get
                      back to you!
                    </p>
                    <div
                      className={`contactButton ${
                        inViewTwo ? 'foldInMinProject' : ''
                      }`}
                    >
                      <button
                        className="headerCV"
                        type="button"
                        onClick={(e) => {
                          window.location.href =
                            'mailto:piercehahn.coding@gmail.com';
                          e.preventDefault();
                        }}
                      >
                        Say Hello
                      </button>
                    </div>
                  </div>
                </InView>
              </div>
              <div className="aboutMeTitle">
                <h2 className="dashWhite">{'</'}</h2>
                <h2 className="greenHighlight">Contact</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
            </div>
          </div>
        )}
      </InView>
    </Element>
  );
}

export default Contact;
