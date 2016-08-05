# bokkusu-js
Bokkusu is a simple lightbox module using Vanilla JS.

# Installation
You can instal Bokkusu with npm
```
npm install bokkusu-js --save
```

# Usage
For now I have only tested it with webpack and in latest Chrome.
```
import bokkusu from 'bokkusu-js';
import 'bokkusu-js/dist/bokkusu.css';

bokkusu('http://example.com/image.png');
```

# Roadmap for 1.0 release
- [ ] Add support for other content
  - [x] iframe
  - [ ] HTML
- [ ] Browser support
  - [ ] Pick versions to support
  - [ ] Make sure supported versions work
- [ ] make it work in script tag
- [ ] simple gallery function for switching between images
- [ ] add documentation
