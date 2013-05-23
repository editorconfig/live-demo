EditorConfig Live Demo
======================

An in-browser demo of EditorConfig.

Once completed this will use the [EditorConfig JavaScript library][js].

[Node.js][] and [grunt-cli][] are required to modify the CSS or JavaScript.

Development
-----------

First install the dependencies using npm:

    npm install

Everytime you change the SCSS or JavaScript files you will need to rebuild the minified JavaScript and CSS.  Use build the site:

    grunt build

To rebuild the site every time you make a change to a file run the watch daemon:

    grunt dev

[js]: https://github.com/editorconfig/editorconfig-core-js
[node.js]: http://nodejs.org/
[grunt-cli]: http://gruntjs.com/getting-started#installing-the-cli
