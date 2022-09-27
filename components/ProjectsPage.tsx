import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import useHandleInView from '../hooks/useHandleInView';
import { useAtom } from 'jotai';
import {
  atomProjectsInView,
  porjectOneInView,
  porjectTwoInView,
  porjectThreeInView,
  porjectFourInView,
} from '../util/atoms';
import { projectsInfo } from '../util/projectsInfo';
import Project from './Project';

export default function ProjectsPage() {
  const [, setProjectsInView] = useAtom(atomProjectsInView);
  const [one, setOne] = useAtom(porjectOneInView);
  const [two, setTwo] = useAtom(porjectTwoInView);
  const [three, setThree] = useAtom(porjectThreeInView);
  const [four, setFour] = useAtom(porjectFourInView);

  const inViews = [one, two, three, four];

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useHandleInView({ inView, setInView: setProjectsInView });

  return (
    <Element name="scrollToProjects">
      <div
        ref={ref}
        className="h-[calc(100vh-56px)] mx-1 sm:mx-10 min-h-[500px] flex flex-col justify-between items-center"
      >
        <div>
          <p className="pt-2 tracking-[8px] sm:pr-10 text-[#a3a3a3]">
            PROJECTS
          </p>
          <div className="flex w-[140px] justify-between items-center mt-3">
            <button
              className={`${
                one ? 'bg-[#1a1f29]' : 'bg-[#344869]'
              } h-6 w-6 rounded-full relative`}
              onClick={() => {
                setOne(true);
                setTwo(false);
                setThree(false);
                setFour(false);
              }}
            >
              {' '}
              <div
                className={`${
                  one
                    ? 'blur-sm z-0 absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-6 w-full rounded-full'
                    : ''
                } `}
              ></div>
              <div
                className={`${
                  one ? 'bg-[#1a1f29]' : 'bg-[#344869]'
                } absolute z-10 h-6 w-full top-0 left-0 rounded-full`}
              ></div>
            </button>
            <button
              className={`${
                one ? 'bg-[#1a1f29]' : 'bg-[#344869]'
              } h-6 w-6 rounded-full relative`}
              onClick={() => {
                setOne(false);
                setTwo(true);
                setThree(false);
                setFour(false);
              }}
            >
              {' '}
              <div
                className={`${
                  two
                    ? 'blur-sm z-0 absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-6 w-full rounded-full'
                    : ''
                } `}
              ></div>
              <div
                className={`${
                  two ? 'bg-[#1a1f29]' : 'bg-[#344869]'
                } absolute z-10 h-6 w-full top-0 left-0 rounded-full`}
              ></div>
            </button>
            <button
              className={`${
                one ? 'bg-[#1a1f29]' : 'bg-[#344869]'
              } h-6 w-6 rounded-full relative`}
              onClick={() => {
                setOne(false);
                setTwo(false);
                setThree(true);
                setFour(false);
              }}
            >
              {' '}
              <div
                className={`${
                  three
                    ? 'blur-sm z-0 absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-6 w-full rounded-full'
                    : ''
                } `}
              ></div>
              <div
                className={`${
                  three ? 'bg-[#1a1f29]' : 'bg-[#344869]'
                } absolute z-10 h-6 w-full top-0 left-0 rounded-full`}
              ></div>
            </button>
            <button
              className={`${
                one ? 'bg-[#1a1f29]' : 'bg-[#344869]'
              } h-6 w-6 rounded-full relative`}
              onClick={() => {
                setOne(false);
                setTwo(false);
                setThree(false);
                setFour(true);
              }}
            >
              {' '}
              <div
                className={`${
                  four
                    ? 'blur-sm z-0 absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-6 w-full rounded-full'
                    : ''
                } `}
              ></div>
              <div
                className={`${
                  four ? 'bg-[#1a1f29]' : 'bg-[#344869]'
                } absolute z-10 h-6 w-full top-0 left-0 rounded-full`}
              ></div>
            </button>
          </div>
        </div>
        <div className="w-full h-full max-h-[650px] flex items-center justify-center overflow-hidden">
          {projectsInfo.map((projectInfo, index) => (
            <Project
              key={`${projectInfo.projectName}`}
              projectInfo={projectInfo}
              index={index}
              inViewClick={inViews[index]}
            />
          ))}
        </div>
        <div className="w-full"></div>
      </div>
    </Element>
  );
}
