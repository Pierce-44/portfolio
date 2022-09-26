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
    <div>
      {inViewClick ? (
        <div ref={ref} className="w-full shrink-0 flex flex-col justify-evenly">
          <div
            className={`${
              projectInView ? '' : 'opacity-0 translate-x-[100px]'
            } transition duration-[500ms]  mx-auto w-[400px] relative z-0`}
          >
            <Image
              src={projectInfo.projectImages[0]}
              alt="monitors"
              width={400}
              height={200}
            />
            <div className="absolute top-[10px] left-[75px] -z-10">
              <Image
                src={projectInfo.projectImages[1]}
                alt="instagram"
                width={210}
                height={125}
              />
            </div>
            <div className="absolute bottom-[20px] left-[30px] -z-10">
              <Image
                src={projectInfo.projectImages[2]}
                alt="instagram"
                width={60}
                height={82}
              />
            </div>
            <div className="absolute bottom-[10px] right-[20px] -z-10">
              <Image
                src={projectInfo.projectImages[3]}
                alt="instagram"
                width={150}
                height={95}
              />
            </div>
            <div className="absolute bottom-[10px] left-[3px] -z-10">
              <Image
                src={projectInfo.projectImages[4]}
                alt="instagram"
                width={30}
                height={65}
              />
            </div>
          </div>
          <p className="mx-auto w-max text-white font-semibold text-2xl py-3">
            Case Study {index + 1} of 4: {projectInfo.projectName}
          </p>
          <div className="max-w-[650px] w-full mx-auto flex items-center justify-between gap-2 pb-1">
            <Link href={projectInfo.gitHubLink}>
              <a target="_blank">
                <div className="animate-pulse flex flex-col items-center justify-center pt-4">
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
                  <p className="text-xs text-[#58a6ff]">GitHub</p>
                </div>
              </a>
            </Link>
            <div className="flex items-center justify-center gap-2 ">
              {projectInfo.builtWith.map((imgSRC, index) => (
                <div
                  key={index}
                  className="bg-[#344869] overflow-hidden h-10 w-10 flex items-center justify-center  rounded-full"
                >
                  <Image src={imgSRC} alt="instagram" width={31} height={31} />
                </div>
              ))}
            </div>
            <Link href={projectInfo.liveLink}>
              <a target="_blank">
                <div className="animate-pulse flex flex-col items-center justify-center pt-4">
                  <button
                    className="bg-[#344869] p-2 rounded-full"
                    onMouseEnter={() => setlinkHover(true)}
                    onMouseLeave={() => setlinkHover(false)}
                  >
                    <svg
                      className="h-5 w-5"
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
          <p className="max-w-[650px] text-sm mx-auto pb-4 text-justify">
            {projectInfo.description}
          </p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
