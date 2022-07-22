const mainProjectsInfo = [
  {
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/netflixFour.mp4?alt=media&token=4b4ce32c-e0d2-4fc7-b019-ae926e008b72',
    type: 'video/mp4',
    projectName: 'Netflix Clone',
    projectDescription:
      'A Netflix clone app that was built with React, Javascript, CSS, and HTML, that utilises FireBase for authentication, and TMDB api to gather movie/series data.',
    projectTechnology: 'React Firebase WEBM-api',
    projectLiveLink: 'https://netflix-clone-model.web.app/',
    projectGitHubLink: 'https://github.com/Pierce-44/netflix-clone',
  },
  {
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/shoppingTwo.mp4?alt=media&token=f9cb85b3-7625-44ef-bbe0-7d0bd1566ad5',
    type: 'video/mp4',
    projectName: 'Shopping Cart',
    projectDescription:
      'A shopping cart app, which was developed using React, Javascript, CSS, and HTML. This app was developed to expand my understanding of React and React page routing options through the React Router Dom package.',
    projectTechnology: 'React Javascript react-router',
    projectLiveLink: 'https://pierce-44.github.io/shopping-cart/',
    projectGitHubLink: 'https://github.com/Pierce-44/shopping-cart',
    orientation: 'projectReversed',
    textAlign: 'textAlignLeft',
    projectCubeOrientation: 'projectCubeTransfromLeft',
    projectCubeOrientationApp: 'projectCubeTransfromAppLeft',
  },
  {
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/waldoTwo.mp4?alt=media&token=c3d5bb4e-20c6-4356-a97a-38cae54526a7',
    type: 'video/mp4',
    projectName: 'Where is Waldo',
    projectDescription:
      'A Where is Waldo app that operates like a photo tagging app, which was developed using React, Javascript, CSS, HTML, and FireBase (Cloud Firestore and hosting).',
    projectTechnology: 'React Javascript Cloud-Firestore',
    projectLiveLink: 'https://where-is-waldo-game.web.app/',
    projectGitHubLink: 'https://github.com/Pierce-44/where-is-waldo',
  },
  {
    videoUrl:
      'https://firebasestorage.googleapis.com/v0/b/porfolio-ph.appspot.com/o/chatApp.mp4?alt=media&token=0fed970f-778f-45b3-94bc-775d6a319f0f',
    type: 'video/mp4',
    projectName: 'Chat App',
    projectDescription:
      'A chat app, which was developed using React, Javascript, CSS, HTML, and FireBase. This app was developed to expand my learning and understanding of Backend-as-a-Service (BaaS) and how FireBase can be used for this',
    projectTechnology: 'React JS Firebase-Authentication',
    projectLiveLink: 'https://chat-app-d85d5.web.app/',
    projectGitHubLink: 'https://github.com/Pierce-44/chat-app',
    orientation: 'projectReversed',
    textAlign: 'textAlignLeft',
    projectCubeOrientation: 'projectCubeTransfromLeft',
    projectCubeOrientationApp: 'projectCubeTransfromAppLeft',
  },
];

const otherProjectsInfo = [
  {
    title: 'Pokemon Memory Game',
    description: 'A Pokemon memory game built using react, test your memory',
    timeDelay: 'timeDelayZero',
    technology: 'React, JS, CSS',
    projectLiveLink: 'https://pierce-44.github.io/memory-card-game/',
    projectGitHubLink: 'https://github.com/Pierce-44/memory-card-game',
  },
  {
    title: 'CV Builder',
    description:
      'App that formats and builds CVs, takes user inputs and ouputs a formatted CV pdf file',
    timeDelay: 'timeDelayPointTwo',
    technology: 'React, JS, CSS',
    projectLiveLink: 'https://pierce-44.github.io/cv-project/',
    projectGitHubLink: 'https://github.com/Pierce-44/cv-project',
  },
  {
    title: 'Battleships App',
    description:
      'A battleship app played against your computer, with intelligent decisions',
    timeDelay: 'timeDelayPointFour',
    technology: 'Webpack, JS, CSS, HTML, Jest',
    projectLiveLink: 'https://pierce-44.github.io/Battleships/',
    projectGitHubLink: 'https://github.com/Pierce-44/Battleships',
  },
  {
    title: 'Weather App',
    description:
      'A weather app that uses openweathermap api data to get live weather updates of cities',
    timeDelay: 'timeDelayZero',
    technology: 'Webpack, JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/Weather-App/',
    projectGitHubLink: 'https://netflix-clone-model.web.app/',
  },
  {
    title: 'Todo List App',
    description:
      'A todo list app that utilses local storage to save users data',
    timeDelay: 'timeDelayPointTwo',
    technology: 'Webpack, JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/To-do-List/',
    projectGitHubLink: 'https://github.com/Pierce-44/To-do-List',
  },
  {
    title: 'Restaurant Homepage',
    description:
      'Practicing DOM manipulation by dynamically rendering a restaurant homepage',
    timeDelay: 'timeDelayPointFour',
    technology: 'Webpack, JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/Restaurant-Webpage/',
    projectGitHubLink: 'https://github.com/Pierce-44/Restaurant-Webpage',
  },
  {
    title: 'Noughts and Crosses',
    description:
      'Building a Noughts and Crosses game that you can be played in your browser',
    timeDelay: 'timeDelayZero',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/Noughts-and-Crosses/',
    projectGitHubLink: 'https://github.com/Pierce-44/Noughts-and-Crosses',
  },
  {
    title: 'Admin Dashboard ',
    description:
      'A basic admin dashboard layout with a focus on CSS grid and grid-template-columns with autofill',
    timeDelay: 'timeDelayPointTwo',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/Admin-Dashboard/',
    projectGitHubLink: 'https://github.com/Pierce-44/Admin-Dashboard',
    foundationProject: 'Foundation Project',
  },
  {
    title: 'Rock Paper Scissors',
    description:
      'A basic Rock Paper Scissors app that can be played against the computer',
    timeDelay: 'timeDelayPointFour',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/rock_paper_scissors/',
    projectGitHubLink: 'https://github.com/Pierce-44/rock_paper_scissors',
    foundationProject: 'Foundation Project',
  },
  {
    title: 'Sign up Form',
    description: 'Building a basic sign up form page based on course learnings',
    timeDelay: 'timeDelayZero',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/Sign-Up-Form/',
    projectGitHubLink: 'https://github.com/Pierce-44/Sign-Up-Form',
    foundationProject: 'Foundation Project',
  },
  {
    title: 'Calculator App',
    description:
      'Building a calculator app to expand on JS,CSS and HTML learning',
    timeDelay: 'timeDelayPointTwo',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/calculator/',
    projectGitHubLink: 'https://github.com/Pierce-44/calculator',
    foundationProject: 'Foundation Project',
  },
  {
    title: 'Etch a Sketch App',
    description:
      'Building an etch a sketch app to expand on JS, CSS and HTML learning',
    timeDelay: 'timeDelayPointFour',
    technology: 'JS, CSS, HTML',
    projectLiveLink: 'https://pierce-44.github.io/etch_a_sketch/',
    projectGitHubLink: 'https://github.com/Pierce-44/etch_a_sketch',
    foundationProject: 'Foundation Project',
  },
];

export { mainProjectsInfo, otherProjectsInfo };
