import React from 'react';
import handleBurgerMenu from '../util/handleBurgerMenu';
import { useAtom } from 'jotai';
import { scroller } from 'react-scroll';
import {
  atomAboutInView,
  atomProjectsInView,
  atomSkillsInView,
  atomContactInView,
} from '../util/atoms';

export default function BurgerMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [aboutInView] = useAtom(atomAboutInView);
  const [projectsInView] = useAtom(atomProjectsInView);
  const [skillsInView] = useAtom(atomSkillsInView);
  const [contactInView] = useAtom(atomContactInView);

  const scrollProps = {
    duration: 1500,
    smooth: true,
    offset: -70,
  };

  return (
    <div className="sm:hidden">
      <button
        className="flex relative z-50 flex-col items-center justify-center"
        onClick={() => handleBurgerMenu({ menuOpen, setMenuOpen })}
      >
        <div
          className={`${
            menuOpen ? 'rotate-45 translate-y-3 bg-white' : ''
          } transition duration-[500ms] w-10 h-1 my-1 bg-[#58a6ff]`}
        ></div>
        <div
          className={`${
            menuOpen ? 'opacity-0 translate-x-[100px]' : ''
          } transition duration-[500ms] w-10 h-1 my-1 bg-[#58a6ff]`}
        ></div>
        <div
          className={`${
            menuOpen ? '-rotate-45 -translate-y-3 bg-white' : ''
          } transition duration-[500ms] w-10 h-1 my-1 bg-[#58a6ff]`}
        ></div>
      </button>
      {menuOpen ? (
        <div className="fixed top-0 left-0 w-screen h-screen z-20 backdrop-blur-sm"></div>
      ) : (
        ''
      )}
      <div
        className={`${
          menuOpen ? 'translate-x-0' : 'translate-x-[350px]'
        } transition duration-[500ms] fixed max-w-[350px] w-full z-40 h-screen top-0 right-0 bg-[#344869]`}
      >
        <div className="flex h-full items-center justify-center flex-col gap-8 text-xs font-semibold animate-rightToLeft">
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => {
              scroller.scrollTo('scrollToAbout', scrollProps);
              handleBurgerMenu({ menuOpen, setMenuOpen });
            }}
          >
            <div
              className={`${
                aboutInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                aboutInView ? 'bg-[#242c3a]' : 'bg-[#344869]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              ABOUT
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => {
              scroller.scrollTo('scrollToSkills', scrollProps);
              handleBurgerMenu({ menuOpen, setMenuOpen });
            }}
          >
            <div
              className={`${
                skillsInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                skillsInView ? 'bg-[#242c3a]' : 'bg-[#344869]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              SKILLS
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => {
              scroller.scrollTo('scrollToProjects', scrollProps);
              handleBurgerMenu({ menuOpen, setMenuOpen });
            }}
          >
            <div
              className={`${
                projectsInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                projectsInView ? 'bg-[#242c3a]' : 'bg-[#344869]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              PROJECTS
            </p>
          </button>
          <button
            className="flex items-center  relative z-10 group hover:text-[#7cb9ff]"
            onClick={() => {
              scroller.scrollTo('scrollToContact', scrollProps);
              handleBurgerMenu({ menuOpen, setMenuOpen });
            }}
          >
            <div
              className={`${
                contactInView ? 'blur-sm' : ''
              } absolute bg-gradient-to-r from-[#58a6ff] to-[#c258ff] group-hover:blur-sm top-0 left-0 h-8 w-full rounded-lg`}
            ></div>
            <p
              className={`${
                contactInView ? 'bg-[#242c3a]' : 'bg-[#344869]'
              } p-2 hover:bg-[#1a1f29] z-10 rounded-md`}
            >
              CONTACT
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
