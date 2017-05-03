
var ffmpeg = require('fluent-ffmpeg');

function pMP4 (sInputFile, sOutputFilename) {
	return new Promise(
	    (resolve, reject) => {
	        var startMP4 = new Date();
	        ffmpeg(sInputFile)
	            .output(`${sOutputFilename}.mp4`)
	            .on('end', function() {
	                resolve();
	            })
	            .run();
	    }
	);
}

function pWEBM (sInputFile, sOutputFilename) {
	return new Promise(
		(resolve, reject) => {
	        var startWEBM = new Date();
	        ffmpeg(sInputFile)
	            .output(`${sOutputFilename}.webm`)
	            .on('end', function() {
	                resolve();
	            })
	            .run();
	    }
	);
}

function pAVI (sInputFile, sOutputFilename) {
	return new Promise(
		(resolve, reject) => {
	        var startAVI = new Date();
	        ffmpeg(sInputFile)
	            .output(`${sOutputFilename}.avi`)
	            .on('end', function() {
	                resolve();
	            })
	            .run();
	    }
	);
}

function convertAll(sInputFile, sOutputFilename) {
	Promise.all(
		[
			pMP4(sInputFile, sOutputFilename),
			pWEBM(sInputFile, sOutputFilename),
			pAVI(sInputFile, sOutputFilename)
		]
	).then(() => {
	    console.log('finished conevrting')
	});
}

exports.encode = function(sInputFile, sOutputFilename, aOutputFormats, iKilobytesPerSecond) {
	console.log(`convert ${sInputFile} into ${sOutputFilename}`);
	// pMP4(sInputFile, sOutputFilename)
	convertAll(sInputFile, sOutputFilename)
}
