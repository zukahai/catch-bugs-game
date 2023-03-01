const fs = require('fs');
const path = require('path');

class FilePaths {
    constructor(directoryPath) {
        this.directoryPath = directoryPath;
    }

    getFilePaths() {
        const files = fs.readdirSync(this.directoryPath);
        let filePaths = [];

        files.forEach((file) => {
            const filePath = path.join(this.directoryPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                filePaths.push(filePath.replace(/\\/g, '/'));
            } else if (stat.isDirectory()) {
                const subFilePaths = new FilePaths(filePath).getFilePaths();
                filePaths = filePaths.concat(subFilePaths);
            }
        });

        return filePaths;
    }
}

const filePaths = new FilePaths('../assets').getFilePaths();
console.log(filePaths); // In ra danh sách đường dẫn tương đối của các tệp trong thư mục