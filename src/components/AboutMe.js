import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import backgroundInfo from './backgroundInfo';
import '../styles/AboutMe.css';

function AboutMe() {
  const [inView, setInView] = useState(false);
  const boxFaces = [
    'frontFaceAboutMe',
    'rightFaceAboutMe',
    'leftFaceAboutMe',
    'topFaceAboutMe',
    'bottomFaceAboutMe',
    'backFaceAboutMe',
  ];

  return (
    <Element name="scrollToAbout">
      <InView onChange={setInView} threshold={0.6}>
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
                <h2 className="greenHighlight">About Me</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
              <div className="aboutMeSubContainer">
                <div className="verticalLine" />
                <div className="aboutMeContentContainer">
                  <div className="aboutMeTextImageContainer">
                    <div>
                      <p className="aboutMeText">
                        I am a passionate self-taught fort-end developer
                        experienced in Javascript-based programming with a
                        strong focus towards React based projects. I am working
                        towards becoming a full stack web developer.
                        Additionally, I have a technical background in
                        Mechanical (BSc) and Automotive engineering (MSc).
                        <br />
                        <br />
                        Currently I am studying and learning Next.js, TypeScript
                        and MongoDB through the The Odin Project Full-Stack
                        Javasctipt bootcamp. A few things about me, I can speak
                        Portuguese at a higher intermediate level, and I am
                        working towards becoming fully fluent in the language.
                        Additionaly, in my free time I enjoy playing and
                        learning about chess.
                        <br />
                        <br />
                        All my projects are on GitHub, feel free to explore,
                        have a look around, and get in touch. Below is a list of
                        the current languages and tools that I use:
                      </p>
                      <div className="aboutMeTechnoListBody">
                        <div className="aboutMeTechnoList">
                          {backgroundInfo.slice(0, 5).map((info, index) => (
                            <ul
                              className={`aboutMeTechnoListContent ${
                                inView ? `miniFoldIn${index}` : ''
                              }`}
                            >
                              <img
                                className="aboutMeIcons"
                                src={info.url}
                                alt="JavaScript"
                              />
                              <p>{info.name}</p>
                            </ul>
                          ))}
                        </div>
                        <div className="aboutMeTechnoList">
                          {backgroundInfo.slice(-5).map((info, index) => (
                            <ul
                              className={`aboutMeTechnoListContent ${
                                inView ? `miniFoldIn${index + 5}` : ''
                              }`}
                            >
                              <img
                                className="aboutMeIcons"
                                src={info.url}
                                alt="JavaScript"
                              />
                              <p>{info.name}</p>
                            </ul>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`aboutMeAvatarContainer ${
                        inView ? 'miniFoldInAvatar' : ''
                      }`}
                    >
                      <div className="cubeAboutMe">
                        {boxFaces.map((classId) => (
                          <img
                            className={`boxFaceAboutMe ${classId}`}
                            src="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/avatarBox.jpg?alt=media&token=f099e348-8e24-49a5-a445-3d2d24291efe"
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aboutMeTitle">
                <h2 className="dashWhite">{'</'}</h2>
                <h2 className="greenHighlight">About Me</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
            </div>
          </div>
        )}
      </InView>
    </Element>
  );
}

export default AboutMe;
