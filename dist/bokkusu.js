'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bokkusu;
function bokkusu(elem) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return new Bokkusu(elem, options);
}

function Bokkusu(elem, options) {
  var mode = options.mode || 'image';
  var overlay = document.createElement('div');
  var content = document.createElement('div');
  var closeButton = document.createElement('span');

  overlay.classList.add('bokkusu-overlay');
  content.classList.add('bokkusu-content');
  closeButton.classList.add('bokkusu-close-button');

  closeButton.textContent = 'x';

  closeButton.addEventListener('click', this.close.bind(this));
  overlay.addEventListener('click', this.close.bind(this));

  overlay.appendChild(content);
  content.appendChild(closeButton);

  if (mode === 'image') {
    var image = document.createElement('img');
    image.setAttribute('src', elem);
    content.appendChild(image);
  }

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(overlay);

  this.overlay = overlay;
}

Bokkusu.prototype.close = function close() {
  this.overlay.parentNode.removeChild(this.overlay);
};
