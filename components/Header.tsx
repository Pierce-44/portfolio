import React from 'react';
import { useAtom } from 'jotai';
import { scroller } from 'react-scroll';
import {
  atomAboutInView,
  atomProjectsInView,
  atomSkillsInView,
  atomContactInView,
} from '../util/atoms';
import useCheckHeaderPosition from '../hooks/useCheckHeaderPosition';
import Link from 'next/link';
import BurgerMenu from './BurgerMenu';

export default function Header() {
  const [gitHover, setGitHover] = React.useState(false);
  const [linkHover, setlinkHover] = React.useState(false);
  const [cvHover, setCvHover] = React.useState(false);

  const [aboutInView] = useAtom(atomAboutInView);
  const [projectsInView] = useAtom(atomProjectsInView);
  const [skillsInView] = useAtom(atomSkillsInView);
  const [contactInView] = useAtom(atomContactInView);

  const scrollProps = {
    duration: 1500,
    smooth: true,
    offset: -70,
  };

  const changeBackground = useCheckHeaderPosition();

  return (
    <div
      className={`${
        changeBackground ? 'bg-[#242c3a] shadow-lg' : ''
      } sticky top-0 z-50 overflow-hidden`}
    >
      <div className="py-3 px-3 md:px-8 flex justify-between ">
        <div className="flex items-center gap-4 md:pl-10 animate-leftToRight">
          <Link href="https://github.com/Pierce-44">
            <a target="_blank">
              <button
                className="bg-[#344869] p-2 rounded-full"
                onMouseEnter={() => setGitHover(true)}
                onMouseLeave={() => setGitHover(false)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={gitHover ? '#58a6ff' : '#ffffff'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </button>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/pierce-hahn/">
            <a target="_blank">
              <button
                className="bg-[#344869] p-2 rounded-full"
                onMouseEnter={() => setlinkHover(true)}
                onMouseLeave={() => setlinkHover(false)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={linkHover ? '#58a6ff' : '#ffffff'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </button>
            </a>
          </Link>
          <Link href="https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/CV_PH%20(2).pdf?alt=media&token=b4e72237-9ee5-44f1-b7fd-7687955b501e">
            <a target="_blank">
              <button
                className="bg-[#344869] p-2 rounded-full"
                onMouseEnter={() => setCvHover(true)}
                onMouseLeave={() => setCvHover(false)}
              >
                <svg
                  className={`${
                    cvHover ? 'fill-[#58a6ff]' : 'fill-[#ffffff]'
                  } h-5 w-5`}
                  viewBox="0 0 1000 1000"
                >
                  <g>
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                      <path d="M1719.3,4993.2c-170.4-61.3-302.5-193.4-367.6-361.8c-26.8-72.8-28.7-518.8-24.9-4550.8l5.7-4470.4l51.7-88c67-114.9,199.1-233.6,304.4-273.8c78.5-28.7,329.3-30.6,3338.9-26.8c3097.7,5.7,3258.5,7.7,3317.9,40.2c113,61.3,220.2,174.2,275.7,291l53.6,114.9v3783.1c0,3390.6-3.8,3792.7-30.6,3876.9c-26.8,84.2-101.5,164.6-788.8,848.1c-583.9,578.2-783,763.9-855.8,798.4l-95.7,45.9l-2555.9-1.9C2247.7,5018.1,1778.6,5014.3,1719.3,4993.2z M6626.2,3890.4c0-802.2,3.8-832.8,113-888.3c49.8-26.8,162.7-30.6,796.4-30.6h737.1V-662.3c0-3237.5-3.8-3639.5-30.6-3675.9l-28.7-42.1H4998.8c-2896.7,0-3216.4,3.8-3243.2,30.6c-26.8,26.8-30.6,457.6-30.6,4457c0,4621.7-1.9,4468.5,76.6,4497.2c15.3,5.7,1108.5,11.5,2427.6,11.5l2397,1.9V3890.4z M7564.3,3894.3c273.8-268,497.8-494,497.8-503.5c0-11.5-202.9-15.3-511.2-13.4l-513.1,5.7l-5.7,503.5c-1.9,331.2,1.9,503.5,15.3,497.8C7056.9,4382.5,7290.5,4160.4,7564.3,3894.3z" />
                      <path d="M4462.8,1300.1c-530.3-180-830.9-783-650.9-1303.8c53.6-157,122.5-269.9,245.1-398.2c197.2-206.8,405.9-302.5,664.3-302.5c247,0,522.7,120.6,675.8,294.8c107.2,124.4,68.9,287.2-80.4,336.9c-80.4,26.8-151.3,1.9-241.2-86.1C4826.5-400,4391.9-327.3,4234.9-17.1c-86.2,166.6-95.7,405.9-28.7,605c47.9,135.9,199.1,283.3,333.1,323.5c206.8,61.3,371.4,26.8,534.1-112.9c70.8-61.3,118.7-86.2,157-86.2c124.4,0,206.8,82.3,208.7,206.8c0,99.6-67,180-239.3,281.4C4954.8,1346,4698.3,1380.5,4462.8,1300.1z" />
                      <path d="M5799.1,1248.4c-59.3-45.9-99.6-137.8-86.2-193.4c5.8-21.1,158.9-405.9,342.7-853.9c202.9-499.7,348.4-830.9,377.2-859.6c59.3-59.4,185.7-63.2,256.5-7.7c36.4,28.7,130.2,245.1,386.7,884.5c371.4,928.5,369.5,924.7,256.6,1018.5c-68.9,59.3-155.1,65.1-237.4,15.3c-49.8-30.6-86.2-107.2-285.3-608.8c-124.4-314-233.6-578.2-239.3-585.8C6563,48,6450,306.4,6319.8,628.1c-208.7,516.9-243.1,591.6-294.8,622.2C5948.4,1296.3,5858.5,1296.3,5799.1,1248.4z" />
                      <path d="M2728.2-1527.7c-126.4-51.7-162.7-229.7-67-327.4l55.5-55.5h2280.2h2280.2l59.3,53.6c49.8,44,61.3,68.9,61.3,130.2c0,95.7-47.9,170.4-124.4,197.2C7200.5-1504.7,2789.5-1502.8,2728.2-1527.7z" />
                      <path d="M2670.8-2818.1c-93.8-93.8-86.1-218.2,19.1-302.5c38.3-30.6,187.6-34.5,2310.8-34.5c2247.6,0,2272.5,0,2320.4,38.3c72.7,57.4,99.6,153.2,63.2,235.5c-55.5,137.8,105.3,128.3-2397,128.3H2735.9L2670.8-2818.1z" />
                    </g>
                  </g>
                </svg>
              </button>
            </a>
          </Link>
        </div>
        <div className="hidden sm:flex gap-8 text-xs font-semibold animate-rightToLeft">
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => scroller.scrollTo('scrollToAbout', scrollProps)}
          >
            <div
              className={`${
                aboutInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-[2px] left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                changeBackground ? 'bg-[#242c3a]' : 'bg-[#202733]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              ABOUT
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => scroller.scrollTo('scrollToSkills', scrollProps)}
          >
            <div
              className={`${
                skillsInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-[2px] left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                changeBackground ? 'bg-[#242c3a]' : 'bg-[#202733]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              SKILLS
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => scroller.scrollTo('scrollToProjects', scrollProps)}
          >
            <div
              className={`${
                projectsInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-[2px] left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                changeBackground ? 'bg-[#242c3a]' : 'bg-[#202733]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              PROJECTS
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => scroller.scrollTo('scrollToContact', scrollProps)}
          >
            <div
              className={`${
                contactInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-[2px] left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                changeBackground ? 'bg-[#242c3a]' : 'bg-[#202733]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              CONTACT
            </p>
          </button>
        </div>
        <BurgerMenu />
      </div>
    </div>
  );
}
