# adaptive-encoding

video from different cameras will be of a different bit rate, so applying the same converstion transformation with ffmpeg will not produce output files consistently.

this package solves that problem by using ffprobe to detect certain attributes and then determines a better video encoding setting for ffmpeg resulting in more predictable output videos.

## requirements

 - install both ffmpeg and ffprob and have them accesable on the path
 - run `npm i` to install this packages dependencies

## usage


```
var ae = require('adaptive-encoding')
ae.encode('output-name', ['avi', 'mpeg4'], 1024)
```
