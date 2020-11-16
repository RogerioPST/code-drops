function startVideoFromCamera(){
	const specs = {
		video: {width: 1080, aspectRatio:21/9}

	}
//a api webrtc tem o objeto navigator e diz se quer capturar abaixo video e/ou microfone
	navigator.mediaDevices.getUserMedia(specs)
		.then(stream => {
			const videoElement = document.querySelector('#video')
			videoElement.srcObject = stream
		}).catch(error => console.log(error))
}

window.addEventListener('DOMContentLoaded', startVideoFromCamera)