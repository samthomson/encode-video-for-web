
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

function convertAll(sInputFile, sOutputFilename, aOutputFormats) {
	// build up array of conversion promises
	let aFormats = [];
	aOutputFormats.forEach((value) => {
		switch(value)
		{
			case 'mpeg4':
				aFormats.push(pMP4(sInputFile, sOutputFilename))
				break;
			case 'avi':
				aFormats.push(pAVI(sInputFile, sOutputFilename))
				break;
			case 'webm':
				aFormats.push(pWEBM(sInputFile, sOutputFilename))
				break;
		}
	})
	// do all requested conversion
	Promise.all(aFormats).then(() => {
	    console.log(`finished converting ${sInputFile}`)
	});
}

exports.encode = function(sInputFile, sOutputFilename, aOutputFormats, iKilobytesPerSecond) {
	console.log(`convert ${sInputFile} into ${sOutputFilename}`);
	convertAll(sInputFile, sOutputFilename, aOutputFormats)
}
