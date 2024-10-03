const fs = require('fs');
const path = require('path');

for (let i = 0; i < 10; i++) {
    const filePath = path.join(__dirname, `log${i}.txt`);
    const content = 'This is Log ' + i + '\n';

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`log${i}.txt`);
    });
}

for (let i = 0; i < 10; i++) {
    const filePath = path.join(__dirname, `log${i}.txt`);

    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`delete files... log${i}.txt`);
    });
}