import Image from 'next/image';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { atomAboutInView } from '../util/atoms';
import useHandleInView from '../hooks/useHandleInView';

export default function AboutPage() {
  const [, setAboutInView] = useAtom(atomAboutInView);

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useHandleInView({ inView, setInView: setAboutInView });

  return (
    <Element name="scrollToAbout">
      <div
        ref={ref}
        className="h-[calc(100vh-56px)] min-h-[500px] flex flex-col items-center"
      >
        <p className="pt-10 tracking-[8px] text-[#a3a3a3]">ABOUT</p>
        <div className="my-auto flex-col sm:flex-row flex items-center justify-center gap-10 ">
          <div
            className={`${
              inView ? '' : 'opacity-0 -translate-x-[100px]'
            }  transition duration-[500ms] ease-[cubic-bezier(1,-0.01,.72,.71)]`}
          >
            <div className="h-[140px] w-[140px] sm:h-[250px] sm:w-[250px] overflow-hidden rounded-full bg-[#344869]">
              <Image
                src="/images/myPicture2.png"
                alt="Picture of the author"
                width={250}
                height={250}
              />
            </div>
          </div>
          <div className="max-w-[500px] mx-2">
            <p className="py-4 text-white font-semibold text-2xl">
              A little about me
            </p>
            <p className="sm:text-base text-xs text-justify">
              I am a passionate fort-end developer experienced in JavaScript and
              TypeScript-based programming with a strong focus towards
              React/Next.js based projects. My most recent project was
              developing an Instagram TypeScript based clone app that utilises
              Next.js for Static page generation, client-side rendering, dynamic
              page routes, Jotai for React state management, Firebase for the
              database/backend features as well as user authentication.
              Additionally, I have a unique technical background in Mechanical
              (BSc) and Automotive engineering (MSc). All my projects are on
              GitHub, feel free to explore, have a look around, and get in
              touch.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
