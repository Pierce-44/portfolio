import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import useHandleInView from '../hooks/useHandleInView';

interface Props {
  projectInfo: {
    projectName: string;
    gitHubLink: string;
    liveLink: string;
    description: string;
    projectImages: string[];
    builtWith: string[];
  };
  index: number;
  inViewClick: boolean;
}

export default function Project({ projectInfo, index, inViewClick }: Props) {
  const [projectInView, setProjectInView] = React.useState(false);
  const [gitHover, setGitHover] = React.useState(false);
  const [linkHover, setlinkHover] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useHandleInView({ inView, setInView: setProjectInView });

  return (
    <div
      ref={ref}
      className={`${
        inViewClick ? '' : 'fixed opacity-0'
      } w-full shrink-0 flex flex-col justify-evenly`}
    >
      <div
        className={`${
          projectInView ? '' : 'opacity-0 translate-x-[100px]'
        } transition duration-[500ms]  mx-auto w-[300px] sm:w-[400px] relative z-0`}
      >
        <Image
          src={projectInfo.projectImages[0]}
          alt="monitors"
          width={400}
          height={200}
          priority
        />
        <div className="h-[calc(125px*0.75)] w-[calc(210px*0.75)] sm:h-[125px] sm:w-[210px] absolute top-[10px] left-[55px] sm:left-[75px] -z-10">
          <Image
            src={projectInfo.projectImages[1]}
            alt="instagram"
            width={210}
            height={125}
            priority
          />
        </div>
        <div className="h-[calc(82px*0.75)] w-[calc(60px*0.75)] sm:h-[82px] sm:w-[60px]  absolute sm:bottom-[26px] bottom-[25px] left-[23px] sm:left-[30px] -z-10">
          <Image
            src={projectInfo.projectImages[2]}
            alt="instagram"
            width={60}
            height={82}
            priority
          />
        </div>
        <div className="h-[calc(95px*0.75)] w-[calc(150px*0.75)] sm:h-[95px] sm:w-[150px]  absolute sm:bottom-[16px] right-[15px] bottom-[14px] sm:right-[20px] -z-10">
          <Image
            src={projectInfo.projectImages[3]}
            alt="instagram"
            width={150}
            height={95}
            priority
          />
        </div>
        <div className="h-[calc(65px*0.75)] w-[calc(30px*0.75)] sm:h-[65px] sm:w-[30px]  absolute sm:bottom-[16px] bottom-[14px] rounded-sm overflow-hidden left-[1px] sm:left-[3px] -z-10">
          <Image
            src={projectInfo.projectImages[4]}
            alt="instagram"
            width={30}
            height={65}
            priority
          />
        </div>
      </div>
      <p className="mx-auto w-max text-white font-semibold text-lg sm:text-2xl py-3">
        Case Study {index + 1} of 4: {projectInfo.projectName}
      </p>
      <div className="max-w-[650px] w-full mx-auto flex items-center justify-between gap-2 pb-1">
        <Link href={projectInfo.gitHubLink}>
          <a target="_blank">
            <div className="animate-pulse flex flex-col items-center justify-center pt-4">
              <button
                className="bg-[#344869] p-1 sm:p-2 rounded-full"
                onMouseEnter={() => setGitHover(true)}
                onMouseLeave={() => setGitHover(false)}
              >
                <svg
                  className="sm:h-5 sm:w-5 h-4 w-4"
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
              <p className="text-xs text-[#58a6ff]">GitHub</p>
            </div>
          </a>
        </Link>
        <div className="flex items-center justify-center gap-2 ">
          {projectInfo.builtWith.map((imgSRC, index) => (
            <div
              key={index}
              className="bg-[#344869] overflow-hidden h-6 w-6 sm:h-10 sm:w-10 flex items-center justify-center  rounded-full"
            >
              <Image src={imgSRC} alt="instagram" width={31} height={31} />
            </div>
          ))}
        </div>
        <Link href={projectInfo.liveLink}>
          <a target="_blank">
            <div className="animate-pulse flex flex-col items-center justify-center pt-4">
              <button
                className="bg-[#344869] p-1 sm:p-2 rounded-full"
                onMouseEnter={() => setlinkHover(true)}
                onMouseLeave={() => setlinkHover(false)}
              >
                <svg
                  className="sm:h-5 sm:w-5 h-4 w-4"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={linkHover ? '#58a6ff' : '#ffffff'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
              <p className="text-xs text-[#58a6ff]">Live App</p>
            </div>
          </a>
        </Link>
      </div>
      <p className="max-w-[650px] text-xs sm:text-sm mx-auto pb-4 text-justify">
        {projectInfo.description}
      </p>
    </div>
  );
}
