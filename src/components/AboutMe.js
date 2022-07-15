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
                        Etiam sit amet mauris vel ipsum sodales vehicula non
                        eget felis. Donec aliquet quam in hendrerit vestibulum.
                        Praesent arcu ante, finibus sit amet mollis fringilla,
                        ornare vitae magna. Maecenas vehicula nec ipsum at
                        maximus. Praesent et erat commodo, malesuada augue sit
                        amet, maximus neque. Sed id tortor non tortor dapibus
                        auctor. Sed porta ex orci, et vulputate mi egestas in.
                        Nullam lacinia dictum elementum. In fermentum diam sed
                        dolor interdum, sed mattis massa efficitur.
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
