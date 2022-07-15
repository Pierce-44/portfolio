/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { mainProjectsInfo, otherProjectsInfo } from './projectInfo';
import '../styles/Projects.css';

function Projects() {
  const [inView, setInView] = useState(false);
  const [inViewTwo, setInViewTwo] = useState(false);

  return (
    <Element name="scrollToProjects">
      <InView onChange={setInView} threshold={0}>
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
                <h2 className="greenHighlight">Projects</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
              <div className="aboutMeSubContainer">
                <div className="verticalLine" />
                <div className="projectsContainerBody">
                  {mainProjectsInfo.map((info) => (
                    <ProjectInfo
                      videoUrl={info.videoUrl}
                      type={info.type}
                      projectName={info.projectName}
                      projectDescription={info.projectDescription}
                      projectTechnology={info.projectTechnology}
                      projectLiveLink={info.projectLiveLink}
                      projectGitHubLink={info.projectGitHubLink}
                      orientation={info.orientation}
                      textAlign={info.textAlign}
                      projectCubeOrientation={info.projectCubeOrientation}
                      projectCubeOrientationApp={info.projectCubeOrientationApp}
                    />
                  ))}
                  <div className="otherProjectsBody">
                    <InView onChange={setInViewTwo} threshold={1}>
                      <h2
                        className={`otherProjectsTitle ${
                          inViewTwo ? 'foldInMinProject' : 'foldOutAnimation'
                        }`}
                      >
                        Other Projects
                      </h2>
                    </InView>
                    <ul className="otherProjectsGrid">
                      {otherProjectsInfo.map((info) => (
                        <OtherProject
                          title={info.title}
                          description={info.description}
                          timeDelay={info.timeDelay}
                          technology={info.technology}
                          projectLiveLink={info.projectLiveLink}
                          projectGitHubLink={info.projectGitHubLink}
                          foundationProject={info.foundationProject}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="aboutMeTitle">
                <h2 className="dashWhite">{'</'}</h2>
                <h2 className="greenHighlight">Projects</h2>
                <h2 className="dashWhite">{'>'}</h2>
              </div>
            </div>
          </div>
        )}
      </InView>
    </Element>
  );
}

function ProjectInfo({
  videoUrl,
  projectName,
  projectDescription,
  projectTechnology,
  projectLiveLink,
  projectGitHubLink,
  orientation,
  textAlign,
  projectCubeOrientation,
  projectCubeOrientationApp,
}) {
  const [inViewTwo, setInViewTwo] = useState(false);
  const [curtainStatus, setCurtainStatus] = useState(false);

  const boxFaces = [
    'frontFace',
    'rightFace',
    'leftFace',
    'topFace',
    'bottomFace',
    'backFace',
  ];

  return (
    <InView
      onChange={setInViewTwo}
      threshold={0.5}
      className="projectContainerPerspective"
    >
      <div
        className={`projectContainer ${orientation} ${
          inViewTwo ? 'showProject' : 'foldOutAnimation'
        }`}
      >
        <div className="phoneCurtain" />
        <a
          href={projectLiveLink}
          target="_blank"
          rel="noreferrer"
          className="projectContainerPerspective"
        >
          <div
            className={`videoContainer ${
              inViewTwo ? 'foldInProjectVideo' : ''
            }`}
            onMouseEnter={setCurtainStatus}
            onMouseLeave={() => setCurtainStatus(!curtainStatus)}
          >
            <div className="videoCurtainContainer">
              <div
                className={`videoCurtainUpper ${
                  curtainStatus ? 'openUpperCurtain' : 'closeUpperCurtain'
                }`}
              />
              <div
                className={`videoCurtainLower ${
                  curtainStatus ? 'openLowerCurtain' : 'closeLowerCurtain'
                }`}
              />
            </div>
            <video autoPlay muted loop playsInline className="projectVideo">
              <source src={videoUrl} />
            </video>
          </div>
        </a>
        <div className="projectInfoContainer">
          <div className={`${inViewTwo ? 'foldInMinProject' : ''}`}>
            <p className={`featuredProject ${textAlign}`}>Featured Project</p>
            <h2 className={`projectTitle ${textAlign}`}>{projectName}</h2>
          </div>
          <p
            className={`highlightBox ${textAlign} ${
              inViewTwo ? 'foldInMinProject' : ''
            }`}
          >
            {projectDescription}
          </p>
          <p
            className={`projectTechnologies ${textAlign} ${
              inViewTwo ? 'foldInMinProject' : ''
            }`}
          >
            {projectTechnology}
          </p>
          <div
            className={`projectLinkDiv ${textAlign} ${
              inViewTwo ? 'foldInMinProject' : ''
            }`}
          >
            <a
              href={projectGitHubLink}
              target="_blank"
              rel="noreferrer"
              className="projectCubePerspective"
            >
              <div className={`projectCubeTransfrom ${projectCubeOrientation}`}>
                <div className="projectCube">
                  {boxFaces.map((classId) => (
                    <div className={`boxFace ${classId} boxFaceContainer`}>
                      <img
                        className="boxFaceProject"
                        title="GitHub"
                        src="/images/GitHub.svg"
                        alt="github"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </a>
            <a href={projectLiveLink} target="_blank" rel="noreferrer">
              <div
                className={`projectCubeTransfromApp ${projectCubeOrientationApp}`}
              >
                <div className="projectCube">
                  {boxFaces.map((classId) => (
                    <div className={`boxFace ${classId} boxFaceContainer`}>
                      <img
                        className="boxFaceProject"
                        title="Live App"
                        src="/images/link.svg"
                        alt="live app"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </InView>
  );
}

function OtherProject({
  title,
  description,
  timeDelay,
  technology,
  projectLiveLink,
  projectGitHubLink,
  foundationProject,
}) {
  const [inView, setInView] = useState(false);

  return (
    <InView onChange={setInView} threshold={0.7} className="otherProjectBody">
      <div
        className={`otherProjectContainer otherProject${timeDelay} ${
          inView ? 'foldInMinProject' : 'foldOutMinAnimation'
        }`}
      >
        <div className="otherProjectLinksContainer">
          <a href={projectLiveLink} target="_blank" rel="noreferrer">
            <img
              title="Live App"
              className="otherProjectIcons"
              src="/images/link.svg"
              alt="app"
            />
          </a>
          <a href={projectGitHubLink} target="_blank" rel="noreferrer">
            <img
              title="GitHub"
              className="otherProjectIcons"
              src="/images/GitHub.svg"
              alt="github"
            />
          </a>
        </div>
        <div className="otherProjectInfoContainer">
          <div>
            <p className="foundationProject">{foundationProject}</p>
            <h2 className="otherProjectTitle">{title}</h2>
          </div>
          <p className="otherProjectText">{description}</p>
          <p className="otherProjectTechnology">{technology}</p>
        </div>
      </div>
    </InView>
  );
}

export default Projects;
