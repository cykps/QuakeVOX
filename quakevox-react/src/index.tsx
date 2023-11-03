import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import qs from './const/qs';

const QBoxs = () => {

  const qsEle = qs.map((Q) =>
    <div className="q-box">
    <div className="q-vox-outer">
      <div className="q-vox" id={Q.id}></div>

      <div className="q-vox-curtain" id={Q.id + "-curtain"}>
        <button className="play">▶</button>
      </div>
    </div>

    <div className="q-info">
      <div className="q-title">
        <h1 className="q-name">{Q.name}</h1>
        <h2 className="q-disaster-name">{Q.disasterName}</h2>
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
