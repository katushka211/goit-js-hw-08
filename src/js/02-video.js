import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
player.on('timeupdate', throttle(onPlayTimeUpdate, 1000));

function onPlayTimeUpdate(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
