import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import qs from './const/qs';

const QBoxs = () => {

  const qsEle = qs.map((Q) =>
    <div className="q-box" id={Q.id + "-box"}>
    <div className="q-vox-outer">
      <div className="q-vox" id={Q.id}></div>

      <div className="q-vox-curtain" id={Q.id + "-curtain"}>
        <img className="q-vox-play" id={Q.id + "-play"} src="./src/img/play.svg" alt="▶"></img>
        <img className="q-vox-play-outline-1" id={Q.id + "-play-outline-1"} src="./src/img/play_outline.svg"></img>
        <img className="q-vox-play-outline-2" id={Q.id + "-play-outline-2"} src="./src/img/play_outline.svg"></img>
      </div>
    </div>

    <div className="q-info">
      <div className="q-title">
        <h2 className="q-name">{Q.name}</h2>
        <h3 className="q-disaster-name">{Q.disasterName}</h3>
      </div>
      <div className="split-line"></div>
        <div className="q-details">
          <p className="q-date">発生日時: {Q.date}</p>
          <p className="q-intensity">最大震度: 震度{Q.intensity}</p>
        </div>
      </div>
    </div>
  )

  return(
    <div>
      {qsEle}
    </div>
  );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QBoxs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
