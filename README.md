# Less (CSS) wrapper for SocketStream 0.3

Allows you to use [Less](http://lesscss.org/) files (.less) in your SocketStream project.


### Instructions

Add `ss-less` to your application's `package.json` file and then add this line to app.js:

```javascript
ss.client.formatters.add(require('ss-less'));
```