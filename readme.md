# encode video for web

browser support for videos is inconsistent. a video should be converted to different formats before even deciding which video player to use.

this library uses ffmpeg and another wrapper package to help create all the required assets for a video, for you to publish it online

## requirements

 - install both ffmpeg  and have it accesable on the path
 - run `npm i` to install this packages dependencies

## usage


```
var ae = require('encode-video-for-web')
ae.encode('output-name', ['avi', 'mpeg4'], 1024)
```
