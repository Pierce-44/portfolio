/* eslint-disable react/no-unescaped-entities */
import '../styles/CoverPage.css';

function CoverPage() {
  return (
    <div className="coverPageBody">
      <div className="nameContainer">
        <div className="consoleLog ">
          <p>{'> console.'}</p>
          <p className="log ">log</p>
          <p>(about)</p>
        </div>
        <div className="nameDiv">
          <p className="">Hi, my name is</p>
          <h1 className="mainHeader">Pierce Hahn.</h1>
          <h2 className="subHeader">
            I'm a self taught Front-End Web Developer with a background in
            mechanical and automotive engineering.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
