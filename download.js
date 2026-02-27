const https = require('https');
const fs = require('fs');

function download(url, dest) {
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
            'Referer': 'https://en.wikipedia.org/'
        }
    };

    https.get(url, options, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
            return download(res.headers.location, dest);
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('Downloaded ' + dest);
        });
    }).on('error', (err) => {
        console.error('Error downloading ' + dest + ':', err);
    });
}

download("https://upload.wikimedia.org/wikipedia/en/5/53/Fight_Club_The_Narrator.jpg", "public/edward.jpg");
download("https://upload.wikimedia.org/wikipedia/en/3/30/Fight_Club_Tyler_Durden.jpg", "public/tyler.jpg");
