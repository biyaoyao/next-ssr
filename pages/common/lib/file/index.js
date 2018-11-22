/**
 * Created by BIYY on 2017-11-17.
 */
// import toast from '../toast'


let file = {}
    /**
     * 获取文件大小
     * @param size
     * @returns {*}
     */
file.fileSize = (size) => {
    let fsize = parseFloat(size, 2)
    let fileSizeString
    if (fsize < 1024) {
        fileSizeString = fsize.toFixed(2) + 'B'
    } else if (fsize < 1048576) {
        fileSizeString = (fsize / 1024).toFixed(2) + 'KB'
    } else if (fsize < 1073741824) {
        fileSizeString = (fsize / 1024 / 1024).toFixed(2) + 'MB'
    } else if (fsize < 1024 * 1024 * 1024 * 1024) {
        fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + 'GB'
    } else if (fsize < 1024 * 1024 * 1024 * 1024 * 1024) {
        fileSizeString = (fsize / 1024 / 1024 / 1024 / 1024).toFixed(2) + 'TB'
    } else {
        fileSizeString = '0B'
    }
    return fileSizeString
}

/**
 *  获取文件的后缀名
 * @param {Object} fileName
 * @returns {*}
 */
file.getExt = (fileName) => {
    if (fileName.lastIndexOf('.') === -1) {
        return fileName
    }
    let pos = fileName.lastIndexOf('.') + 1
    return fileName.substring(pos, fileName.length).toLowerCase()
}

/**
 * 验证是否为图片
 * @param fileName
 * @returns {Boolen}
 */
file.checkImage = (fileName) => {
    return /(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName)
}

/**
 * 验证是否为视频
 * @param fileName
 * @returns {Boolen}
 */
file.checkVideo = (fileName) => {
    return /(mp4|mp3|flv|wav)$/ig.test(fileName)
}

/**
 * 验证是否为文档
 * @param fileName
 * @returns {Boolen}
 */
file.checkDocument = (fileName) => {
    return /(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName)
}


/**
 * 获取图片base64
 * @param {*} img 
 */
file.getBase64Image = (img) => {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
        let dataURL = canvas.toDataURL("image/" + ext);
        return dataURL;
    }
    /**
     * base64   转blob
     * @param {*} img 
     */
file.convertBase64UrlToBlob = (urlData) => {
    let bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte        //处理异常,将ascii码小于0的转换为大于0
    let ab = new ArrayBuffer(bytes.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
}
export default file