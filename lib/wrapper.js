'use strict';

// Less 'CSS' wrapper for SocketStream 0.3

var fs = require('fs'),
    less = require('less'),
    _prependedLess;

exports.prependLess = function(prependedLess) {
    if(typeof prependedLess === 'string') {
        _prependedLess = prependedLess;
    }
};

// root and config are passed as arguments, but are not used
//
exports.init = function () {

    return {

        name: 'Less',

        extensions: ['less'],

        assetType: 'css',

        contentType: 'text/css',

        compile: function(path, options, cb) {

            // Get dir from path to enable @include commmand
            var dir = path.split('/'); { dir.pop(); }

            var input = fs.readFileSync(path, 'utf8');

            var compress = options && options.compress;

            var parser = new(less.Parser)({paths: [dir.join('/')], filename: path});

            if(_prependedLess) {
                input = _prependedLess + '\n' + input;
            }

            parser.parse(input, function(err, tree) {
                if (err) {
                    console.log('! - Unable to compile Less file %s into CSS', path);
                    console.log(err);
                }
                var css = tree.toCSS({compress: compress});
                cb(css);
            });
        }
    };
};