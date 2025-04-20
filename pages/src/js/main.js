const qs = [
  {
    id: "tohokuchiho_taiheiyouoki",
    name: "東北地方太平洋沖地震",
    disasterName: "東日本大震災",
    date: "2011-03-11",
    intensity: 7,
    coordinates: [38.1006, 142.8517],
  },
  {
    id: "kumamoto",
    name: "熊本地震",
    disasterName: null,
    date: "2016-04-14",
    intensity: "7",
    coordinates: [32.7806, 130.85],
  },
  {
    id: "hyogo_nanbu",
    name: "兵庫県南部地震",
    disasterName: "阪神淡路大震災",
    date: "1995-1-17",
    intensity: "7",
    coordinates: [34.6083, 135.0361],
  },
  {
    id: "niigata",
    name: "新潟県中越地震",
    disasterName: "新潟県中越大震災",
    date: "2004-10-23",
    intensity: "7",
    coordinates: [37.2847, 138.8667],
  },
  {
    id: "fukushima_oki",
    name: "福島県沖地震",
    disasterName: null,
    date: "2022-03-16",
    intensity: "6強",
    coordinates: [37.6856, 141.6175],
  },
  {
    id: "iwate_miyagi",
    name: "岩手・宮城内陸地震",
    disasterName: null,
    date: "2008-06-14",
    intensity: "6強",
    coordinates: [39.0186, 140.8689],
  },
  {
    id: "tokachioki",
    name: "十勝沖地震",
    disasterName: null,
    date: "2003-9-26",
    intensity: "6弱",
    coordinates: [41.7686, 144.0686],
  },
  {
    id: "fukuoka_hokuseioki",
    name: "福岡県北西沖地震",
    disasterName: null,
    date: "2005-03-20",
    intensity: "6弱",
    coordinates: [33.7342, 130.1681],
  },
];

let epicenterMarker = null;

function setQuakeOnMap([N, E], zoomLevel) {
  if (epicenterMarker !== null) {
    map.removeLayer(epicenterMarker);
  }

  map.setView([N || 37.5, E || 135]);

  epicenterMarker = L.marker([N, E], { icon: red_x }).addTo(map);
}

function play(name) {
  name.playPause();
}

// Map

let map = L.map("map", {
  maxZoom: 7,
  minZoom: 4,
}).setView([37.5, 135], 5);

L.vectorGrid
  .protobuf(
    "https://cyberjapandata.gsi.go.jp/xyz/experimental_bvmap/{z}/{x}/{y}.pbf",
    {
      attribution:
        "<a href='https://github.com/gsi-cyberjapan/gsimaps-vector-experiment' target='_blank'>国土地理院ベクトルタイル提供実験</a>",
      rendererFactory: L.canvas.tile,

      vectorTileLayerStyles: {
        coastline: {
          color: "snow",
          weight: 2,
        },
        waterarea: [],
        road: [],
        railway: [],
        river: [],
        lake: [],
        boundary: [],
        building: [],
        contour: [],
        elevation: [],
        label: [],
        landforma: [],
        landforml: [],
        landformp: [],
        searoute: [],
        structurea: [],
        structurel: [],
        symbol: [],
        transp: [],
        transl: [],
        wstructurea: [],
      },
    },
  )
  .addTo(map);

let red_x = L.icon({
  iconUrl: "./src/img/red_x.svg",

  iconSize: [24, 24], // size of the icon
  iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

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

  waveColor: "rgb(200, 0, 200)",
  progressColor: "rgb(100, 0, 100)",
  cursorColor: "brown",
};

let waveList = [];

qs.forEach((q, i) => {
  document.querySelector(`#${q.id}-box`).addEventListener("mouseover", () => {
    console.log("over");
    setQuakeOnMap(q.coordinates);
  });

  waveList[i] = WaveSurfer.create({
    container: `#${q.id}`,
    url: `./src/vox/${q.id}.wav`,
  });

  const qVoxCurtain = document.querySelector(`#${q.id}-curtain`);
  const qVoxCurtainCSSDisplay = window
    .getComputedStyle(qVoxCurtain)
    .getPropertyValue("display");

  document.querySelector(`#${q.id}-curtain`).addEventListener("click", () => {
    waveList[i].playPause();
    qVoxCurtain.style.display = "none";
  });

  waveList[i].on("finish", () => {
    waveList[i].seekTo(0);
    qVoxCurtain.style.display = qVoxCurtainCSSDisplay;
  });
});

