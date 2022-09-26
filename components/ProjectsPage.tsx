import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import useHandleInView from '../hooks/useHandleInView';
import { useAtom } from 'jotai';
import { atomProjectsInView } from '../util/atoms';
import { projectsInfo } from '../util/projectsInfo';
import Project from './Project';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

export default function ProjectsPage() {
  const [, setProjectsInView] = useAtom(atomProjectsInView);

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  const scrollRef = useHorizontalScroll();

  useHandleInView({ inView, setInView: setProjectsInView });

  return (
    <Element name="scrollToProjects">
      <div
        ref={ref}
        className="h-[calc(100vh-56px)] mx-10 min-h-[500px] flex flex-col justify-between items-center"
      >
        <p className="py-5 tracking-[8px] pr-10 text-[#a3a3a3]">PROJECTS</p>
        <div
          ref={scrollRef}
          className="w-full h-full max-h-[650px] flex overflow-auto scrollbar"
        >
          {projectsInfo.map((projectInfo, index) => (
            <Project
              key={`${projectInfo.projectName}`}
              projectInfo={projectInfo}
              index={index}
            />
          ))}
        </div>
        <div className="mb-10 w-full"></div>
      </div>
    </Element>
  );
}
