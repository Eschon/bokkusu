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
  if (mode == 'iframe') {
    var iframe = document.createElement('iframe');
    iframe.src = elem;
    iframe.width = options.width;
    iframe.height = options.height;
    iframe.setAttribute('frameBorder', options.frameBorder || '0');
    content.appendChild(iframe);
  }

  if (options.next) {
    var nextButton = document.createElement('span');
    nextButton.textContent = '❯';
    nextButton.classList.add('bokkusu-next-button');
    nextButton.addEventListener('click', function () {
      bokkusu(options.next.url, options.next.options);
    });
    content.appendChild(nextButton);
  }

  if (options.prev) {
    var prevButton = document.createElement('span');
    prevButton.textContent = '❮';
    prevButton.classList.add('bokkusu-prev-button');
    prevButton.addEventListener('click', function () {
      bokkusu(options.prev.url, options.prev.options);
    });
    content.appendChild(prevButton);
  }

  var body = document.getElementsByTagName('body')[0];
  body.appendChild(overlay);

  this.overlay = overlay;
}

Bokkusu.prototype.close = function close() {
  this.overlay.parentNode.removeChild(this.overlay);
};

function Gallery(array, loop) {
  for (var i = 0; i < array.length; i++) {
    if (!array[i].options) array[i].options = {};

    if (i > 0) array[i].options.prev = array[i - 1];else if (loop) array[i].options.prev = array[array.length - 1];

    if (i < array.length - 1) array[i].options.next = array[i + 1];else if (loop) array[i].options.next = array[0];
  }

  return array.map(function (item) {
    return function () {
      return bokkusu(item.url, item.options);
    };
  });
}

exports.Gallery = Gallery;
