// A super-basic example

import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'

const wavesurfer = WaveSurfer.create({
    container: document.body,
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
    url: './src/vox/041023_niigata/EA235321.wav',
})

wavesurfer.once('interaction', () => {
    wavesurfer.play()
})