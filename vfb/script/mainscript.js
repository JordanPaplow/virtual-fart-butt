function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


var audioPlaying = false,
	audio

	(function() {
	audio = document.getElementById('audio');

	var audioControl = document.getElementById('audio-control');
	audioControl.addEventListener('click', audioControlHandler, false)
}())

function audioControlHandler(e) {
	var _self = e.target;

	if (!audioPlaying) {
		_self.classList.add('noVolume')
		audio.volume = 0
	} else {
		_self.classList.remove('noVolume')
		audio.volume = 1
	}
	audioPlaying = !audioPlaying
}
