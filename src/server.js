const { port } = require("./config");
const app = require("./app");

app.listen(port, () => {
    console.info(`Server running on port ${port}`);
});