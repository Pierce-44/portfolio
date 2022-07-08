import backgroundInfo from './backgroundInfo';
import '../styles/BackgroundAnimation.css';

function BackgroundAnimation() {
  const boxFaces = [
    'frontFace',
    'rightFace',
    'leftFace',
    'topFace',
    'bottomFace',
    'backFace',
  ];

  return (
    <div className="backgroundBody">
      {backgroundInfo.map((info, index) => (
        <div
          className={`cube cubeAnimation${index}`}
          style={{
            animation: `cubeRotate${index} ${info.animationTime} linear infinite`,
            transformOrigin: `0vw 0vw ${info.animationOrigin}`,
          }}
        >
          {boxFaces.map((classId) => (
            <img
              className={`boxFace ${classId}`}
              src={info.url}
              alt=""
              style={{ backgroundColor: info.color }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default BackgroundAnimation;
