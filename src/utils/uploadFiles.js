function getBase64(img) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result));
        reader.readAsDataURL(img);
    });
}

function beforeUpload(file, message) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('Solamente archivos JPG/PNG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('La imagen debe ser menor a 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export { getBase64, beforeUpload }