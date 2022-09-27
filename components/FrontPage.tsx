import Image from 'next/image';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function FrontPage() {
  const [text] = useTypewriter({
    words: [
      'Hi, my name is Pierce Hahn',
      'My passions include...',
      '<CodingLearningBuildingApps/>',
      'Feel free to explore my portfolio',
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 35,
  });

  const { ref } = useInView({
    threshold: 0.65,
  });

  return (
    <Element name="scrollToHome">
      <div
        ref={ref}
        className="overflow-hidden h-[calc(100vh-56px)] min-h-[500px] w-full"
      >
        <div className="h-full w-full flex flex-col items-center justify-center relative">
          <div className="animate-ping-second absolute h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] border rounded-full border-[#8585852c] top-[calc(1/2-200px] left-[calc(1/2-200px)] "></div>
          <div className="relative mt-[50px]">
            <div className="animate-ping-first absolute top-0 left-0 h-[90px] z-0 w-[90px] bg-gradient-to-r from-[#58a6ff] to-[#c258ff] rounded-full blur-sm"></div>
            <div className="h-[90px] relative z-10 w-[90px] flex items-center justify-center rounded-full bg-[#202733]">
              <Image
                className="h-20 w-20 rounded-full bg-[#202733] relative z-10"
                src="/images/myPicture2.png"
                alt="Picture of the author"
                width={80}
                height={80}
                priority
              />
            </div>
          </div>
          <p className="text-xs sm:text-base tracking-[6px] pt-4 text-[#a3a3a3]">
            FRONT END DEVELOPER
          </p>
          <div className="text-md sm:text-3xl font-semibold tracking-wide pt-2">
            <span>{text}</span>
            <Cursor cursorColor="#58a6ff" />
          </div>
        </div>
      </div>
    </Element>
  );
}
