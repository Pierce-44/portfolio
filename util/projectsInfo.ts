const projectOne = {
  projectName: 'Instagram Clone',
  gitHubLink: 'https://github.com/Pierce-44/instagram-clone',
  liveLink: 'https://instagram-clone-mu-two.vercel.app/',
  description:
    'An Instagram clone app written in Typescript that utilises Next.js framework, TailwindCSS framework to manage the CSS, Jotai to manage the React state throughout the app, Firebase (BaaS) to handle the database (NoSQL) as well as user authentication and Firestore real-time updates. Upload posts, like and comment on user posts, create chatrooms with other users, and create stories. Additionally receive live updates when other users send you chatroom messages, likes and comments on your posts.',
  projectImages: [
    '/images/monitors.png',
    '/images/portfolioInsta.gif',
    '/images/portfolioInstaMobile.gif',
    '/images/portfolioInstaLaptop.png',
    '/images/portfolioInstaMobile.png',
  ],
  builtWith: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    '/images/jotai.png',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  ],
};

const projectTwo = {
  projectName: 'Netflix Clone',
  gitHubLink: 'https://github.com/Pierce-44/netflix-clone',
  liveLink: 'https://netflix-clone-model.web.app/',
  description:
    'A Netflix clone app that was built with React, Javascript, CSS, and HTML, that utilises FireBase for authentication, and TMDB api to gather movies/series data. Carousel that can infinitely loop through movies without the need to return. When hovering over a movie a pop-up autoplays the YouTube movie trailer as well as displays information related to the movie. Playing a movie opens a separate full screen page that plays the movie (YouTube trailer)',
  projectImages: [
    '/images/monitors.png',
    '/images/netflixMonitor.gif',
    '/images/netflixIpad.png',
    '/images/netflixLaptop.png',
    '/images/netflixMobile.png',
  ],
  builtWith: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  ],
};

const projectThree = {
  projectName: 'Where is Waldo',
  gitHubLink: 'https://github.com/Pierce-44/where-is-waldo',
  liveLink: 'https://where-is-waldo-game.web.app/',
  description:
    'A Where is Waldo app that operates like a photo tagging app, which was developed using React, Javascript CSS, HTML, and FireBase. Selecting a point on the map takes the selected coordinates and checks it against the characters coordinates stored in the Firestore database associated to that map. On successfully finding all characters players can submit their time score to a global leaderboard and therefore see how they rank against others.',
  projectImages: [
    '/images/monitors.png',
    '/images/waldo.gif',
    '/images/waldoIpad.png',
    '/images/waldoLaptop.png',
    '/images/waldoMobile.png',
  ],
  builtWith: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  ],
};

const projectFour = {
  projectName: 'Shopping Cart',
  gitHubLink: 'https://github.com/Pierce-44/shopping-cart',
  liveLink: 'https://pierce-44.github.io/shopping-cart/',
  description:
    'A shopping cart app, which was developed using React, Javascript, and CSS. This app was developed to expand my learning and understanding of React and React page routing options through the React Router Dom package. Utilises React Router Dom package for page routing. A shopping cart that updates values and content on addition and subtraction of items across all pages.',
  projectImages: [
    '/images/monitors.png',
    '/images/cart.gif',
    '/images/cartIpad.png',
    '/images/cartLaptop.png',
    '/images/cartMobile.png',
  ],
  builtWith: [
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  ],
};

export const projectsInfo = [projectOne, projectTwo, projectThree, projectFour];
