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

const tokachioki = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#tokachioki', url: './src/vox/030926_tokachioki/D926D621.wav',
}});

const niigata = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#niigata', url: './src/vox/041023_niigata/EA235321.wav',
}});

const fukuoka_hokuseioki = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#fukuoka-hokuseioki', url: './src/vox/050320_fukuoka-hokuseioki/F320EDF1.wav',
}});

const iwate_miyagi = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#iwate-miyagi', url: './src/vox/080614_iwate-miyagi/I6148A61.wav',
}});

const tohokuchiho_taiheiyouoki = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#tohokuchiho-taiheiyouoki', url: './src/vox/110311_tohokuchiho-taiheiyouoki/L3118A41.wav',
}});


const kumamoto = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#kumamoto', url: './src/vox/160414_kumamoto/Q414EEBD.wav',
}});

const fukushima_oki = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#fukushima-oki', url: './src/vox/220316_fukushima-oki/acc20220316000142212.wav',
}});

const hyogo_nanbu = WaveSurfer.create({ ...wavesurfer_setting, ...{
    container: '#hyogo-nanbu', url: './src/vox/950117_hyogo-nanbu/H1171931.wav',
}});

const wave_list = [tohokuchiho_taiheiyouoki, tokachioki, niigata, iwate_miyagi, kumamoto, fukushima_oki, hyogo_nanbu];
