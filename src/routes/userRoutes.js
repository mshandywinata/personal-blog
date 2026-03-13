const express = require("express");
const router = express.Router();
const { getFormattedDate } = require("../utils/fileHandler");
const { getAllArticles } = require("../services/userService");
const { getArticleById } = require("../services/userService");

router.get("/", (req, res) => {
    res.redirect("/home");
});

router.get("/home", async (req, res) => {
    const articles = await getAllArticles();
    res.render("index", { articles, isAdmin: false });
});

router.get("/article/:id", async (req, res) => {
    const { title, content, updatedAt } = await getArticleById(req.params["id"]);
    const formattedDate = getFormattedDate(updatedAt);
    const page = title;
    res.render("article", { title, content, formattedDate, page });
});

module.exports = router;