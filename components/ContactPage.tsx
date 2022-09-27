import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useAtom } from 'jotai';
import { atomContactInView } from '../util/atoms';
import useHandleInView from '../hooks/useHandleInView';

export default function ContactPage() {
  const [contactInView, setContactInView] = useAtom(atomContactInView);

  const { ref, inView } = useInView({
    threshold: 0.65,
  });

  useHandleInView({ inView, setInView: setContactInView });

  return (
    <Element name="scrollToContact">
      <div
        ref={ref}
        className="overflow-hidden h-[calc(100vh-56px)] min-h-[500px] flex flex-col items-center"
      >
        <p className="pt-10 tracking-[8px] text-[#a3a3a3]">CONTACT</p>
        <div className="my-auto text-center max-w-[550px]">
          <p className="text-[#7cb9ff]">Reach out to me and</p>
          <p
            className={`${
              contactInView ? '' : 'opacity-0 -translate-x-[100px]'
            } text-white font-semibold text-5xl mt-6 transition duration-[500ms] ease-[cubic-bezier(1,-0.01,.72,.71)]`}
          >
            Get In Touch
          </p>
          <p className="text-sm my-10">
            I am currently looking for front-end job opportunities with a focus
            on React and Typescript/JavaScript, my inbox is always open. Whether
            you have a job opportunity, question or just want to say hi, I will
            get back to you as soon as possible!
          </p>
          <button
            className={`${
              contactInView ? '' : 'opacity-0 translate-x-[100px]'
            } w-32 h-10 relative mt-2 transition duration-[500ms] ease-[cubic-bezier(1,-0.01,.72,.71)]`}
            onClick={(e) => {
              window.location.href = 'mailto:piercehahn.coding@gmail.com';
              e.preventDefault();
            }}
          >
            <div className="blur-sm absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff]  top-0 left-0 h-full w-full rounded-md"></div>
            <div className="hover:text-[#7cb9ff] bg-[#202733] hover:bg-[#1a1f29] flex items-center justify-center h-full w-full rounded-md absolute top-0 left-0">
              <p>Say Hello</p>
            </div>
          </button>
        </div>
      </div>
    </Element>
  );
}
