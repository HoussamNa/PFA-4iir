// Utiliser la bibliothèque jsQR pour lire les données du code QR
/*
const video = document.createElement('video');
const canvasElement = document.getElementById('canvas');
const canvas = canvasElement.getContext('2d');

function captureCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
            video.setAttribute('playsinline', true);
            video.play();
            requestAnimationFrame(captureFrame);
        });
}

function captureFrame() {
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
    });
    if (code) {
        // Générer le lien vers la page HTML contenant les informations du code QR
        const qrData = code.data;
        const qrLink = generateQrLink(qrData);
        // Afficher le lien dans une fenêtre pop-up
        window.open(qrLink, '_blank');
    }
    requestAnimationFrame(captureFrame);
}

function generateQrLink(qrData) {
    // Générer le lien vers la page HTML en utilisant les données du code QR
    const baseUrl = 'https://example.com/qr-info';
    const queryParams = new URLSearchParams({
        data: qrData,
    });
    return `${baseUrl}?${queryParams}`;
}

// Afficher le pop-up de la caméra pour scanner le code QR
captureCamera();
*/