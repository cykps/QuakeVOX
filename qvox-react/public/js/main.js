const qs = [
    { id: 'tohokuchiho_taiheiyouoki', name: '東北地方太平洋沖地震', disasterName: '東日本大震災', date: '2011-03-11', intensity: 7, coordinates: [38.062, 142.516]},
    { id: 'kumamoto', name: '熊本地震', disasterName: null, date: '2016-04-14', intensity: '7', coordinates: [32.465, 130.510]},
    { id: 'hyogo_nanbu', name: '兵庫県南部地震', disasterName: '阪神淡路大震災', date: '1995-1-17', intensity: '7', coordinates: [34.359, 34.359]},
    { id: 'niigata', name: '新潟県中越地震', disasterName: '新潟県中越大震災', date: '2004-10-23', intensity: '7', coordinates: [37.175, 138.520]},
    { id: 'fukushima_oki', name: '福島県沖地震', disasterName: null, date: '2022-03-16', intensity: '6強', coordinates: [37.418, 141.373]},
    { id: 'iwate_miyagi', name: '岩手・宮城内陸地震', disasterName: null, date: '2008-06-14', intensity: '6強', coordinates: [39.017, 140.528]},
    { id: 'tokachioki', name: '十勝沖地震', disasterName: null, date: '2003-9-26', intensity: '6弱', coordinates: [41.467, 144.047]},
    { id: 'fukuoka_hokuseioki', name: '福岡県北西沖地震', disasterName: null, date: '2005-03-20', intensity: '6弱', coordinates: [33.443, 130.105]},
]

function setQuakeOnMap([N, E], zoomLevel) {
    map.setZoom(zoomLevel || 0);
    map.setView([N || 37.5, E || 135]);

    L.marker([40, 135], {icon: epicenter}).addTo(map);
};

function addEpicenter([N, E], name) {
}

function play(name) {
    name.playPause();
}

// Map

let map = L.map('map', {
    maxZoom: 7,
    minZoom: 4,
}).setView([37.5, 135], 5);

L.vectorGrid.protobuf(
    "https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",
    {
        attribution:"<a href='https://github.com/gsi-cyberjapan/gsimaps-vector-experiment' target='_blank'>国土地理院ベクトルタイル提供実験</a>",
        rendererFactory: L.canvas.tile,

        vectorTileLayerStyles: {
            coastline: {
                color: "snow",
                weight: 1,
            },
            waterarea: [], road: [], railway: [], river: [], lake: [], boundary: [], building: [], contour: [], elevation: [], label: [], landforma: [], landforml: [], landformp: [], searoute: [], structurea: [], structurel: [], symbol: [], transp: [], transl: [], wstructurea: [],
        },
    }
).addTo(map);

let red_x = L.icon({
    iconUrl: './src/img/red_x.svg',

    iconSize:     [30, 30], // size of the icon
    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

epicenter = L.marker([30, 135], {icon: red_x}).addTo(map);



//wave

const wavesurfer_setting = {
        normalize: true,
        splitChannels: true,

        height: "auto",
        fillParent: true,

        cursorWidth: 2,

        barWidth: 1, //NaN
        barGap: 1, //NaN
        barRadius: NaN,
        minPxPerSec: 0,

        waveColor: 'rgb(200, 0, 200)',
        progressColor: 'rgb(100, 0, 100)',
        cursorColor: 'brown', }

waveList = [];

qs.forEach((q, i) => {
    console.log(q.id, `#${q.id}, .q-vox`, `/vox/${q.id}.wav`)
    waveList[i] = WaveSurfer.create({ ...wavesurfer_setting, ...{
        container: `#${q.id}`, url: `/vox/${q.id}.wav`,
    }});
});