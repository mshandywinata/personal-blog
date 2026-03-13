const path = require("path");
const { ulid } = require("ulid");
const { readJson, writeJson, listJson, deleteJson } = require("../utils/fileHandler");

const folderPath = path.join(__dirname, "../data");

const getAllArticles = async () => {
    const data = await listJson();
    return Array.isArray(data) ? data : [];
}

const getArticleById = async (id) => {
    const articlePath = path.join(folderPath, `${id}.json`);
    return await readJson(articlePath);
}

const createArticle = async (title, content) => {
    const id = ulid();

    const articleData = {
        id,
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const articlePath = path.join(folderPath, `${id}.json`);
    await writeJson(articlePath, articleData);
}

const editArticle = async (id, title, content) => {
    const article = await getArticleById(id);

    article.title = title;
    article.content = content;
    article.updatedAt = new Date();

    const articlePath = path.join(folderPath, `${id}.json`);
    await writeJson(articlePath, article);
}

const deleteArticle = async (id) => {
    const articlePath = path.join(folderPath, `${id}.json`);
    await deleteJson(articlePath);
}

module.exports = { getAllArticles, getArticleById, createArticle, editArticle, deleteArticle };