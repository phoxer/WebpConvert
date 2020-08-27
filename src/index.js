const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');


(async () => {
    const exportData = await imagemin(['src/images/*.{jpg,jpeg,png}'], {
        destination: 'src/webps',
        plugins: [
            imageminWebp({
                quality: 80,
                alphaQuality: 80,
                method: 6
            })
        ]
    });
    exportData.forEach(({sourcePath,destinationPath})=>{
        console.log(`${sourcePath} | converted -> ${destinationPath}`);
    });
})();
