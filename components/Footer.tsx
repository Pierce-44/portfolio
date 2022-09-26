import Image from 'next/image';
import Link from 'next/link';
import { scroller } from 'react-scroll';

export default function Footer() {
  const scrollProps = {
    duration: 1500,
    smooth: true,
    offset: -70,
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <button
        className="rotate-180"
        onClick={() => scroller.scrollTo('scrollToHome', scrollProps)}
      >
        <div className="animate-pulse delay-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="15"
            fill="none"
          >
            <path
              d="M20 9 0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z"
              fill="white"
            />
          </svg>
        </div>
        <div className="animate-pulse-delay">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="15"
            fill="none"
          >
            <path
              d="M20 9 0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z"
              fill="white"
            />
          </svg>
        </div>
      </button>
      <p className="text-xs italic text-[#7cb9ff] mt-20">
        Designed & built by Pierce Hahn
      </p>
      <Link href="https://github.com/Pierce-44/portfolio">
        <a target="_blank">
          <div className="mb-1">
            <Image
              src="/images/gitHubWhiteLogo.png"
              alt="github"
              width={71}
              height={30}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
