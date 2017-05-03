# encode video for web

browser support for videos is inconsistent. a video should be converted to different formats before even deciding which video player to use.

this library uses ffmpeg and another wrapper package to help create all the required assets for a video, for you to publish it online

## requirements

 - install both ffmpeg  and have it accesable on the path
 - run `npm i` to install this packages dependencies

## usage

Call `encode` passing in an input path, output file name, and an array of output formats (avi, mpeg4, webm)

encode takes three parameters:
 - input file: string, relative file path to mp4 avi (any filetype supported by ffmpeg) to convert
 - output name: string, will be used as the path and base name for the output files, each will have an appropriate file extension added
 - conversion types: string array, formats to conver to. supported; avi, mpeg4, webm

```
var ae = require('encode-video-for-web')
ae.encode('input-file.mp4', 'output-name', ['avi', 'mpeg4'])
```
