import Image from 'next/image';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import useHandleInView from '../hooks/useHandleInView';
import { skillsImages } from '../util/skillsImages';
import { useAtom } from 'jotai';
import { atomSkillsInView } from '../util/atoms';

export default function SkillsPage() {
  const [, setSkillsInView] = useAtom(atomSkillsInView);

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useHandleInView({ inView, setInView: setSkillsInView });

  return (
    <Element name="scrollToSkills">
      <div
        ref={ref}
        className="h-[calc(100vh-56px)] min-h-[500px] flex flex-col items-center"
      >
        <p className="pt-10 tracking-[8px] text-[#a3a3a3]">SKILLS</p>
        <div className="grid grid-cols-4 gap-4 my-auto">
          {skillsImages.map((src, index) => (
            <div
              key={`skillImg${index}`}
              className={`${
                !inView && index < 8 ? 'opacity-0 translate-x-[100px]' : ''
              } ${
                index > 7 && !inView ? 'opacity-0 -translate-x-[100px]' : ''
              } transition duration-[500ms] h-20 w-20 flex items-center justify-center rounded-full overflow-hidden bg-[#344869] ease-[cubic-bezier(1,-0.01,.72,.71)]`}
            >
              <Image src={src} alt="skill" width={55} height={55} priority />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
