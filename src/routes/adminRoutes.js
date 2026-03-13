const express = require("express");
const router = express.Router();
const basicAuth = require("../middlewares/auth");
const { getAllArticles, createArticle, getArticleById, editArticle, deleteArticle } = require("../services/adminService");
const { getFormattedDate } = require("../utils/fileHandler");

router.use(basicAuth);

router.get("/", (req, res) => {
    res.redirect("/admin");
});

router.get("/admin", async (req, res) => {
    const articles = await getAllArticles();
    const page = "Personal Blog"
    const title = page;
    res.render("index", { articles, page, title, isAdmin: true });
});

router.get("/new", (req, res) => {
    const createdAt = getFormattedDate();
    const page = "New Article";
    const title = page;
    res.render("admin/create", { createdAt, page, title });
});

router.post("/create", async (req, res) => {
    const { title, content } = req.body;
    await createArticle(title, content);
    res.redirect("/admin");
});

router.get("/edit/:id", async (req, res) => {
    const { id, title, content } = await getArticleById(req.params["id"]);
    const updatedAt = getFormattedDate();
    const page = "Edit Article"
    res.render("admin/edit", { id, title, content, updatedAt, page });
});

router.post("/edit/:id", async (req, res) => {
    const id = req.params["id"];
    const { title, content } = req.body;
    await editArticle(id, title, content);
    res.redirect("/admin");
});

router.get("/delete/:id", async (req, res) => {
    const id = req.params["id"];
    await deleteArticle(id);
    res.redirect("/admin");
});

module.exports = router;