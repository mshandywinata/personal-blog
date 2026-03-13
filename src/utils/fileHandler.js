const path = require("path");
const fs = require("fs").promises;

const folderPath = path.join(__dirname, "../data");

const getFormattedDate = (date) => {
    if (!date) {
        date = new Date();
    } else {
        date = new Date(date);
    }

    return new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

const listJson = async () => {
    try {
        const files = await fs.readdir(folderPath);

        return Promise.all(
            files.map(async file => {
                return await readJson(`${folderPath}/${file}`);
            })
        );
    } catch (error) {
        console.error(`Error listing files: ${folderPath}`);
        return false;
    }
}

const readJson = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file: ${path}`);
        return null;
    }
}

const writeJson = async (path, data) => {
    try {
        const content = JSON.stringify(data, null, 2);
        await fs.writeFile(path, content, "utf-8");
        return true;
    } catch (error) {
        console.error(`Error writing file: ${path}`);
        return false;
    }
}

const deleteJson = async (path) => {
    try {
        await fs.access(path);
        await fs.unlink(path);
    } catch (error) {
        console.error(`Error deleting file: ${path}`);
        return false;
    }
}

module.exports = {
    folderPath,
    getFormattedDate,
    listJson,
    readJson,
    writeJson,
    deleteJson,
}