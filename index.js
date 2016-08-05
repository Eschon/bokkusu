export default function bokkusu(elem, options = {}) {
  return new Bokkusu(elem, options);
}

function Bokkusu(elem, options) {
  const mode = options.mode || 'image';
  const overlay = document.createElement('div');
  const content = document.createElement('div');
  const closeButton = document.createElement('span');

  overlay.classList.add('bokkusu-overlay');
  content.classList.add('bokkusu-content');
  closeButton.classList.add('bokkusu-close-button');

  closeButton.textContent = 'x';

  closeButton.addEventListener('click', this.close.bind(this));
  overlay.addEventListener('click', this.close.bind(this));

  overlay.appendChild(content);
  content.appendChild(closeButton);

  if (mode === 'image') {
    const image = document.createElement('img');
    image.setAttribute('src', elem);
    content.appendChild(image);
  }
  if (mode == 'iframe') {
    const iframe = document.createElement('iframe');
    iframe.src = elem;
    iframe.width = options.width;
    iframe.height = options.height;
    iframe.setAttribute('frameBorder', options.frameBorder || '0');
    content.appendChild(iframe);
  }

  const body = document.getElementsByTagName('body')[0];
  body.appendChild(overlay);

  this.overlay = overlay;
}

Bokkusu.prototype.close = function close() {
  this.overlay.parentNode.removeChild(this.overlay);
}
