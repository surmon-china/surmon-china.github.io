// https://github.com/mister-ben/videojs-flvjs/blob/master/src/plugin.js
// https://github.com/videojs/videojs-youtube/blob/main/src/Youtube.js

import flvjs from 'flv.js'
import videojs from 'video.js'

const Html5 = videojs.getTech('Html5')! as any

export class FlvJsTech extends Html5 {
  flvPlayer: flvjs.Player | null = null

  constructor(options: any, ready: any) {
    super(options, ready)
  }

  setSrc(src: string) {
    this.flvPlayer?.detachMediaElement()
    this.flvPlayer?.destroy()
    this.flvPlayer = flvjs.createPlayer({ url: src, type: 'flv' }, this.options_)
    this.flvPlayer.attachMediaElement(this.el_)
    this.flvPlayer.load()
  }

  dispose() {
    this.flvPlayer?.detachMediaElement()
    this.flvPlayer?.destroy()
    super.dispose()
  }

  static formats = {
    'video/flv': 'FLV',
    'video/x-flv': 'FLV'
  }

  static isSupported = function () {
    return flvjs.isSupported()
  }

  static canPlayType = function (type: string) {
    return FlvJsTech.isSupported() && type in FlvJsTech.formats ? 'maybe' : ''
  }

  static canPlaySource = function (source: any) {
    return FlvJsTech.isSupported() && source.src.endsWith('.flv') ? 'maybe' : ''
  }
}
