const path = require("path");
const { readJson, folderPath, filePath, listJson } = require("../utils/fileHandler");

const getAllArticles = async () => {
    const data = await listJson(filePath);

    return Array.isArray(data) ? data : [];
}

const getArticleById = async (id) => {
    const articlePath = path.join(folderPath, `${id}.json`);
    return await readJson(articlePath);
}

module.exports = { getAllArticles, getArticleById };