const QBox = () => {

    const v_play = () => {
        alert('hello')
    }

    return (

        <div className="q-box">
        <div className="vox-outer">
            <div className="vox" id="tohokuchiho-taiheiyouoki"></div>

            <div className="vox-curtain" id="tohokuchiho-taiheiyouoki-curtain">
                <button className="play" onClick={v_play}>▶</button>
            </div>
        </div>

        <div className="q-info">
            <div className="q-title">
                <h1 className="q-name">東北地方太平洋沖地震</h1>
                <h2 className="q-disaster-name">東日本大震災</h2>
            </div>
            <div className="split-line"></div>
            <div className="q-details">
                <p className="q-date">発生日時: 2011-03-11</p>
                <p className="q-intensity">最大震度: 震度7</p>
            </div>
        </div>

    </div>
    )
}

export default QBox