# Less (CSS) wrapper for SocketStream 0.3

Allows you to use [Less](http://lesscss.org/) files (.less) in your SocketStream project.


### Instructions

Add `ss-less` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-less'));
```

### JavaScript variable injection

The `ss-less` wrapper allows you to inject JavaScript variables into your Less code via a prepended Less string of your own making. For example:

	var ssLess = require('ss-less');
	var assetsPath = 'https://s3.amazonaws.com/example_assets_path/';
	...
	ssLess.prependLess('@assets-path: "' + assetsPath + '"');
	ss.client.formatters.add(ssLess);